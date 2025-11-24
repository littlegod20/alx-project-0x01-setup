import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} ALX Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
