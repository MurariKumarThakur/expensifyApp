const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onformSubmit = e => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        addOptions();
    }
};
const removeAll = () => {
    app.options = [];
    addOptions();
};

const onMakeDecision = () => {
    if (app.options.length) {
        const randomNum = Math.floor(Math.random() * app.options.length);

        const option = app.options[randomNum];
        alert(option);
    } else {
        alert("First Add Option");
    }
};
const elm = document.getElementById("app");

const addOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>
                {app.options.length > 0
                    ? "Heare is the options"
                    : "No options available"}
            </p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>
                What should i do?
      </button>
            <button onClick={removeAll}>RemoveAll</button>
            <ol>
                {app.options.map((option, index) => {
                    return <li key={index}>{option}</li>;
                })

                    /* map over app.options getting back an array of the lis(set key and text) */
                }
            </ol>
            <form onSubmit={onformSubmit}>
                <input type="text" name="option" />
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, elm);
};
addOptions();
