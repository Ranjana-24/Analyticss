import Navbar from "./Navbar.jsx";
import StatsSection from "./StatsSection.jsx";
import RevenueOverview from "./RevenueOverview.jsx";
import MonthlyOrders from "./MonthlyOrders.jsx";
import CustomerOverview from "./CustomerOverview.jsx";
import TopCountries from "./TopCountries.jsx";
export default function RightLayout() {
  return (
    <div className="flex-1 bg-gradient-to-b from-gray-50 to-blue-100 w-full h-full p-5">
      <Navbar />
      <div className="mt-5 ">
        <StatsSection />
      </div>

      {/* section 1 */}
      <section className="flex flex-col lg:flex-row gap-4">
        <div className=" w-full lg:w-[75%]  mt-5">
          <RevenueOverview />
        </div>
        <div className="w-full lg:w-[25%]  mt-5">
          <MonthlyOrders />
        </div>
      </section>

      {/* section 2 */}
      <section className="flex flex-col lg:flex-row gap-4   ">
        <div className=" w-full lg:w-[75%]  mt-5">
          <CustomerOverview />
        </div>
        <div className=" w-full lg:w-[25%] mt-5">
          <TopCountries />
        </div>
      </section>
    </div>
  );
}
