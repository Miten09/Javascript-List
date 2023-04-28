import React, { useState } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Form(props) {
  const [name, setname] = useState("");
  const [store, setstore] = useState([]);
  const [toggle, settoggle] = useState(null);
  const [search, setsearch] = useState("");

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

  function handleSearchChange(e) {
    setsearch(e.target.value);
  }

  function Handlesearch() {
    setstore((items) => {
      return items.filter((value) => {
        // console.log(key, search);
        return value === search;
      });
    });
  }

  return (
    <>
      <div className="container d-flex justify-content-center ml-1">
        <form action="" className="d-flex w-50">
          <Button
            type="button"
            variant="contained"
            className="me-3 btn btn-success w-25"
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
            autoComplete="off"
          />
          <Button
            type="submit"
            variant="contained"
            // value={name}
            className="ms-2 btn btn-success w-25"
            onClick={Handlesubmit}
            disabled={name.length === 0}
          >
            Submit
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            className="form-control w-50 ml-3"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
          &nbsp;&nbsp;&nbsp;
          <Button
            type="button"
            variant="contained"
            className="me-1 btn btn-success w-25"
            onClick={Handlesearch}
          >
            Search
          </Button>
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
                <TableRow key={index} id={index}>
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
