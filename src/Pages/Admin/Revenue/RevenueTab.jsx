import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RevenueTab = () => {
  const revenueData = [
    {
      month: "January",
      total: 40000,
      daily: [
        { date: "Jan 01", amount: 3000 },
        { date: "Jan 05", amount: 5000 },
      ],
    },
    {
      month: "February",
      total: 55000,
      daily: [
        { date: "Feb 03", amount: 4000 },
        { date: "Feb 10", amount: 7500 },
      ],
    },
    {
      month: "March",
      total: 67000,
      daily: [
        { date: "Mar 02", amount: 6000 },
        { date: "Mar 11", amount: 7200 },
      ],
    },
  ];

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.total, 0);

  const graphData = revenueData.map((item, index) => {
    const prev = index > 0 ? revenueData[index - 1].total : 0;
    const growth = prev ? (((item.total - prev) / prev) * 100).toFixed(1) : 0;
    return {
      name: item.month,
      revenue: item.total,
      growth: parseFloat(growth),
    };
  });

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-green-700">Total Revenue Overview</h3>
      <p className="text-sm font-medium mb-4 text-gray-600">
        Combined Revenue: <span className="text-green-600 font-semibold">৳ {totalRevenue.toLocaleString()}</span>
      </p>

      {/* Graph */}
      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={graphData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#4ade80" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-around mt-4 text-sm text-gray-600">
          {graphData.map((item) => (
            <div key={item.name} className="text-center">
              <p className="font-medium">{item.name}</p>
              <p>Growth: {item.growth}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Breakdown */}
      {revenueData.map((month) => (
        <div key={month.month} className="mb-6">
          <div className="flex justify-between items-center text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded">
            <span>{month.month}</span>
            <span>৳ {month.total.toLocaleString()}</span>
          </div>
          <div className="ml-4 mt-2">
            {month.daily.map((day, i) => (
              <div key={i} className="text-sm flex justify-between text-gray-700">
                <span>{day.date}</span>
                <span>৳ {day.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RevenueTab;
