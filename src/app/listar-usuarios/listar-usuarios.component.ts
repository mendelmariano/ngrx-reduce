import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../Models/Usuario.model';
import { UsuarioService } from '../Repository/Usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  listaUsuarios: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => this.listaUsuarios = usuarios);

  }

}
