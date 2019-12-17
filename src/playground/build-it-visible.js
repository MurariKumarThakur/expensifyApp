console.log("+++++++++++++++++ build it  ++++++++++++++++++++++");

class VisibilityToogle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState(preState => {
      return (this.state.visibility = !preState.visibility);
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toogle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "HideDetails" : "ShowDetails"}
        </button>
        {this.state.visibility == true && <p>This is details page</p>}
      </div>
    );
  }
}
const jsx = <VisibilityToogle />;
ReactDOM.render(jsx, document.getElementById("app"));

