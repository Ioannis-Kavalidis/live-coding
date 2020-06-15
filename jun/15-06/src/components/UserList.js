import React from "react";
const Userlist = (props) => {
  const todos = props.list.map((item, i) => <li key={i}>{item}</li>);
  return <ul>{todos}</ul>;
};

export default Userlist;
