import React, { useEffect, useState } from 'react';
import './Login.css';
import sha1 from 'sha1'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {getUsers,getPosts} from '../../redux/actionCreator'

const Login=()=>{
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const users = useSelector(state=> state.users);
    const history = useHistory();

    const validateLogin=(e)=>{
        e.preventDefault();
        const hashPasword = sha1(password);
        const isValidUser = users.find(x=> x.password === hashPasword && x.phone === phone);
        if(isValidUser){
            history.push('/home')
        }
    }

    useEffect(()=>{
        dispatch(getUsers());
    },[])

    return(
        <div className="login">
            <form onSubmit={validateLogin}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <input 
                     type="tel"
                     className="form-control" 
                     id="exampleInputEmail1" 
                     placeholder="Enter Phone" value={phone} onChange={e=> setPhone(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input 
                     type="password" 
                     className="form-control" 
                     id="exampleInputPassword1" 
                     placeholder="Password" 
                     value={password} onChange={e=> setPassword(e.target.value)}
                     />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}

export default Login;