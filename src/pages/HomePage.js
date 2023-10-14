import React from 'react';
import Post from '../components/posts';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

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
    <Layout>
      <Hero/>
    </Layout>
  )
}

export default HomePage