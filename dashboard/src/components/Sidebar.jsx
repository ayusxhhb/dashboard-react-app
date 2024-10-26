import React from 'react';
import { AiOutlineHome, AiOutlinePieChart, AiOutlineUser, AiOutlineFile, AiOutlineSetting } from 'react-icons/ai';
import { FiHeart, FiClock } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white text-black flex flex-col p-6 shadow-md">
      {/* Site Title and Profile Picture */}
      <div className="flex items-center mb-10">
        <img
          src="https://images.unsplash.com/photo-1729219330287-a914170ca5ee?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          className="rounded-full w-10 h-10 mr-4"
        />
        <h2 className="text-2xl font-semibold">ByeWind</h2>
      </div>

      {/* Favourites and Recently Section */}
      <div className="flex justify-between items-center mb-8">
        <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-400 cursor-pointer">
          <FiHeart className="h-5 w-5" />
          <span>Favourites</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-400 cursor-pointer">
          <FiClock className="h-5 w-5" />
          <span>Recently</span>
        </button>
      </div>

      {/* Dashboard Section */}
      <div className="mb-8">
        <h3 className="text-gray-500 text-sm font-semibold mb-3">Dashboard</h3>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineHome className="h-5 w-5" />
            <span>Overview</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlinePieChart className="h-5 w-5" />
            <span>eCommerce</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineFile className="h-5 w-5" />
            <span>Projects</span>
          </li>
        </ul>
      </div>

      {/* Pages Section */}
      <div className="mb-8">
        <h3 className="text-gray-500 text-sm font-semibold mb-3">Pages</h3>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineUser className="h-5 w-5" />
            <span>User Profile</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineHome className="h-5 w-5" />
            <span>Overview</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineFile className="h-5 w-5" />
            <span>Projects</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlinePieChart className="h-5 w-5" />
            <span>Campaigns</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineFile className="h-5 w-5" />
            <span>Documents</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineUser className="h-5 w-5" />
            <span>Followers</span>
          </li>
        </ul>
      </div>

      {/* Corporate, Blog, Social */}
      <div>
        <ul className="space-y-4">
        <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineFile className="h-5 w-5" />
            <span>Account</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineFile className="h-5 w-5" />
            <span>Corporate</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineFile className="h-5 w-5" />
            <span>Blog</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-600 hover:text-gray-400 cursor-pointer">
            <AiOutlineUser className="h-5 w-5" />
            <span>Social</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
