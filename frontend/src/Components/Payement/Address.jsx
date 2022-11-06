import React, { useState } from "react";
import styles from "./styles/Add.module.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Address = ({ handleClose }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    mobile: "",
    pin: "",
    city: "",
    state: "",
    address: "",
    locality: "",
    landmark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    navigate("/payment");
  };

  return (
    <div>
      <div className={styles.Container}>
        <Form onSubmit={handleSubmit}>
          <div className={styles.Select}>
            <Form.Label>Select Your Country</Form.Label>
            <select name="" id="">
              <option value="India">India</option>
            </select>
          </div>
          <hr />

          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Full Name"
              required
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Mobile Number"
              required
              name="mobile"
              onChange={handleChange}
            />
          </Form.Group>

          <hr />
          <Form.Group className="mb-3">
            <Form.Label>Pin code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pin code"
              required
              name="pin"
              onChange={handleChange}
            />
          </Form.Group>
          <div className={styles.flex}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                required
                name="city"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                required
                name="state"
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Flat no./Building, Street name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Flat no./Building, Street name"
              required
              name="address"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Area/Locality</Form.Label>
            <Form.Control
              type="text"
              placeholder="Area/Locality"
              required
              name="locality"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Landmark (Optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Landmark (Optional)"
              name="landmark"
              onChange={handleChange}
            />
          </Form.Group>

          <div className={styles.opt}>
            <button type="submit">Continue</button>
            <button onClick={handleClose}>Cancel</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Address;
