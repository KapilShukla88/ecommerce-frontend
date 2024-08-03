import React from "react";
import NavMobileComponentView from "./nav-mobile-component-view";
import useNavMobileComponentController from "./nav-mobile-component-controller";

const NavMobileComponent: React.FC<any> = ({ cartCount = 0 }) => {
  const { userDetails } = useNavMobileComponentController();
  return (
    <NavMobileComponentView userDetails={userDetails} cartCount={cartCount} />
  );
};

export default NavMobileComponent;
