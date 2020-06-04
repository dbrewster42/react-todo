import React from "react";

const List = () => {
  const [item, setItem] = useState("");
  const [todoList] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    todoList.push(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" onChange={handleChange} />
        <input type="submit">Add To My List</input>
      </form>
      <ol>
        <li></li>
      </ol>
    </div>
  );
};

export default List;
