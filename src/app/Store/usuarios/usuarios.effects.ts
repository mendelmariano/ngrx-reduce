import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { UsuarioService } from "src/app/Repository/Usuario.service";

import * as fromUsuariosAction from "./usuarios.actions";

@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions, private usuariosService: UsuarioService) {
    }

    loadUsuarios$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.LOAD_USUARIOS),
                exhaustMap(() => this.usuariosService.getUsuarios()
                    .pipe(
                        map(payLoad =>
                            fromUsuariosAction.LoadUsuariosSucess({ payLoad }),
                            catchError(error => of(fromUsuariosAction.LoadUsuariosFail({ error })))
                        )
                    )
                )
            )
    )

    loadUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.LOAD_USUARIO),
                exhaustMap((record:any) => this.usuariosService.getUsuario(record.payload)
                    .pipe(
                        map(payLoad =>
                            fromUsuariosAction.LoadUsuarioSucess({ payLoad }),
                            catchError(error => of(fromUsuariosAction.LoadUsuarioFail({ error })))
                        )
                    )
                )
            )
    )

    createUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.CREATE_USUARIO),
                exhaustMap((record:any) => this.usuariosService.addUsuario(record.payload)
                    .pipe(
                        map(payLoad =>
                            fromUsuariosAction.CreateUsuarioSucess({ payLoad }),
                            catchError(error => of(fromUsuariosAction.CreateUsuarioFail({ error })))
                        )
                    )
                )
            )
    )

    updateUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.UPDATE_USUARIO),
                exhaustMap((record:any) => this.usuariosService.updateUsuario(record.payload)
                    .pipe(
                        map(payLoad =>
                            fromUsuariosAction.UpdateUsuarioSucess({ payLoad }),
                            catchError(error => of(fromUsuariosAction.UpdateUsuarioFail({ error })))
                        )
                    )
                )
            )
    )

    deleteUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.DELETE_USUARIO),
                exhaustMap((record:any) => this.usuariosService.deleteUsuario(record.payload)
                    .pipe(
                        map(() =>
                            fromUsuariosAction.DeleteUsuarioSucess({ payLoad: record.payload }),
                            catchError(error => of(fromUsuariosAction.DeleteUsuarioFail({ error })))
                        )
                    )
                )
            )
    )

}