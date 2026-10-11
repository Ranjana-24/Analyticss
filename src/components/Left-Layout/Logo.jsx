import logo from "../../assets/logo.png";
export default function Logo() {
  return (
    <figure className="w-19 h-13 ml-18 mt-5 ">
      <img src={logo} alt="logo" className="cursor-pointer" />
    </figure>
  );
}
