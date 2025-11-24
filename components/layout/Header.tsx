import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            ALX Project
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link
              href="/posts"
              className="hover:text-blue-600 transition-colors"
            >
              Posts
            </Link>
            <Link
              href="/users"
              className="hover:text-blue-600 transition-colors"
            >
              Users
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
