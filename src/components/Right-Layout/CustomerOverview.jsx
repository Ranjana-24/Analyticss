import {useSelector} from "react-redux";
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
  // const overviewData = [
  //   { month: "Jan", customer: 4000 },
  //   { month: "Feb", customer: 3000 },
  //   { month: "Mar", customer: 5000 },
  //   { month: "Apr", customer: 4500 },
  //   { month: "May", customer: 6000 },
  //   { month: "Jun", customer: 5500 },
  //   { month: "Jul", customer: 7000 },
  //   { month: "Aug", customer: 7500 },
  //   { month: "Sep", customer: 8000 },
  //   { month: "Oct", customer: 8500 },
  //   { month: "Nov", customer: 9000 },
  //   { month: "Dec", customer: 9500 },
  // ];
  const {data, selectedCountry, selectedYear} = useSelector(state => state.ecommerce);
  const overviewData = data.filter((item) => item.country === selectedCountry && item.year === selectedYear);
  return (
    <div className="relative bg-gray-50 rounded-xl shadow-sm">
      {/* Heading */}
         <div className=" flex justify-between p-2">
        <div>
        <h4 className="font-lato font-semibold text-[102%]">
          Customer Overview : {selectedCountry} -({selectedYear})</h4>
        
      </div>
      <select className="text-sm font-lato px-2   hover:border-purple-500">
        <option value="jan">Jan</option>
        <option value="feb">Feb</option>
        <option value="mar">Mar</option>
        <option value="apr">Apr</option>
      </select>
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
              dataKey="customers"
              stroke="#6E39CB"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
