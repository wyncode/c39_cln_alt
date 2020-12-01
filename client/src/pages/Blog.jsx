import React, { useState, useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';
import BlogSlideshow from '../pages/BlogSlideshow';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('/api/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Blog</h3>
      <section>
        <BlogSlideshow />
      </section>
      <h6>The Latest</h6>
      {posts.map((post) => (
        <li key={post._id}>
          <h2 className="post-title">{post.title}</h2>
          {/* <img url={post.image} alt={post.title} /> */}
          {/* {post.text} */}
        </li>
      ))}
    </div>
  );
};

export default Blog;
