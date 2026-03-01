import { ProfileInfoCard } from "../Cards";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-[#F7CFD8] border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30">
      <div className="w-9/10 container mx-auto flex items-center justify-between gap-5">
        <Link to="/">
          <h2 className="text-2xl text-[#670D2F] font-semibold">Parbe</h2>
        </Link>
        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default Navbar;
