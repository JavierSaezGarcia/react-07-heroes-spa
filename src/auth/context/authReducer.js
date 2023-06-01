import { types } from "../types/types";



export const authReducer = (state = {}, action) => {
    // Los reducers no llevas funciones externas totalmente prohibido como un localstorage
    // Esto se hace para que funcione como una funcion pura (nada de llamadas externas a la funcion reductora)
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user:  action.payload,
            };
        case types.logout:
            return {
                logged: false,
            };
        default:
            return state;
    }
}