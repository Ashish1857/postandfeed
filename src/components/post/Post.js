import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actionCreator';
import Card from '../Card';
import Navigation from '../navigation';
import PostDetails from '../PostDetails';
import './Post.css';

const Post=()=>{
    const dispatch = useDispatch();
    const posts = useSelector(state=> state.posts);
    const currentUser = useSelector(state=> state.loggedInUser);
    const [showDetail, setShowDetail] = useState(false);
    const [post, setPost] = useState({});

    useEffect(()=>dispatch(getPosts()),[])
    return (
        <div className="post-wrapper">
            <Navigation/>
            <div className="postContainer">
                { !showDetail ?
                    posts.map(post=>
                        post.ownerId === currentUser.id && 
                        <div 
                        className="cardWrapper" 
                        onClick={()=>{
                            setShowDetail(true);
                            setPost(post);
                        }}>
                            <Card 
                                comments={post.comments} 
                                id={post.id} 
                                title={post.title} 
                                ownerName={post.ownerName} 
                                subject={post.subject}
                            />
                        </div>
                    ):
                    <PostDetails  
                        comments={post.comments} 
                        id={post.id} 
                        title={post.title} 
                        ownerName={post.ownerName} 
                        subject={post.subject}
                     />
                }
            </div>

        </div>
    )
}

export default Post;