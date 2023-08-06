import React, { createContext, useContext, useState } from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

const DashBoardContext = createContext();



const DashboardLayout = ({isDarkThemeEnabled}) => {
  const user = { name: "Usman" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setisDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setisDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };
  return (
    <DashBoardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashBoardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashBoardContext);
export default DashboardLayout;
