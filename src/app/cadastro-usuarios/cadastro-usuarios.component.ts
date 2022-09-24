import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioModel } from '../Models/Usuario.model';
import { UsuarioService } from '../Repository/Usuario.service';
import { AppState } from '../Store/app-state';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  model: UsuarioModel = {id: 0, nome: '', idade: 0, perfil: ''}

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addUsuario() {
    
    
    if(this.model.id == 0) {
      console.log(' cadatra: ',this.model);
      console.log('formul: ', )
      // this.usuarioService.addUsuario(this.model).subscribe();
      this.store.dispatch(fromUsuariosAction.CreateUsuario({payload: this.model}));
      this.model = {id: 0, nome: '', idade: 0, perfil: ''};
    }else{
      //atualizar
      console.log('atualizar', this.model);
      this.store.dispatch(fromUsuariosAction.UpdateUsuario({payload: this.model}));
      
    }
  } 

}
