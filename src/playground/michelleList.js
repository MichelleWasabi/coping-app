class List extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            title: 'Just Fucking Do It!',
            subtitle: 'work hard. play hard. go girl!',
            items: []
        };
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();

        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );

        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
        localStorage.getItem('items') && this.setState({
            items: JSON.parse(localStorage.getItem('items')),
            isLoading: false
        })

    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
            // if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                // get the key's value from localStorage
                let value = localStorage.getItem(key);

                // parse the localStorage string and setState
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    // handle empty string
                    this.setState({ [key]: value });
                }
            }
        }
    }

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(this.state[key]));
            // localStorage.clear();
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        const item = e.target.elements.listItems.value;

        if (item) {
            this.state.items.push(item);
            this.setState({ items: this.state.items });
            e.target.elements.listItems.value = '';
            localStorage.setItem('item', JSON.stringify(item));
            return item;
        }
    }

    //Helped: https://stackoverflow.com/questions/44831916/how-to-delete-a-todo-item-onclick-in-react
    handleDelete(index) {
        let items = this.state.items.slice();
        items.splice(index, 1);
        this.setState(() => {
            return { items }
        });

    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.subtitle}</h3>
                <form className="mainForm" onSubmit={this.onFormSubmit} >
                    <input className="listInput" placeholder="add tasks" name="listItems" />
                    <button className="addButton">Add</button>
                </form>
                <ul>
                    {
                        this.state.items.map((item, index) => {
                            return <li key={index}>{item}
                                <button aria-label="delete" type="button" onClick={() => this.handleDelete(index)} > &times;</button>
                            </li>
                        })

                    }

                </ul>
            </div>
        );

    }

}
ReactDOM.render(<List />, document.getElementById('app'));
