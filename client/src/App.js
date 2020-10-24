import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <form
                    action="http://localhost:9000/api"
                    method="POST"
                    id="form"
                >
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="enter your name"
                    />
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="enter your last name"
                    />
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="enter your age"
                    />
                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    );
}

export default App;
