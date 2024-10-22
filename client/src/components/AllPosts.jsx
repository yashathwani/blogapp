import { useEffect, useState } from 'react';
import './AllPosts.css';
import Post from './Post';

export default function AllPosts() {
    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(data => {
                setPosts(data);  // This triggers a re-render
            });
        });
    }, []);

    // // This useEffect will run whenever the `Posts` state is updated
    // useEffect(() => {
    //     console.log(Posts);  // This will log the updated value of `Posts`
    // }, [Posts]);

    return (
        <div className="blog-container">
            {
                Posts.length > 0 && Posts.map((post) => (
                    <Post {...post} key={post._id} />
                ))
            }
        </div>
    );
}
