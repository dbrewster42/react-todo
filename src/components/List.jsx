import React, { useState } from "react";

const List = () => {
  const [item, setItem] = useState("");
  const [todoList, setToDoList] = useState([
    "make doctor's appointment",
    "clean the dishes",
  ]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("2", e.target.item.value);
    todoList.push(e.target.item.value);
    console.log("1", todoList);
    setItem("");
  };
  const remove = (e) => {
    console.log(todoList);
    console.log(
      e.target,
      "1",
      e.target.value,
      "2",
      e.target.name,
      "3",
      e.target.key
    );
    todoList.splice(e.target.value, 1);
    console.log(todoList);
    return todoList;
  };
  const removeAll = (e) => {
    setToDoList([]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          onChange={handleChange}
          value={item}
        ></input>
        <input type="submit" value="Add to my list"></input>
      </form>
      <ol className="tlist">
        {todoList.map((item, i) => (
          <li key={i} className="rows">
            {item}
            <button
              onClick={remove}
              name={item}
              value={i}
              className="btn btn-danger"
            >
              X
            </button>
          </li>
        ))}
      </ol>
      <button onClick={removeAll}>Delete All</button>
    </div>
  );
};
// todoList.map((item, i) =>{" "}
// <li key={i} value={item} onClick={onItemClick} />)
export default List;

/* <table class="table table-dark">
<thead>
  <tr>
    <th scope="col">Number</th>
    <th scope="col">Task</th>
    <th scope="col">Completed</th>
    <th scope="col">Delete</th>
  </tr>
</thead>
<tbody>
<tr>
    <th>{todoList.map((item, i) => (
   {i} </th>
  <td>{item} </td>
  <td> No </td>
  <td><button
      onClick={remove}             
      className="btn btn-danger"
    />
  </td>       
    
    ))}
</tr>          
</tbody>
</table> */
