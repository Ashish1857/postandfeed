import {GET_ALL_USERS,GET_POSTS, SET_LOGIN_USER} from './actionType'

const initialState={
    users:[],
    posts:[],
    loggedInUser:{}
}


const reducer = (state = {...initialState}, action)=>{

    switch(action.type){
        case GET_ALL_USERS:
            return {...state, users: action.payload}

        case GET_POSTS:
            return {...state, posts: action.payload}
        
        case SET_LOGIN_USER:
            return {...state, loggedInUser: action.payload}

        default:
            return {...state}
    }
}

export default reducer;