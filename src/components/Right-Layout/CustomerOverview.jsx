import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
export default function CustomerOverview() {
  const overviewData = [
    { month: "Jan", customer: 4000 },
    { month: "Feb", customer: 3000 },
    { month: "Mar", customer: 5000 },
    { month: "Apr", customer: 4500 },
    { month: "May", customer: 6000 },
    { month: "Jun", customer: 5500 },
    { month: "Jul", customer: 7000 },
    { month: "Aug", customer: 7500 },
    { month: "Sep", customer: 8000 },
    { month: "Oct", customer: 8500 },
    { month: "Nov", customer: 9000 },
    { month: "Dec", customer: 9500 },
  ];
  return (
    <div className="relative bg-white rounded-xl ">
      {/* Heading */}
      <div className="flex justify-between p-2">
        <h4 className="font-lato">Customer Overview</h4>
      </div>

      {/* Chart */}
      <div className=" h-85 w-full px-5 mt-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={overviewData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="customer"
              stroke="#6E39CB"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
