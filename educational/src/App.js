import './App.css';

let name = 'User';

function App() {
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <Button text="Click me!" handler={sayHi} />
    </div>
  );
}

function sayHi(){
  alert('Hi!');
}

// простейший компонент
let Button = (props) => <button onClick={props.handler}>{props.text}</button>;

export default App;