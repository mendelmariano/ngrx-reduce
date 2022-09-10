import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../Models/Usuario.model';

@Injectable({providedIn: 'root'})

export class UsuarioService {

    url: string = "http://localhost:3000/Usuarios/"

    constructor(private http: HttpClient){

    }

    getUsuarios () {
        return this.http.get<UsuarioModel[]>(this.url);
    }

    getUsuario (id: number) {
        return this.http.get<UsuarioModel>(this.url+id);
    }

    addUsuario (record: UsuarioModel) {
        console.log('service: ', record);
        
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.post<UsuarioModel>(this.url, record, {headers});
    }

    updateUsuario (record: UsuarioModel) {
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.put<UsuarioModel>(this.url+record.id, record, {headers});
    }

    deleteUsuario (id: number) {
        let headers = new HttpHeaders();
        return this.http.delete(this.url+id, {headers} );
    }
}