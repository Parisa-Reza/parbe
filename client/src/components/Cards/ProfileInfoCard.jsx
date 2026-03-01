import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";
import GithubRepo from "../GithubRepo";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center gap-6">
        <GithubRepo />
        <div>
          <div className="text-[15px] text-black font-bold leading-3">
            {user.name || ""}
          </div>
          <button
            className="text-[#670D2F] text-sm font-semibold cursor-pointer underline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
