import CountriesData from "../../data/CountriesData";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCountry } from "../../redux/EcommerceSlice";

export default function TopCountries() {
  const dispatch  = useDispatch();
  const selectedCountry = useSelector((state) => state.ecommerce.selectedCountry);

  return (
    <>
      <div className="bg-gray-50 font-lato  rounded-xl shadow-sm">
        {/* Heading */}
        <div >
        <h4 className="font-lato font-semibold text-[102%] p-2">Top Countries</h4>
        </div>
        {/* Countries */}
        <div className="mt-5 h-85">
          {CountriesData.map((country, index) => (
            <div
              key={index}
              className={`flex justify-between px-3 cursor-pointer hover:bg-purple-100 mb-4 ${
                selectedCountry === country.country ? "bg-purple-100 text-purple-700" : "hover:bg-purple-100"
              }`}
              onClick={() => dispatch(setSelectedCountry(country.country))}
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
