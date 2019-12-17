// stateless function component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");

      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      //console.log("Data Invalid");
    }
  }
  componentDidUpdate(preProps, preState) {
    if (preState.options.length != this.state.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
   // console.log("componentWillUnmount");
  }

  removeAllOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
   // console.log("option to remove" + optionToRemove);
    this.setState(preState => ({
      options: preState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }
  handlePick() {
    let length = this.state.options.length;
    this.setState(() => {
      if (length) {
        const randomNum = Math.floor(Math.random() * length);

        const option = this.state.options[randomNum];
        alert(option);
      } else {
        alert("First Add Option");
      }
    });
  }

  handleAddOption(option) {
    if (!option) {
      return "Pls Enter option and Then click on AddOption Button";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Given Option already Exist";
    }

    this.setState(preValue => ({
      options: preValue.options.concat(option)
    }));
  }

  /*
  handlepick -- pass down action and setup on click - bind here
   readOnly pick an option and alert it 
 */

  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          removeAllOptions={this.removeAllOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptionBox handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should i do ?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.removeAllOptions}>Remove Options</button>

      <pre>Total options count is {props.options.length}</pre>
      {props.options.length === 0 && <p>Pls add options to get started !</p>}
      {props.options.map((opt, index) => (
        <Option
          key={index}
          optionText={opt}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
      {props.optionText}
    </div>
  );
};

// // 1. setup the form with text input and submit button
// //  2. wire up onSubmit
// //  handleAddOption -> fetch the value typed -> if value, then alert


// // options --> options component here

// // Addoptions --> AddOptions component here

// const User = props => {
//   return (
//     <div>
//       <p>Name:{props.name}</p>
//       <p>Age:{props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
