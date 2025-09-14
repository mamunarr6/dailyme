import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-[#ddeedd] py-2 px-2 lg:px-0">
      <div className="xl:w-[1280px] lg:w-[1080px] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">DailyMe</h1>
          </div>
          <div className="flex gap-3 items-center font-semibold">
            <Link to={"/"}>Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
