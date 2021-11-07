import logo from './logo.svg';
import './App.css';

// module Number 45_5
function App() {
 const nayoks = ['Rubel', 'Bapparaz', 'Koober','Bappi', 'Shuvo', 'Omor Sani'];

 const cinemas = [
  { nayok: 'Koober', nayika: 'kopila' },
  { nayok: 'Rubel', nayika: 'Moushumi' },
  { nayok: 'Razzak', nayika: 'Shabana' },
  { nayok: 'Jashim', nayika: 'Suchorita' },

]
  return (
    <div className="App">
    <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
    </ul>
    {/* <Cinema nayok="J Bond" nayika="Cat W"></Cinema> */}
    {
      cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
    }

  </div>
  );
}
function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.nayika}</h4>
    </div >
  );
}

function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

function Friend(props) {
  return (
    <div className="person">
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  );
}

 {/* <Player name="Joe Root" country="England"></Player>
    <Player name="Kane Williamson" country="NZ"></Player>
    <Player name="Steve Smith" country="Aus"></Player>
    <Player name="Marnus Labuschagne" country="AUS"></Player>
    <Player name="Rohit Sharma" country="IND"></Player>
    <Player name="Virat Kohli" country="IND"></Player>
    <Player name="Babar Azam" country="PAK"></Player>
    <Player name="David Warner" country="AUS"></Player>
    <Player name="Quinton de Kock" country="SA"></Player>
    <Player name="Henry Nicholls" country="NZ"></Player>
    <Player name="Dimuth Karunaratne" country="SL"></Player> */}

export default App;
