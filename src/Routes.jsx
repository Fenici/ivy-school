import React from "react";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import TableChartOutlined from "@material-ui/icons/TableChartOutlined";
import GradeOutlined from "@material-ui/icons/GradeOutlined";
import ExitToAppOutlined from "@material-ui/icons/ExitToAppOutlined";

const Routes = [
  {
    id: "Dashboard",
    icon: <TableChartOutlined />,
    active: true,
    path: "/dashboard"
  },
  { id: "Grade", icon: <GradeOutlined />, path: "/result" },
  { id: "Settings", icon: <SettingsOutlined />, path: "/setting" },
  {
    id: "SignOut",
    icon: <ExitToAppOutlined />,
    path: "/"
  }
];
export default Routes;
