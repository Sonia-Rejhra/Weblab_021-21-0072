import React, { useState } from 'react';

const Comp = () => {
    const [posts, setPosts] = useState([]);
    const [posts2, setPosts2] = useState([]);

    const fetchPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          const newData  =  data.slice(0,3);
          setPosts((prev) => [...prev,...newData])}
        )
        .catch(error => console.error('Error fetching posts:', error));
    };

    const fetchPosts2 = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => {
            const newData  =  data.slice(0,3);
            setPosts2((prev) => [...prev,...newData])}
          )
          .catch(error => console.error('Error fetching posts:', error));
      };
  
    return (
        
      <div className='outter'>

        <div className='inner'>
            <h1>Posts</h1>
            <button onClick={fetchPosts}>Fetch Posts</button>
            <h3>There are {posts.length} posts available</h3>
            <ul>
            {posts.map(post => (
                <li key={post.id}>
                <h2>{post.name}</h2>
                </li>
            ))}
            </ul> 
        </div>

        <div className='inner'>
            <h1>Posts</h1>
            <button onClick={fetchPosts2}>Fetch Posts</button>
            <h3>There are {posts2.length} posts available</h3>
            <ul>
            {posts2.map(post => (
                <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </li>
            ))}
            </ul> 
        </div>

      </div>
    );
  }

export default Comp