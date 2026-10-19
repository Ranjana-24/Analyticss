
import StatsData from "../../data/StatsData";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useSelector } from "react-redux";

export default function StatsSection() {
  const { data, selectedYear } = useSelector(
    (state) => state.ecommerce
  );

  const filteredData = data.filter(
    (item) => item.year === Number(selectedYear)
  );

  const totalRevenue = filteredData.reduce(
    (total, item) => total + item.revenue,
    0
  );

  const totalOrders = filteredData.reduce(
    (total, item) => total + item.orders,
    0
  );

  const totalCustomers = filteredData.reduce(
    (total, item) => total + item.customers,
    0
  );

  const averageOrderValue =
    totalOrders > 0 ? totalRevenue / totalOrders : 0;

  const calculatedValues = {
    "Total Revenue": `$${totalRevenue.toLocaleString("en-US")}`,
    "Total Orders": totalOrders.toLocaleString("en-US"),
    "Total Customers": totalCustomers.toLocaleString("en-US"),
    "Average Order Value": `$${averageOrderValue.toFixed(2)}`,
  };

  return (
    <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 
    font-lato">
      {StatsData.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-md
          hover:border-purple-600 hover:bg-purple-100"
        >
          {/* Card heading and percentage */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-sm font-semibold text-gray-600">
              {item.title}
            </h4>

            <span
              className={`inline-flex items-center gap-0.5 rounded-full px-2 py-1 
                text-xs font-semibold ${
                item.percentageType === "positive"
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {item.percentage}

              {item.percentageType === "positive" ? (
                <MdKeyboardArrowUp size={16} />
              ) : (
                <MdOutlineKeyboardArrowDown size={16} />
              )}
            </span>
          </div>

          {/* Main statistic */}
          <h3 className="mt-4 text-2xl font-bold text-[#6E39CB]">
            {calculatedValues[item.title]}
          </h3>

          {/* Footer */}
          <p className="mt-2 text-xs text-gray-400">
            Year {selectedYear}
          </p>
        </div>
      ))}
    </section>
  );
}
