import { CONNECT_USER, DECONNECT_USER } from "./action";

let stateInit = { idUser: null };

const reducer = (state = stateInit, action = {}) => {
    console.log(action);
    switch (action.type) {
        case CONNECT_USER:
            return {
                ...state,
                idUser: action.id,
            };
        case DECONNECT_USER:
            return {
                ...state,
                idUser: null,
            };
        default:
            return state;
    }
};

export default reducer;
