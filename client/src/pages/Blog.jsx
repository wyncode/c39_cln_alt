import React, { useState, useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BlogSlideshow from '../pages/BlogSlideshow';
// import { post } from '../../../server/routes/secure/posts';

const Blog = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/posts/`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, setPosts]);

  return (
    <div className="blog-title">
      <h3>Blog</h3>
      <div>
        <section>
          <BlogSlideshow />
        </section>
      </div>
      <section className="the-latest">
        <h6>The Latest</h6>
      </section>
      <div class="flexbox-container">
        <div>
          {posts.map((post) => (
            <li key={post._id}>
              {/* <h3 className="sub-title">{post.subtitle}</h3> */}
              <h2 className="post-title">{post.title}</h2>
              <img url={post.image} alt={post.title} />
              {post.text}
            </li>
          ))}
        </div>
        <div>
          {posts.map((post) => (
            <li key={post._id}>
              {/* <h3 className="sub-title">{post.subtitle}</h3> */}
              <h2 className="post-title">{post.title}</h2>
              <img url={post.image} alt={post.title} />
              {post.text}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
