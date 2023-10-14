import React from 'react';
import Post from '../components/posts';

const posts = [
  {
    userName: 'John Doe',
    content: 'Hello, World!',
    imageUrl: '',
  },
  {
    userName: 'Jane Smith',
    content: 'Enjoying a beautiful day.',
    imageUrl: 'https://example.com/image2.jpg',
  },
];

function HomePage() {
  return (
    <div className="container mt-4">
        {posts.map((post, index) => (
          <Post
            key={index}
            userName={post.userName}
            content={post.content}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
  )
}

export default HomePage