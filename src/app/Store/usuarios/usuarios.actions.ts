import { createAction, props } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/Usuario.model";

export const enum usuariosTypeAction {
    LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS', 
    LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS', 
    LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL', 

    LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO', 
    LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS', 
    LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL', 

    CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO', 
    CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS', 
    CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',
    
    UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO', 
    UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE USUARIO SUCCESS', 
    UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL', 

    DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO', 
    DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE USUARIO SUCCESS', 
    DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL', 
}

// Load usuários 

export const LoadUsuarios = createAction(
    usuariosTypeAction.LOAD_USUARIOS
);

export const LoadUsuariosSucess = createAction(
    usuariosTypeAction.LOAD_USUARIOS_SUCCESS,
    props<{payLoad: UsuarioModel[]}>()
);

export const LoadUsuariosFail = createAction(
    usuariosTypeAction.LOAD_USUARIOS_FAIL,
    props<{error: string}>()
);

// Load usuário

export const LoadUsuario = createAction(
    usuariosTypeAction.LOAD_USUARIO,
    props<{payload: number}>()
);

export const LoadUsuarioSucess = createAction(
    usuariosTypeAction.LOAD_USUARIO_SUCCESS,
    props<{payLoad: UsuarioModel}>()
);

export const LoadUsuarioFail = createAction(
    usuariosTypeAction.LOAD_USUARIO_FAIL,
    props<{error: string}>()
);

// Create Usuario

export const CreateUsuario = createAction(
    usuariosTypeAction.CREATE_USUARIO,
    props<{payload: UsuarioModel}>()
);

export const CreateUsuarioSucess = createAction(
    usuariosTypeAction.CREATE_USUARIO_SUCCESS,
    props<{payLoad: UsuarioModel}>()
);

export const CreateUsuarioFail = createAction(
    usuariosTypeAction.CREATE_USUARIO_FAIL,
    props<{error: string}>()
);

// Update usuário


export const UpdateUsuario = createAction(
    usuariosTypeAction.UPDATE_USUARIO,
    props<{payload: UsuarioModel}>()
);

export const UpdateUsuarioSucess = createAction(
    usuariosTypeAction.UPDATE_USUARIO_SUCCESS,
    props<{payLoad: UsuarioModel}>()
);

export const UpdateUsuarioFail = createAction(
    usuariosTypeAction.UPDATE_USUARIO_FAIL,
    props<{error: string}>()
);

// Delete usuário


export const DeleteUsuario = createAction(
    usuariosTypeAction.DELETE_USUARIO,
    props<{payload: UsuarioModel}>()
);

export const DeleteUsuarioSucess = createAction(
    usuariosTypeAction.DELETE_USUARIO_SUCCESS,
    props<{payLoad: UsuarioModel}>()
);

export const DeleteUsuarioFail = createAction(
    usuariosTypeAction.DELETE_USUARIO_FAIL,
    props<{error: string}>()
);