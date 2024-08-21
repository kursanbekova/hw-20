import { Outlet } from "react-router-dom";
import { AppTitle } from "../../components/UI/Title";

export const Students = () => {
  return (
    <div>
      <AppTitle>Students</AppTitle>
      <Outlet />
    </div>
  );
};
