import {GET_ALL_USERS, GET_POSTS, SET_LOGIN_USER} from './actionType'

export const getUsers=()=>
    async (dispatch)=> fetch(`http://localhost:3000/users`).then(response=> response.json()).then(res=>{
        dispatch({
            type: GET_ALL_USERS,
            payload: res
        })
    });

export const getPosts=()=> 
    async (dispatch)=> fetch(`http://localhost:3000/posts`).then(response=> response.json()).then(res=>{
        dispatch({
            type: GET_POSTS,
            payload: res
        })
    });

export const setCurrrentLoggedInUser=(payload)=>{
    return {type: SET_LOGIN_USER, payload: payload}
}