import React, { useState, useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import PersonIcon from "@material-ui/icons/Person";
import DnsIcon from "@material-ui/icons/Dns";


function MyVerticallyCenteredModal(props) {
  const [list, setList] = useState();
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null);
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/planAffaire/projet/${props.id}`
        );

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setList(responseData.PlanAffaire);
      } catch (err) {
        seterror(err.message);
      }
    };

    sendRequest();
  }, [props.id]);
  console.log(list);
  console.log(props.id);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Plans d'affaire
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((el) => (
                <tr>
                  <td>{el.date}</td>
                  <td>{el.description}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const PlanAffaire = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <DnsIcon
        onClick={() => {
          setModalShow(true);
        }}
        style={{ color: "green" }}
        fontSize="large"
      />
      <MyVerticallyCenteredModal
        show={modalShow}
        id={props.id}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default PlanAffaire;
