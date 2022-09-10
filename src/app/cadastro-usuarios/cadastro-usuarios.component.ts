import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../Models/Usuario.model';
import { UsuarioService } from '../Repository/Usuario.service';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  model: UsuarioModel = {id: 0, nome: '', idade: 0, perfil: ''}

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  addUsuario() {
    
    if(this.model.id == 0) {
      console.log(' cadatra: ',this.model);
      this.usuarioService.addUsuario(this.model).subscribe();
    }
  }

}
