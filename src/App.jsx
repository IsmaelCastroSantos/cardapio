import restaurant from "./assets/restaurante.webp";
import "./App.css";
import Navigation from "./Navigation";
import MenuItem from "./MenuItem";
import { desserts, drinks, mainDishes } from "./menu";
import { useState } from "react";

export default function App() {
  const menuPages = [mainDishes, desserts, drinks];
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <>
      <img src={restaurant} alt="" className="cover" />
      <Navigation setSelectedPage={setSelectedPage} />
      <div className="menu">
        {menuPages[selectedPage].map((item) => (
          <MenuItem
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}
