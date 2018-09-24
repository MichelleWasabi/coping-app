class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            visibility: false
        };
    }


    handleClick() {

        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle Test</h1>
                <button onClick={this.handleClick} >
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility &&
                    <div>
                        <h3>Look at me. I work! </h3>
                    </div>}
            </div>
        )
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false

// const handleClick = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const buildToggle = (
        // <div>
        //     <h1>Visibility Toggle Test</h1>
        //     <button onClick={handleClick} >
        //         {visibility ? 'Hide Details' : 'Show Details'}
        //     </button>
        //     {visibility &&
        //         <div>
        //             <h3>Look at me. I work! </h3>
        //         </div>}
        // </div>
//     )
//     ReactDOM.render(buildToggle, document.getElementById('app'));
// }


// render();
