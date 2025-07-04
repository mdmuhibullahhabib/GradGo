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

const AssetTab = () => {
  const assets = [
    {
      month: "January",
      total: 12000,
      daily: [
        { date: "Jan 04", amount: 3000 },
        { date: "Jan 18", amount: 5000 },
      ],
    },
    {
      month: "February",
      total: 15000,
      daily: [
        { date: "Feb 07", amount: 6000 },
        { date: "Feb 20", amount: 9000 },
      ],
    },
    {
      month: "March",
      total: 18000,
      daily: [
        { date: "Mar 06", amount: 7000 },
        { date: "Mar 25", amount: 8500 },
      ],
    },
  ];

  const totalAssets = assets.reduce((sum, item) => sum + item.total, 0);

  const graphData = assets.map((item, index) => {
    const prev = index > 0 ? assets[index - 1].total : 0;
    const growth = prev ? (((item.total - prev) / prev) * 100).toFixed(1) : 0;
    return {
      name: item.month,
      assets: item.total,
      growth: parseFloat(growth),
    };
  });

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-blue-700">Assets Overview</h3>
      <p className="text-sm font-medium mb-4 text-gray-600">
        Total Assets: <span className="text-blue-600 font-semibold">৳ {totalAssets.toLocaleString()}</span>
      </p>

      {/* Graph Section */}
      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={graphData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="assets"
              stroke="#60a5fa"
              strokeWidth={2}
            />
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
      {assets.map((month, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded">
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

export default AssetTab;
