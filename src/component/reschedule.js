import React from "react";
import logo from "../img/logo.PNG";
function Reschedule(props) {
  return (
    <div className="container">
      <div className="section">
        <div className="section__1">
          <img src={logo} alt="logo" className="section__1--img" />
        </div>
        <div className={"addressHeading"}>
          Select alternate Delivery address
        </div>
        <div className={"section__2"}>
          <div className="addressBox">
            <label>
              <input
                className="address"
                type="radio"
                id="add1"
                name="address"
                value="1"
              />
              <div>
                <p className={"name"}>Kishan Swarup</p>
                <p>C-4/237</p>
                <p>PUNJAB, LUDHIOYANA 1133696</p>
                <p>India</p>
              </div>
            </label>
          </div>
          <div className="addressBox">
            <label>
              <input
                className="address"
                type="radio"
                id="add1"
                name="address"
                value="1"
              />
              <div>
                <p className={"name"}>Mannu</p>
                <p>C-94/84</p>
                <p>Oddissa, Pondichary</p>
                <p>India</p>
              </div>
            </label>
          </div>
        </div>

        <div className="deliveryInst">
          <p className="section__4--text">Add Delivery Instruction</p>
          <textarea
            name="deliveryInstructions"
            id="deliveryInstructions"
            cols="30"
            rows="10"
          />
        </div>
        <div className="deliveryTime">
          <h3>Select Delivery Slot</h3>
          <hr />
          <p>Delivery Date</p>
          <div>
            <input
              type="date"
              min={new Date()}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
            />
          </div>
          <p>Delivery Time</p>
          <div>
            <select name="slots" id="timeSlots">
              {Array(9)
                .fill(0)
                .map((val, idx) => {
                  return (
                    <option value={idx + 9}>
                      {idx + 9} - {idx + 10}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div
          className="section__3"
          onClick={() => {
            props.history.push("/orderDetails");
          }}
        >
          <button className="section__3--btn1 section__3--btn">Cancel</button>
          <button className="section__3--btn2 section__3--btn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Reschedule;
