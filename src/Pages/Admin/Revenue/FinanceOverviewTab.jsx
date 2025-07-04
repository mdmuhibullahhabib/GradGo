import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const overviewData = {
  revenue: [
    { month: "Jan", amount: 40000 },
    { month: "Feb", amount: 55000 },
    { month: "Mar", amount: 60000 },
    { month: "Apr", amount: 58000 },
  ],
  earnings: [
    { month: "Jan", amount: 8000 },
    { month: "Feb", amount: 11000 },
    { month: "Mar", amount: 13000 },
    { month: "Apr", amount: 12500 },
  ],
  expend: [
    { month: "Jan", amount: 15000 },
    { month: "Feb", amount: 17000 },
    { month: "Mar", amount: 16000 },
    { month: "Apr", amount: 15500 },
  ],
  asset: [
    { month: "Jan", amount: 12000 },
    { month: "Feb", amount: 15000 },
    { month: "Mar", amount: 18000 },
    { month: "Apr", amount: 20000 }
  ],
};

const tabs = ["Revenue", "Earnings", "Expend", "Asset"];

const FinanceOverviewTab = () => {
  const [activeTab, setActiveTab] = useState("Revenue");

  // Summaries for each tab for quick card display
  const summaries = {
    Revenue: overviewData.revenue.reduce((acc, cur) => acc + cur.amount, 0),
    Earnings: overviewData.earnings.reduce((acc, cur) => acc + cur.amount, 0),
    Expend: overviewData.expend.reduce((acc, cur) => acc + cur.amount, 0),
    Asset: overviewData.asset.reduce((acc, cur) => acc + cur.amount, 0),
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Finance Overview</h2>

      {/* Tabs with summary cards */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer rounded-lg p-4 shadow-md w-40 text-center ${
              activeTab === tab
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 hover:bg-indigo-100"
            }`}
          >
            <h3 className="text-lg font-semibold">{tab}</h3>
            <p className="text-2xl font-bold mt-2">
              ৳ {summaries[tab].toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Combined Growth Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Monthly Trends Comparison
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={overviewData.revenue.map((item, index) => ({
                month: item.month,
                Revenue: item.amount,
                Earnings: overviewData.earnings[index].amount,
                Expend: overviewData.expend[index].amount,
                Asset: overviewData.asset[index].amount,
              }))}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Revenue"
                stroke="#4F46E5"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Earnings"
                stroke="#9333EA"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Expend"
                stroke="#DC2626"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Asset"
                stroke="#2563EB"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Active Tab Detail */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">
            {activeTab} Details (Monthly)
          </h4>
          <ul className="divide-y divide-gray-200 max-w-md mx-auto">
            {overviewData[activeTab.toLowerCase()].map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between py-2 px-4 hover:bg-gray-50 rounded"
              >
                <span>{item.month}</span>
                <span>৳ {item.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinanceOverviewTab;
