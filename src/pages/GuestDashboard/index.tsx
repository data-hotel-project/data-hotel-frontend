import { StyledNoisy } from "@components/Background/style";
import Header from "@components/Header";
import React from "react";
import { StyledDashboard, StyledDashboardH2 } from "./style";

export const GuestDashboard: React.FC = () => {
  return (
    <StyledDashboard>
      <StyledNoisy />
      <Header isLogout />

      <StyledDashboardH2>GUEST DASHBOARD</StyledDashboardH2>
    </StyledDashboard>
  );
};
