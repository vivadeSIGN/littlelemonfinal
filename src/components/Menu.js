import React from "react";
import menuImg1 from "../images/1.jpg"
import menuImg2 from "../images/2.jpg"
import menuImg3 from "../images/3.jpg"

const Menu = () => {

  return (
    <div className="menu">
      <section>
        <h4>This Weeks Specials </h4>
        <div className="menu-img">
          <img src={menuImg1} alt="" className="menu-centerimg"/>
          <img src={menuImg2} alt="" className="menu-centerimg"/>
          <img src={menuImg3} alt="" className="menu-centerimg"/>
          <button>Full Menu</button>
        </div>

      </section>
    </div>

  );
};

export default Menu;
