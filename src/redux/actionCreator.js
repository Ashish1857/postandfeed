import {GET_ALL_USERS, GET_POSTS} from './actionType'

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