import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
export default function RevenueOverview() {
  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 4500 },
    { month: "May", revenue: 6000 },
    { month: "Jun", revenue: 5500 },
    { month: "Jul", revenue: 7000 },
    { month: "Aug", revenue: 7500 },
    { month: "Sep", revenue: 8000 },
    { month: "Oct", revenue: 8500 },
    { month: "Nov", revenue: 9000 },
    { month: "Dec", revenue: 9500 },
  ];
  return (
    <div className="relative bg-white rounded-xl  ">
      {/* Heading */}
      <div className="flex justify-between p-2">
        <h4 className="font-lato">Revenue Overview</h4>
      </div>

      {/* Chart */}
      <div className=" h-85 w-full px-5 mt-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="linear"
              dataKey="revenue"
              stroke="#6E39CB"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
