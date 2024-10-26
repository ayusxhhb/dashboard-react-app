import React from 'react';
import { AiOutlineBug, AiOutlineUser } from 'react-icons/ai';

const RightPanel = () => {
  return (
    <div className="w-64 h-screen bg-white p-6 font-sans text-gray-700">
      {/* Notifications Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <ul className="space-y-4">
          <li className="flex items-center text-sm">
            <AiOutlineBug className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              You fixed a bug.
              <span className="block text-xs text-gray-400">Just now</span>
            </div>
          </li>
          <li className="flex items-center text-sm">
            <AiOutlineUser className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              New user registered.
              <span className="block text-xs text-gray-400">59 minutes ago</span>
            </div>
          </li>
          <li className="flex items-center text-sm">
            <AiOutlineBug className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              You fixed a bug.
              <span className="block text-xs text-gray-400">12 hours ago</span>
            </div>
          </li>
          <li className="flex items-center text-sm">
            <AiOutlineUser className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              New subscriber ^_^
              <span className="block text-xs text-gray-400">Today, 11:59 AM</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Activities Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Activities</h2>
        <div className="relative">
          <ul className="space-y-6 pl-6 border-l border-gray-300">
            <li className="relative text-sm">
              <div className="absolute -left-3 h-3 w-3 bg-red-500 rounded-full"></div>
              <p>Changed the style <span className="block text-xs text-gray-400">Just now</span></p>
            </li>
            <li className="relative text-sm">
              <div className="absolute -left-3 h-3 w-3 bg-red-500 rounded-full"></div>
              <p>Released a new version <span className="block text-xs text-gray-400">10 mins ago</span></p>
            </li>
            <li className="relative text-sm">
              <div className="absolute -left-3 h-3 w-3 bg-red-500 rounded-full"></div>
              <p>Fixed a bug in notifications <span className="block text-xs text-gray-400">1 hour ago</span></p>
            </li>
          </ul>
        </div>
      </div>

      {/* Contacts Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Contacts</h2>
        <ul className="space-y-4">
          <li className="flex items-center text-sm">
            <img
              src="https://images.unsplash.com/photo-1729218621503-b4a57a7ab7a2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
              className="h-6 w-6 rounded-full mr-3"
            />
            Natalie Craig
          </li>
          <li className="flex items-center text-sm">
            <img
              src="https://images.unsplash.com/photo-1729508467488-17298959b8c2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
              className="h-6 w-6 rounded-full mr-3"
            />
            Drew Cano
          </li>
          <li className="flex items-center text-sm">
            <img
              src="https://images.unsplash.com/photo-1729693457054-33a15b1e32a1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
              className="h-6 w-6 rounded-full mr-3"
            />
            Andi Lane
          </li>
          <li className="flex items-center text-sm">
            <img
              src="https://plus.unsplash.com/premium_photo-1723651236716-96a383fa4937?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
              className="h-6 w-6 rounded-full mr-3"
            />
            Koray Okumus
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;
