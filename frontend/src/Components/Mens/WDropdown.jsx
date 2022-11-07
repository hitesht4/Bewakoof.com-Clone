import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDataApi } from "../../Store/Product/product.actions";
import "./dropdown.css";

const Colors = [
  { name: "white" },
  { name: "black" },
  { name: "blue" },
  { name: "red" },
  { name: "yellow" },
  { name: "pink" },
];

const WDropdown = ({ Sort }) => {
  const [open, isOpen] = useState(false);
  const [open1, isOpen1] = useState(false);
  const [open2, isOpen2] = useState(false);
  const [open3, isOpen3] = useState(false);
  const [open4, isOpen4] = useState(false);
  const [open5, isOpen5] = useState(false);
  const dispatch = useDispatch();

  const handleDrop = (value) => {
    if (value === 0) {
      isOpen(!open);
    } else if (value === 1) {
      isOpen1(!open1);
    } else if (value === 2) {
      isOpen2(!open2);
    } else if (value === 3) {
      isOpen3(!open3);
    } else if (value === 4) {
      isOpen4(!open4);
    } else if (value === 5) {
      isOpen5(!open5);
    }
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(0)}>
          Color
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open ? (
          <div className="dropdown-content">
            {Colors.map((item) => (
              <div className="dropdown-item" key={item.name}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      dispatch(
                        getDataApi(
                          `https://check-lr1yrg4f5-hitesht4.vercel.app/prod/wfilter/${item.name}`
                        )
                      );
                    }
                  }}
                />
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(4)}>
          Price
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open4 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://check-lr1yrg4f5-hitesht4.vercel.app/prod/wsort/1";
                    dispatch(getDataApi(url));
                  }
                }}
              />
              Low To High
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://check-lr1yrg4f5-hitesht4.vercel.app/prod/wsort/-1";
                    dispatch(getDataApi(url));
                  }
                }}
              />
              High To Low
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(5)}>
          Ratings
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open5 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    Sort("Low", "R");
                  }
                }}
              />
              Low To High
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    Sort("High", "R");
                  }
                }}
              />
              High To Low
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(2)}>
          Brand
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open2 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input type="checkbox" />
              Bewakoof
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(6)}>
          Price
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(7)}>
          Gender
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(8)}>
          Size
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(9)}>
          Feature
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(10)}>
          Fit
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(11)}>
          Material
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(12)}>
          Neck Style
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(13)}>
          Occasion
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(14)}>
          Price
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(15)}>
          Sale
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(16)}>
          Sleeve Length
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(17)}>
          Sports League
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn">
          Sports Team
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(3)}>
          Style
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
      </div>
    </>
  );
};

export default WDropdown;
