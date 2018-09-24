console.log('ap run');

const info = {
    title: 'Learning React',
    subtitle: 'a little bit of code goes a long way',
    options: []
};

// JSX 
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        info.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const onButtonClick = (e) => {
    info.options = [];
    render();
}

const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * info.options.length);
    const option = info.options[randomNum];
    alert(option);
}

const render = () => {
    const template = (
        <div>
            <h1> {info.title}</h1>
            {info.subtitle && <p>{info.subtitle}</p>}
            <p>{info.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            {/* <p>{info.options.length}</p> */}
            <button disabled={info.options.length == 0} onClick={onMakeDecision} >What should I do?</button>
            <button onClick={onButtonClick} >Remove All</button>
            <ol>
                {
                    info.options.map((option) => {
                        return <li key={option}> {option}</li>
                    })
                }

            </ol>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();



