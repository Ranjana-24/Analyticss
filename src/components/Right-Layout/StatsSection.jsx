import StatsData from "../../data/StatsData";

export default function StatsSection() {
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
              className={`text-xs rounded-full px-2 py-0.5 ${
                data.percentageType === "positive"
                  ? "text-green-600 bg-green-100"
                  : "text-red-700 bg-red-100"
              }`}
            >
              {data.percentage}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#6E39CB] mt-2">
            {data.amount}
          </h3>

          <p className="text-xs text-gray-500 mt-1">{data.subtitle}</p>
        </div>
      ))}
    </section>
  );
}
