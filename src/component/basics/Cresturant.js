import React, {useState} from 'react'
import "./resturant.css";
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard.js";

const Resturants = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    // const updatedList = Menu.filter((curElem) => {
    //   return curElem.category === category;
    // });
    // setMenuData(updatedList);
  };

  return (
    <>
       <MenuCard menuData = {menuData} />
    </>
  );
};

export default Resturants;
