import React from "react";
import Userlist from "./UserList";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }
  render() {
    this.changeHandel = (e) => {
      console.log(e.target.value);

      this.setState({ userInput: e.target.value.trim() });
    };
    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.changeHandel}
            placeholder="type something"
          />
          <input type="submit" value="Add" />
        </form>
        <Userlist list={this.state.list} />
      </React.Fragment>
    );
  }
}
