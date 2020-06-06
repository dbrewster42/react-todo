import React, { useState, useEffect } from "react";

const List = () => {
  const [item, setItem] = useState("");
  const [todoList, setToDoList] = useState([
    { task: "make doctor's appointment", completed: false },
    { task: "clean the dishes", completed: true },
  ]);
  useEffect(() => {
    console.log(todoList);
    setToDoList(todoList);
  }, [todoList]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("1", e.target.item.value);
    // todoList.push({ task: e.target.item.value, completed: false });
    setToDoList([...todoList, { task: e.target.item.value, completed: false }]);
    console.log("2", todoList);
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
    const newToDo = todoList.splice(e.target.value, 1);
    console.log(newToDo);
    setToDoList(newToDo);
  };
  const removeAll = (e) => {
    setToDoList([]);
  };
  const toggleC = (e) => {
    let ids = e.target.value;
    console.log(ids, "1", todoList[ids]);
    const newToDo = [...todoList];
    console.log(newToDo);
    let comp = newToDo[ids];
    comp.completed = !comp.completed;
    console.log(comp);
    setToDoList(newToDo);
  };
  return (
    <div id="box">
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
            {item.task}
            <button
              onClick={remove}
              name={item.task}
              value={i}
              className="btn btn-danger"
            >
              X
            </button>
            Completed-
            {item.completed ? (
              <button className="bt2" value={i} onClick={toggleC}>
                {item.completed ? "True" : "False"}
              </button>
            ) : (
              <button className="bt3" value={i} onClick={toggleC}>
                {item.completed ? "True" : "False"}
              </button>
            )}
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
