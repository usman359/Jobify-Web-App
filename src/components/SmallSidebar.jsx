import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashBoardContext } from "../pages/DashboardLayout";

const SmallSidebar = () => {
  const data = useDashBoardContext();
  console.log(data);
  return <Wrapper>SmallSideBar</Wrapper>;
};

export default SmallSidebar;
