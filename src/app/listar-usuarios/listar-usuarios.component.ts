import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../Models/Usuario.model';
import { AppState } from '../Store/app-state';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions';
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {


  listaUsuarios$ : Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios);
  usuario$ : Observable<UsuarioModel | null> = this.store.select(fromUsuariosSelector.getUsuario);

  constructor(
    
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }

  editar(id: number){
    this.store.dispatch(fromUsuariosAction.LoadUsuario({payload: id}))
  }

  excluir(id: number){
    this.store.dispatch(fromUsuariosAction.DeleteUsuario({payload: id}))
  }

}
