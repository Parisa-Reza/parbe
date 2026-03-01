import { UserProvider } from "./context/userContext";
import { AppRouter } from "./router";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <UserProvider>
      <>
        <div className="w-full min-h-screen bg-[#F7CFD8]">
          <AppRouter />
          <Toaster
            toastOptions={{
              className: "",
              style: {
                fontSize: "16px",
              },
            }}
          />
        </div>
      </>
    </UserProvider>
  );
};
