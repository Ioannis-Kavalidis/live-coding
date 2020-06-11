import React from "react";
import Text from "./Text";
const App = () => {
  return (
    <React.Fragment>
      <h1>Hi, I am react</h1>
      <Text name="Hadi" age="30" />
      <Text name="Ali" age="22" />
      <Text name="Zain" />
      <Text name="Nancy" />
      {
        // own comment
      }
    </React.Fragment>
  );
};

export default App;
