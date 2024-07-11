import React from "react";
import NavProfileComponentView from "./nav-profile-component-view";

const NavProfileComponent: React.FC<{ cartCount: number }> = ({
  cartCount = 0,
}) => {
  return <NavProfileComponentView cartCount={cartCount} />;
};

export default NavProfileComponent;
