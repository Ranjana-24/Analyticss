import StatsData from "../../data/StatsData";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import { useSelector } from "react-redux";

export default function StatsSection() {
  const {data, selectedYear} = useSelector((state) => state.ecommerce);
  const filteredData  = data.filter((item) => item.year === Number(selectedYear));

  const totalRevenue = filteredData.reduce((total, item) => total + item.revenue, 0);
//   total is the running total.
// item is the current record.
// item.revenue is the revenue of that record.
// 0 is the starting total.
//.reduce takes many values and combines it into single value.

const totalOrders = filteredData.reduce((total , item) => total+item.orders,0);
//same as above , here total orders is the running total  and orders is the current record and  
//item.orders are the amount in number.

const totalCustomers = filteredData.reduce((total, item) => total + item.customers, 0);

//calculate revenue you earn per order on average.
const averageOrderValue = totalOrders > 0 ? totalRevenue/totalOrders : 0;

// data is prepared , now we can use it in our component.
// const stats = [
//   {
//     title: "Total Revenue",
//     amount: `$${totalRevenue.toLocaleString("en-US")}`,
//     subtitle: `Year ${selectedYear}`,
//   },
//   {
//     title: "Total Orders",
//     amount: totalOrders.toLocaleString("en-US"),
//     subtitle: `Orders in ${selectedYear}`,
//   },
//   {
//     title: "Total Customers",
//     amount: totalCustomers.toLocaleString("en-US"),
//     subtitle: `Customers in ${selectedYear}`,
//   },
//   {
//     title: "Average Order Value",
//     amount: `$${averageOrderValue.toFixed(2)}`,
//     subtitle: `Average for ${selectedYear}`,
//   },
// ];

const calculatedValues = {
  "Total Revenue": `$${totalRevenue.toLocaleString("en-US")}`,
  "Total Orders": totalOrders.toLocaleString("en-US"),
  "Total Customers": totalCustomers.toLocaleString("en-US"),
  "Average Order Value": `$${averageOrderValue.toFixed(2)}`,
};
  return (
    <section className="bg-white w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-3 font-lato rounded-xl">
      {StatsData.map((data, index) => (
        <div
          key={index}
          className="relative py-3 px-2 lg:border-r border-gray-200 lg:last:border-r-0"
        >
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-sm text-gray-700 font-semibold">
              {data.title}
            </h4>

            <span
              className={`text-xs flex gap-0.5 rounded-full px-2 py-0.5 ${
                data.percentageType === "positive"
                  ? "text-green-600 bg-green-100"
                  : "text-red-700 bg-red-100"
              }`}
            >
              {data.percentage}{data.percentageType === "positive" ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#6E39CB] mt-2">
             {calculatedValues[data.title]}
          </h3>

          <p className="text-xs text-gray-500 mt-1">Year {selectedYear}</p>
        </div>
      ))}
    </section>
  );
}
