import Accordion from "react-bootstrap/Accordion";

function Accordions({ label }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ fontWeight: "bold" }}>
          {label}
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordions;
