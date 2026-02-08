import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export const Input = ({ value, label, onChange, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false); //password hidden (type="password")

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>

      <div className="input-box">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
        //   onChange={(e) => onChange(e)}
        onChange={onChange}

        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-[#670D2F] cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
