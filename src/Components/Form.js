import React, { useState } from "react";

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
          <input
            type="button"
            value={"Sorting"}
            className="me-4 btn btn-success"
            onClick={HandleSort}
          />
          <br />
          <input
            className="form-control"
            type="text"
            id="name"
            value={name}
            placeholder="Enter Your Name"
            onChange={changeHandler}
          />
          <input
            type="submit"
            value="submit"
            className="ms-2 btn btn-success"
            onClick={Handlesubmit}
          />
          &nbsp;
        </form>
      </div>
      <div style={{ marginLeft: "45%", fontSize: "30px" }}>
        {store.map((value, index) => {
          // console.log(index)
          return (
            <div key={index}>
              <li>
                {value} &nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-danger "
                  onClick={() => deleteHandler(index)}
                >
                  -
                </button>
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Form;
