import React from 'react';
import './blog.css';

const Blog = () => {
    const blogPosts = [
  {
    title: 'Getting Started with React',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'John Doe',
    date: 'July 1, 2023'
  },
  {
    title: 'Mastering JSX',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Jane Smith',
    date: 'July 3, 2023'
  },
  {
    title: 'React Hooks: A Deep Dive',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Emily Johnson',
    date: 'July 6, 2023'
  },
  {
    title: 'The Power of CSS Grid',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Michael Brown',
    date: 'July 9, 2023'
  }
];

  return (
    <div className="blog-page">
      <h1>Welcome to the Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>
              <em>By {post.author}</em> - {post.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
