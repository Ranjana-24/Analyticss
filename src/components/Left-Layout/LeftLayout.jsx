import Logo from "./Logo.jsx";
import Accordion from "./Accordion.jsx";
import User from "./User.jsx";
export default function LeftLayout() {
  return (
    <>
      <div className="h-screen w-full max-w-60  flex-col hidden md:flex sticky top-0 ">
        <Logo className="" />
        <Accordion />
        <div className="mt-auto">
          <User />
        </div>
      </div>
    </>
  );
}
