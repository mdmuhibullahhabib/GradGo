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

const EarningsTab = () => {
  const earningsData = [
    {
      month: "January",
      total: 8000,
      daily: [
        { date: "Jan 01", amount: 600 },
        { date: "Jan 05", amount: 1000 },
      ],
      transactions: ["TXN001", "TXN002"],
    },
    {
      month: "February",
      total: 11000,
      daily: [
        { date: "Feb 03", amount: 900 },
        { date: "Feb 10", amount: 1500 },
      ],
      transactions: ["TXN003"],
    },
    {
      month: "March",
      total: 13800,
      daily: [
        { date: "Mar 02", amount: 1200 },
        { date: "Mar 11", amount: 1500 },
      ],
      transactions: ["TXN004", "TXN005", "TXN006"],
    },
  ];

  const totalEarnings = earningsData.reduce((sum, item) => sum + item.total, 0);

  const graphData = earningsData.map((item, index) => {
    const prev = index > 0 ? earningsData[index - 1].total : 0;
    const growth = prev ? (((item.total - prev) / prev) * 100).toFixed(1) : 0;
    return {
      name: item.month,
      earnings: item.total,
      growth: parseFloat(growth),
    };
  });

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-purple-700">Total Earnings (20%)</h3>
      <p className="text-sm font-medium mb-4 text-gray-600">
        Combined Earnings: <span className="text-purple-600 font-semibold">৳ {totalEarnings.toLocaleString()}</span>
      </p>

      {/* Chart */}
      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={graphData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="earnings"
              stroke="#a78bfa"
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

      {/* Monthly Details */}
      {earningsData.map((month) => (
        <div key={month.month} className="mb-6">
          <div className="flex justify-between text-purple-600 font-semibold bg-purple-50 px-4 py-2 rounded">
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
            <div className="text-xs mt-2 text-gray-500">
              Transactions: {month.transactions.join(", ")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EarningsTab;
