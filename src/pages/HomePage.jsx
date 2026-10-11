import LeftLayout from "../components/Left-Layout/LeftLayout";
import RightLayout from "../components/Right-Layout/RightLayout";
export default function HomePage() {
  return (
    <>
      <div className="flex ">
        {/* left section */}
        <LeftLayout />
        {/* right section */}
        <RightLayout />
      </div>
    </>
  );
}
