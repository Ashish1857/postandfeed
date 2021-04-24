import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actionCreator';
import Card from '../Card';
import Navigation from '../navigation';
import '../post/Post.css';

const Feed=()=>{
    const dispatch = useDispatch();
    const posts = useSelector(state=> state.posts);
    const currentUser = useSelector(state=> state.loggedInUser)

    useEffect(()=>dispatch(getPosts()),[])
    return (
        <div className="post-wrapper">
            <Navigation/>
            <div className="postContainer">
                {
                    posts.map(post=>
                        post.ownerId !== currentUser.id && <Card comments={post.comments} id={post.id} title={post.title} ownerName={post.ownerName} subject={post.subject}/>
                    )
                }
            </div>

        </div>
    )
}

export default Feed;