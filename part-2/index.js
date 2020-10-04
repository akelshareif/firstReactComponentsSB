const Tweet = ({ username, name, date, msg }) => {
    return (
        <ul>
            <li>Username: {username}</li>
            <li>Name: {name}</li>
            <li>Date: {date}</li>
            <li>Message: {msg}</li>
        </ul>
    );
};

const App = () => {
    return (
        <div>
            <Tweet username="bobby12" name="Bob" date="01/23/2020" msg="This is bob's tweet." />
            <Tweet username="jackie99" name="Jack" date="05/14/2020" msg="This is jack's tweet." />
            <Tweet username="moePower22" name="Moe" date="06/03/2020" msg="This is moe's tweet." />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
