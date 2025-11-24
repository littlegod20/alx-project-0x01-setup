import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import PostCard from '../../components/common/PostCard';

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostCard
            title="Sample Post 1"
            content="This is a sample post content."
            author="John Doe"
            date="2024-01-01"
          />
          <PostCard
            title="Sample Post 2"
            content="This is another sample post content."
            author="Jane Smith"
            date="2024-01-02"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;

