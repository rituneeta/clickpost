import React from "react";

import { ReactComponent as Share } from "../svg/share-option.svg";
import { ReactComponent as Bell } from "../svg/bell.svg";
import { ReactComponent as Clock } from "../svg/clock.svg";
import { ReactComponent as Arrow } from "../svg/right-arrow.svg";
import { ReactComponent as Info } from "../svg/information.svg";
import { ReactComponent as Truck } from "../svg/truck.svg";
import img1 from "../img/img1.PNG";
import img2 from "../img/img2.PNG";
import img3 from "../img/img3.PNG";
import logo from "../img/logo.PNG";

const OrderDetails = (props) => {
  return (
    <div className="container">
      <div className="section">
        <div className="section__1">
          <img src={logo} alt="logo" className="section__1--img" />
        </div>
        <div className="section__2">
          <p className="section__2--1">Your order is in transit</p>
          <p className="section__2--2">Arriving on July</p>
          <p className="section__2--3">
            <Share
              style={{
                height: "1.5rem",
                width: "auto",
                fill: "#0202d4",
              }}
            />
            <a className="section__2--3--link">Share the link</a>
          </p>
          <p className="section__2--4">Monday</p>
          <p className="section__2--44">05</p>
          <p className="section__2--5"> Shipped From Mumbai</p>
          <p className="section__2--6">
            <Info
              style={{
                height: "2rem",
                width: "auto",
                fill: "#0202d4",
                marginRight: "1rem",
              }}
            />
            Status of the package
            <b className="section__2--6--down">&#10094;</b>
          </p>
        </div>
        <div className="section__3">
          <button className="section__3--btn1 section__3--btn">
            View Shipmwnt details
          </button>
          <button className="section__3--btn2 section__3--btn">
            Take actions
          </button>
        </div>
        <div
          className="section__4"
          onClick={() => {
            props.history.push("/reschedule");
          }}
        >
          <Clock
            style={{
              height: "2rem",
              width: "auto",
            }}
          />
          <p className="section__4--text">Rescheduling The Delivery</p>
          <b className="section__4--down">&#10094;</b>
        </div>
        <div className="section__4">
          <Truck
            style={{
              height: "2rem",
              width: "auto",
            }}
          />
          <p className="section__4--text">
            Pick up from the last Hub / Courier
          </p>
          <b className="section__4--down">&#10094;</b>
        </div>
        <div className="section__4">
          <Bell
            style={{
              height: "2rem",
              width: "auto",
            }}
          />
          <p className="section__4--text">Get delivery updates</p>
          <b className="section__4--down">&#10094;</b>
        </div>
        <div className="section__5">
          <div className="box">
            <div className="box__head">
              <p className="box__head--1">Order Details</p>
              <p className="box__head--2">
                <Share
                  style={{
                    height: "1.5rem",
                    width: "auto",
                    fill: "#0202d4",
                  }}
                />
                <a className="box__head--2--link">Share the Product</a>
              </p>
            </div>
            <div className="box__cont">
              <img src={img1} alt="image" className="box__cont--img" />
              <div className="box__cont--text">
                <p className="box__cont--text--1">Pepe jeans</p>
                <p className="box__cont--text--2">Men Blue Skinny Fit </p>
                <p className="box__cont--text--3">Size: 30 | Oty: 1</p>
                <p className="box__cont--text--4">Rs 5,845</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section__6">
          <p className="section__6--head">You May Also Like</p>
          <div className="section__6--cont">
            <div className="section__6--cont--1">
              <img
                src={img2}
                alt="image"
                className="section__6--cont--1--img"
              />
              <p className="section__6--cont--1--text1">Pepe jeans</p>
              <p className="section__6--cont--1--text2">
                Solid Slim Fit Polo T-shirt
              </p>
              <p className="section__6--cont--1--text3">Rs 5,845</p>
            </div>

            <div className="section__6--cont--1">
              <img
                src={img3}
                alt="image"
                className="section__6--cont--1--img"
              />
              <p className="section__6--cont--1--text1">Pepe jeans</p>
              <p className="section__6--cont--1--text2">
                Solid Slim Fit Polo T-shirt
              </p>
              <p className="section__6--cont--1--text3">Rs 5,845</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
