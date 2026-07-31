import React, { useState } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";

const initialItems = [
  {
    name: "todo",
    displayName: "Todo list",
    active: true,
  },
  {
    name: "movies",
    displayName: "Movies",
    active: false,
  },
  {
    name: "gallery",
    displayName: "Gallery",
    active: false,
  },
];

const Sidebar = () => {
  const [items, setItems] = useState(initialItems);
  const handleClick = (clickedItem) => {
    const updatedItem = items.map((item) => ({
      ...item,
      active: item.name === clickedItem.name,
    }));
    setItems(updatedItem);
  };
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  return (
    <div className={`sidebar-main ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="items-menu">
        {items.map((item, index) => {
          return (
            <div
              className={`item ${item.active ? "active" : ""}`}
              key={index}
              onClick={() => handleClick(item)}
            >
              {item.displayName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
