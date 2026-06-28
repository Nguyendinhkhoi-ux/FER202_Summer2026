import React from "react";
import Slide from "../components/Slide";

function Home() {
  const menuItems = [
    { id: 1, image: "/images/menu-01.jpg" },
    { id: 2, image: "/images/menu-02.jpg" },
    { id: 3, image: "/images/menu-03.jpg" },
    { id: 4, image: "/images/menu-04.jpg" },
    { id: 5, image: "/images/menu-05.jpg" },
    { id: 6, image: "/images/menu-06.jpg" },
  ];

  return (
    <>
      <Slide />

      <div className="container-fluid py-4" style={{ backgroundColor: "#fff" }}>
        {/* Menu Items in a Row */}
        <div className="row justify-content-start mb-3">
          {menuItems.map((item) => (
            <div key={item.id} className="col-auto px-2">
              <img
                src={item.image}
                alt=""
                className="rounded-circle"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  border: "4px solid white",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.2)"
                }}
              />
            </div>
          ))}
        </div>

        {/* Title Below */}
        <div className="row">
          <div className="col-12 ps-4">
            <h2 className="text-danger fw-bold" style={{ fontSize: "2.5rem" }}>
              This is Home Page
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;