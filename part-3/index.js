const App = () => {
    return (
        <div>
            <Person name="Bobby" age="11" hobbies={['gaming', 'snowboarding', 'drawing']} />
            <Person name="Zoey" age="23" />
            <Person name="Max" age="18" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
