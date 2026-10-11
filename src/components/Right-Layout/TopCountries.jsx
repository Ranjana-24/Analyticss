import CountriesData from "../../data/CountriesData";
export default function TopCountries() {
  return (
    <>
      <div className="bg-white font-lato  rounded-xl ">
        {/* Heading */}
        <h4 className="font-lato p-2">Top Countries</h4>
        {/* Countries */}
        <div className="mt-5 h-85">
          {CountriesData.map((country, index) => (
            <div
              key={index}
              className="flex justify-between px-3 cursor-pointer hover:bg-purple-100 mb-4"
            >
              <div className="flex p-2 gap-2 ">
                <img src={country.flag} alt="flag" className="w-5 h-5" />
                <p className="font-lato">{country.country}</p>
              </div>
              <p className="p-2">{country.percentage}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
