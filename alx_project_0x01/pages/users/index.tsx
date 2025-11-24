import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">User 1</h3>
            <p className="text-gray-600">user1@example.com</p>
          </div>
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">User 2</h3>
            <p className="text-gray-600">user2@example.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;

