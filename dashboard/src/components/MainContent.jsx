import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

const stats = [
  { name: 'Views', value: '7,265', change: '+11.01%' },
  { name: 'Visits', value: '3,671', change: '-0.03%' },
  { name: 'New Users', value: '156', change: '+15.03%' },
  { name: 'Active Users', value: '2,318', change: '+6.08%' },
];

// Line chart data
const userData = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3000 },
  { name: 'Mar', users: 2000 },
  { name: 'Apr', users: 2780 },
  { name: 'May', users: 1890 },
  { name: 'Jun', users: 2390 },
  { name: 'Jul', users: 3490 },
];

// Pie chart data for Traffic by Website
const trafficData = [
  { name: 'Google', value: 400 },
  { name: 'YouTube', value: 300 },
  { name: 'Instagram', value: 200 },
  { name: 'Pinterest', value: 100 },
];

// Traffic by Device data
const deviceData = [
  { device: 'Linux', users: 700 },
  { device: 'Mac', users: 600 },
  { device: 'iOS', users: 900 },
  { device: 'Windows', users: 1200 },
  { device: 'Android', users: 800 },
  { device: 'Other', users: 200 },
];

// Traffic by Location data
const locationData = [
  { name: 'USA', value: 600 },
  { name: 'India', value: 400 },
  { name: 'UK', value: 200 },
  { name: 'Canada', value: 100 },
];

const formatYAxis = (tick) => `${tick / 1000}k`;

const RoundedBar = ({ x, y, width, height, fill }) => {
    const radius = 5; // Adjust this value for more or less rounding
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          rx={radius}
          ry={radius} // Setting the same value for both corners
        />
      </g>
    );
  };
  

const MainContent = () => {
  return (
    <div className="p-6 min-h-screen">
      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="p-6 bg-gray-200 shadow-lg rounded-lg">
            <h3 className="text-gray-600">{stat.name}</h3>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            <p className={`text-sm ${stat.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Container */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        {/* Total Users Over Time (2/3 space) */}
        <div className="col-span-2 p-6 bg-blue-100 shadow-lg rounded-lg h-64">
          <h4 className="text-gray-600">Total Users Over Time</h4>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={formatYAxis} />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#4F46E5" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic by Website (1/3 space with hole) */}
        <div className="col-span-1 p-6 bg-gray-200 shadow-lg rounded-lg h-64">
          <h4 className="text-gray-600">Traffic by Website</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip />
              <Pie
                data={trafficData}
                dataKey="value"
                outerRadius={80}
                innerRadius={40} // This creates the hole in the pie chart
                fill="#8884d8"
              >
                {trafficData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'][index % 4]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* New Charts Row with Swapped Positions */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        {/* Traffic by Location (1/3 space with hole) */}
        <div className="col-span-1 p-6 bg-gray-200 shadow-lg rounded-lg h-64">
          <h4 className="text-gray-600">Traffic by Location</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip />
              <Pie
                data={locationData}
                dataKey="value"
                outerRadius={80}
                innerRadius={40} // This creates the hole in the pie chart
                fill="#8884d8"
              >
                {locationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'][index % 4]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic by Device (2/3 space with smaller bars) */}
        <div className="col-span-2 p-6 bg-blue-100 shadow-lg rounded-lg h-64">
          <h4 className="text-gray-600">Traffic by Device</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={deviceData} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="device" />
              <YAxis tickFormatter={formatYAxis} />
              <Tooltip />
              <Bar dataKey="users" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
