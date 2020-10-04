const FirstComponent = () => <h1>My very first component</h1>;

const NamedComponent = ({ name }) => <p>My name is {name}</p>;

const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Klaus" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
