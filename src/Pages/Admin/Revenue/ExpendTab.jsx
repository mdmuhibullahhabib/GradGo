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

const ExpendTab = () => {
  const expenseData = [
    {
      month: "January",
      salary: [
        { name: "Shamim", role: "Manager", amount: 20000 },
        { name: "Salma", role: "Support", amount: 12000 },
      ],
      otherCosts: [
        { label: "Hosting", amount: 5000 },
        { label: "Marketing", amount: 8000 },
      ],
    },
    {
      month: "February",
      salary: [
        { name: "Shamim", role: "Manager", amount: 20000 },
        { name: "Salma", role: "Support", amount: 13000 },
        { name: "Tuhin", role: "Intern", amount: 4000 },
      ],
      otherCosts: [
        { label: "Hosting", amount: 5000 },
        { label: "Marketing", amount: 9000 },
        { label: "Software", amount: 3000 },
      ],
    },
    {
      month: "March",
      salary: [
        { name: "Shamim", role: "Manager", amount: 20000 },
        { name: "Salma", role: "Support", amount: 13000 },
        { name: "Tuhin", role: "Intern", amount: 5000 },
      ],
      otherCosts: [
        { label: "Hosting", amount: 5000 },
        { label: "Marketing", amount: 8500 },
        { label: "Software", amount: 4000 },
        { label: "Office Supplies", amount: 2000 },
      ],
    },
  ];

  const totalExpenditure = expenseData.reduce(
    (sum, month) =>
      sum +
      month.salary.reduce((s, e) => s + e.amount, 0) +
      month.otherCosts.reduce((s, e) => s + e.amount, 0),
    0
  );

  const graphData = expenseData.map((item, index) => {
    const totalSalary = item.salary.reduce((sum, s) => sum + s.amount, 0);
    const totalOther = item.otherCosts.reduce((sum, o) => sum + o.amount, 0);
    const total = totalSalary + totalOther;
    const prev = index > 0 ? expenseData[index - 1].salary.reduce((s, x) => s + x.amount, 0) + expenseData[index - 1].otherCosts.reduce((s, x) => s + x.amount, 0) : 0;
    const growth = prev ? (((total - prev) / prev) * 100).toFixed(1) : 0;
    return {
      name: item.month,
      total,
      growth: parseFloat(growth),
    };
  });

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-red-700">Expenditures Overview</h3>
      <p className="text-sm font-medium mb-4 text-gray-600">
        Total Spent: <span className="text-red-600 font-semibold">৳ {totalExpenditure.toLocaleString()}</span>
      </p>

      {/* Graph */}
      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={graphData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#f87171" strokeWidth={2} />
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
      {expenseData.map((month, idx) => (
        <div key={idx} className="mb-6">
          <div className="flex justify-between items-center text-red-600 font-semibold bg-red-50 px-4 py-2 rounded">
            <span>{month.month}</span>
            <span>
              ৳{" "}
              {(
                month.salary.reduce((s, e) => s + e.amount, 0) +
                month.otherCosts.reduce((s, e) => s + e.amount, 0)
              ).toLocaleString()}
            </span>
          </div>

          <div className="ml-4 mt-3">
            <h4 className="text-md font-bold mb-1 text-gray-800">Salaries</h4>
            {month.salary.map((emp, i) => (
              <div key={i} className="flex justify-between text-sm text-gray-700">
                <span>{emp.name} ({emp.role})</span>
                <span>৳ {emp.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div className="ml-4 mt-3">
            <h4 className="text-md font-bold mb-1 text-gray-800">Other Costs</h4>
            {month.otherCosts.map((cost, i) => (
              <div key={i} className="flex justify-between text-sm text-gray-700">
                <span>{cost.label}</span>
                <span>৳ {cost.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpendTab;
