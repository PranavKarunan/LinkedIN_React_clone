
const user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null
export const userReducer=(state =user,action)=>{
    switch(action.type){
        case "LOGIN" :
        return action.payload;

        case "LOGOUT" :
        return action.payload;

        default:
            return state;
    }
}