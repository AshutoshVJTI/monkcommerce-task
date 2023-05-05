import React from "react";
import { ReactComponent as MonkLogo } from "../assets/monklogo.svg";

const Header = () => {
  return (
    <div className="mx-8 my-2 flex items-center">
      <MonkLogo /> <span className="ml-4">Monk Upsell & Cross-sell</span>
    </div>
  );
};

export default Header;
