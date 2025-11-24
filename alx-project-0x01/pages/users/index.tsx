import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '../../components/layout/Footer';
import UserModal from '@/components/common/UserModal';
import { UserData } from '@/interfaces';

const UsersPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: Omit<UserData, 'id'>) => {
    console.log('New user added:', newUser);
    // Here you would typically add the user to your state or send it to an API
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition-colors"
          >
            Add User
          </button>
        </div>
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

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export default UsersPage;
