import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Form() {
  const [name, setname] = useState("");
  const [store, setstore] = useState([]);
  const [toggle, settoggle] = useState(null);

  function changeHandler(e) {
    setname(e.target.value);
  }

  function Handlesubmit(e) {
    e.preventDefault();

    setstore((olditems) => {
      return [name, ...olditems];
    });
    setname("");
  }

  function HandleSort() {
    // setstore([...store].sort());
    // console.log("hey");
    settoggle(!toggle);
    if (toggle) {
      setstore([...store].sort());
    }
    if (!toggle) {
      setstore([...store].sort().reverse());
    }
  }

  function deleteHandler(id) {
    setstore((olditems) => {
      return olditems.filter((items, index) => {
        console.log(index, id);
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="container d-flex justify-content-center">
        <form action="" className="d-flex w-50">
          <Button
            type="button"
            variant="contained"
            className="me-4 btn btn-success"
            onClick={HandleSort}
          >
            Sorting
          </Button>
          <br />
          <input
            className="form-control"
            type="text"
            id="name"
            value={name}
            placeholder="Enter Your Name"
            onChange={changeHandler}
          />
          <Button
            type="submit"
            variant="contained"
            // value={name}
            className="ms-2 btn btn-success"
            onClick={Handlesubmit}
            disabled={name.length === 0}
          >
            Submit
          </Button>
          &nbsp;
        </form>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center", fontSize: "20px" }}>
                All Names Displayed Here
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ width: "100px" }}>
            {store.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell style={{ textAlign: "center", fontSize: "20px" }}>
                    {value} &nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-danger "
                      onClick={() => deleteHandler(index)}
                    >
                      -
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Form;
