import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../navigation';
import {getPosts} from '../../redux/actionCreator'
import './Post.css'
import Card from '../Card';

const Post=()=>{
    const dispatch = useDispatch();
    const posts = useSelector(state=> state.posts);

    useEffect(()=>dispatch(getPosts()),[])
    return (
        <div className="post-wrapper">
            <Navigation/>
            <div className="postContainer">
                {
                    posts.map(post=>
                      <Card id={post.id} title={post.title} ownerName={post.ownerName} subject={post.subject}/>
                    )
                }
            </div>

        </div>
    )
}

export default Post;