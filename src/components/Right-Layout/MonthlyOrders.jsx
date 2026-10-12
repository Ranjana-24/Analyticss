import {useSelector} from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyOrders() {
  // const ordersData = [
  //   { month: "Jan", orders: 4000 },
  //   { month: "Feb", orders: 3000 },
  //   { month: "Mar", orders: 5000 },
  //   { month: "Apr", orders: 4500 },
  //   { month: "May", orders: 6000 },
  //   { month: "Jun", orders: 5500 },
  //   { month: "Jul", orders: 7000 },
  //   { month: "Aug", orders: 7500 },
  //   { month: "Sep", orders: 8000 },
  //   { month: "Oct", orders: 8500 },
  //   { month: "Nov", orders: 9000 },
  //   { month: "Dec", orders: 9500 },
  // ];
  const {data, selectedCountry, selectedYear} = useSelector(state => state.ecommerce);
  const ordersData = data.filter((item) => item.country === selectedCountry && item.year === selectedYear);
  return (
    <div className=" bg-white rounded-xl ">
      <h2 className=" font-lato p-2">Monthly Orders : {selectedCountry} - ({selectedYear})</h2>

      <div className=" w-full pr-3 mt-5 h-85">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ordersData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="orders" fill="#6E39CB" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
