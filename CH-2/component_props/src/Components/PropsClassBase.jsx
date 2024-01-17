import React from "react";

class PropsClassBase extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          style={{
            background: "teal",
            display: "block",
            width: "auto",
            height: "auto",
          }}
        >
          <h1>My name is {this.props.name}</h1>
          <img src={this.props.image1} alt="images" width={"200px"} />
          <h1>My Technology is {this.props.techno}</h1>
          <h2>
            Pass Object :- <br />
            My name is {this.props.newObj.firstName}{" "}
            {this.props.newObj.lastName} <br />
            My E-mail address is {this.props.newObj.email}
          </h2>
        </div>
      </>
    );
  }
}

export default PropsClassBase;
