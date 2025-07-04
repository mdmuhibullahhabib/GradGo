import React, { useState } from "react";
import RevenueTab from "./RevenueTab";
import EarningsTab from "./EarningsTab";
import ExpendTab from "./ExpendTab";
import AssetTab from "./AssetTab";
import FinanceOverviewTab from "./FinanceOverviewTab";

const tabs = ["FinanceOverview", "Revenue", "Earnings", "Expend", "Asset"];

const Finance = () => {
  const [activeTab, setActiveTab] = useState("FinanceOverview");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Finance Dashboard</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`btn btn-sm ${
              activeTab === tab ? "btn-primary" : "btn-outline"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded shadow p-4">
        {activeTab === "FinanceOverview" && <FinanceOverviewTab />}
        {activeTab === "Revenue" && <RevenueTab />}
        {activeTab === "Earnings" && <EarningsTab />}
        {activeTab === "Expend" && <ExpendTab />}
        {activeTab === "Asset" && <AssetTab />}
      </div>
    </div>
  );
};

export default Finance;