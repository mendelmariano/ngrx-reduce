import { Action, createReducer, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/Usuario.model";
import * as fromUsuariosAction from "../usuarios/usuarios.actions";

export interface UsuariosState {
    usuarios: UsuarioModel[];
    usuario: UsuarioModel,
    error: string | ''
}

export const initialState: UsuariosState =  {
    usuarios : [],
    usuario : null,
    error : ''
}
const _usuarioReducer = createReducer(
    initialState,
    on(fromUsuariosAction.LoadUsuariosSucess,(state, { payLoad })=> ({...state, usuarios: payLoad, error: ''})),
    on(fromUsuariosAction.LoadUsuariosFail,(state, { error })=> ({...state, error: error})),

    on(fromUsuariosAction.LoadUsuarioSucess,(state, { payLoad })=> ({...state, usuario: payLoad, error: ''})),
    on(fromUsuariosAction.LoadUsuarioFail,(state, { error })=> ({...state, error: error})),

    on(fromUsuariosAction.CreateUsuarioSucess,(state, { payLoad })=> ({...state, usuarios: [...state.usuarios, payLoad], error: ''})),
    on(fromUsuariosAction.CreateUsuarioFail,(state, { error })=> ({...state, error: error})),

    on(fromUsuariosAction.UpdateUsuarioSucess,(state, { payLoad })=> ({
        ...state, 
        usuarios: [...state.usuarios].map( (row)=> {
            if(row.id === payLoad.id){
                return payLoad;
            }else{
                return row;
            }
        }), 
        error: ''
    })),
    on(fromUsuariosAction.CreateUsuarioFail,(state, { error })=> ({...state, error: error})),

    on(fromUsuariosAction.DeleteUsuarioSucess,(state, { payLoad })=> ({
        ...state, 
        usuarios: [...state.usuarios]
        .filter((filter)=> {filter.id != payLoad.id}), 
        error: ''
    })),
    on(fromUsuariosAction.CreateUsuarioFail,(state, { error })=> ({...state, error: error})),
)

export function usuarioReduce(state = initialState, action: Action){
    return _usuarioReducer(state, action);
}