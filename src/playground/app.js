class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptionSingle = this.handleDeleteOptionSingle.bind(this);
        this.state = {
            options: []
        }
    }
 componentDidMount() {
    try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
    if(options){
        this.setState(() => ({options}))
    }
    }catch (e){
//Do nothing at all 
}
    
 }
 componentDidUpdate(prevProps, prevState) {
     if(prevState.options.length !== this.state.options.length) {
         const json = JSON.stringify(this.state.options);
       localStorage.setItem('options', json);
     }  
 }
 componentWillUnmount() {
     console.log('componentWillUnmount');
 }


    //easier faster way to use arrow functions 
    handleDeleteOptions () {
        this.setState(() => ({options: [] }));
    }

    handleDeleteOptionSingle(optionRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);

    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add an item.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item already exists'
        }
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });
        this.setState((prevState) =>({
            options: prevState.options.concat([option]) 
        }));
    }

    render() {
        const subtitle = 'We making something here';


        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options 
                options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOptionSingle={this.handleDeleteOptionSingle}/>
                <AddOption handleAddOption={this.handleAddOption} />
            </div>

        );

    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick} disabled={!props.hasOptions} >
                What animal should I read about?
            </button>
        </div>

    );
}

const Options = (props) => {
    return (
        <div>

            {
                props.options.map((option) => (
                <Option 
                key={option} 
                optionText={option} 
                handleDeleteOptionSingle={props.handleDeleteOptionSingle}
                />
                ))
            }
            <button onClick={props.handleDeleteOptions} >Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p> }

        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
          <button 
          onClick={(e) => { 
              props.handleDeleteOptionSingle(props.optionText);
          }} 
          >
              X
          </button>
        </div>
    );
}



class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = '';
        this.setState(() => ({error}));
if(!error){
    e.target.elements.option.value = '';
}

        }

    

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} >
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

//stateless function component 
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age} </p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// ReactDOM.render(<IndecisionApp options={['St. Thomas', 'St. John']} />, document.getElementById('app'));