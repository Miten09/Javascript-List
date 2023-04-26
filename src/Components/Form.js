import React, { useState } from "react";

function Form() {
  const [name, setname] = useState("");
  const [store, setstore] = useState([]);

  function changeHandler(e) {
    setname(e.target.value);
  }

  function Handlesubmit(e) {
    e.preventDefault();
    setstore((olditems) => {
      return [...olditems, name];
    });
    setname("");
  }

  function HandleSort() {
    setstore(store.sort());
  }
  return (
    <>
      <form action="">
        <label htmlFor="">Enter Your Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={changeHandler}
        />
        &nbsp;&nbsp;&nbsp;
        <input type="submit" value="submit" onClick={Handlesubmit} />
        &nbsp;&nbsp;&nbsp;
        <button type="button" onClick={HandleSort}>
          Sort
        </button>
      </form>
      {store.map((value) => {
        return (
          <>
            <li>{value}</li>
          </>
        );
      })}
    </>
  );
}

export default Form;
