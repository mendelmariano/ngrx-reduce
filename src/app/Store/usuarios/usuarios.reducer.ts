import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/Usuario.model";

import * as fromUsuariosAction from "./usuarios.actions"

export interface UsuariosState{
    usuarios: UsuarioModel[];
    usuario: UsuarioModel | null,
    error: string | ''
}

export const initialState: UsuariosState = {
    usuarios : [],
    usuario: null,
    error: ''
}

const _usuariosReducer= createReducer(
    initialState,
    on(fromUsuariosAction.LoadUsuariosSucess,(state,{ payLoad })=>({...state, usuarios: payLoad, error: ''})),
    on(fromUsuariosAction.LoadUsuariosFail,(state,{ error })=>({...state, error: error})),

    on(fromUsuariosAction.LoadUsuarioSucess,(state,{ payLoad })=>({...state, usuario: payLoad, error: ''})),
    on(fromUsuariosAction.LoadUsuarioFail,(state,{ error })=>({...state, error: error})),

    on(fromUsuariosAction.CreateUsuarioSucess,(state,{ payLoad })=>({...state, usuarios: [...state.usuarios, payLoad], error: ''})),
    on(fromUsuariosAction.CreateUsuarioFail,(state,{ error })=>({...state, error: error})),

    on(fromUsuariosAction.UpdateUsuarioSucess,(state,{ payLoad })=>({
        ...state, 
        usuarios: [...state.usuarios].map((row)=>{
            if(row.id == payLoad.id){
                return payLoad;
            }
            else{
                return row;
            }
        }), 
        error: ''
    })),
    on(fromUsuariosAction.CreateUsuarioFail,(state,{ error })=>({...state, error: error})),

    on(fromUsuariosAction.DeleteUsuarioSucess,(state,{ payLoad })=>({
        ...state, 
        usuarios: [...state.usuarios].filter((filter)=> filter.id != payLoad), 
        error: ''})),
    on(fromUsuariosAction.CreateUsuarioFail,(state,{ error })=>({...state, error: error})),
)

export function usuariosReducer(state = initialState, action: Action){
    return _usuariosReducer(state, action);
}


const getUsuariosFeatureState = createFeatureSelector<UsuariosState>(
    'usuarios'
)

export const getUsuarios = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios
)

export const getUsuario = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuario
)

export const getUsuarioErro = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.error
)

export const getUsuariosAdministradores = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios.filter((filter)=> filter.perfil == 'Administrador')
)

export const getUsuariosAdministradoresPorParametro = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState, props:{ perfil:string }) => state.usuarios.filter((filter)=> filter.perfil == props.perfil)
)

export const getUsuariosIdadeMaiorQue50 = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios.filter((filter)=> filter.idade >= 50)
)