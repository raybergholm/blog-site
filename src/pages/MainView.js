import React from "react";

import Header from "./components/layout/Header";
import TwoColumnRightBody from "./components/layout/TwoColumnRightBody";
import Sidebar from "./components/Sidebar";
import AppRouter from "./AppRouter";

const MainView = () => (
  <div>
    <Header />
    <TwoColumnRightBody side={<Sidebar />}>
      <AppRouter />
    </TwoColumnRightBody>
  </div>
);

export default MainView;
