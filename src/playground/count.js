console.log("+++++++++++++++counterApp++++++++++++++++++++");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }
  componentDidMount() {
    console.log("hiiii");
    const json = localStorage.getItem("count");

    const count = Number(json);

    this.setState(() => ({ count: count }));
  }

  componentDidUpdate(preProps, preState) {
    console.log("buy");
    localStorage.setItem("count", this.state.count);
  }
  handleAddOne() {
    this.setState(preState => {
      return {
        count :preState.count +1
      }
    });
  }
  handleMinusOne() {
    this.setState(preState => {
      return {
        count: preState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return (this.state.count = 0);
    });
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
// create three method :handleAddOne , handleMinusOne , handleReset
// use console.log to print mehtod name
// write up onClick & bind in the consturctor

const jsx = <Counter />;

ReactDOM.render(jsx, document.getElementById("app"));
