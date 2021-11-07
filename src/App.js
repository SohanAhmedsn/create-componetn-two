import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Player name="Joe Root" country="England"></Player>
    <Player name="Kane Williamson" country="NZ"></Player>
    <Player name="Steve Smith" country="Aus"></Player>
    <Player name="Marnus Labuschagne" country="AUS"></Player>
    <Player name="Rohit Sharma" country="IND"></Player>
    <Player name="Virat Kohli" country="IND"></Player>
    <Player name="Babar Azam" country="PAK"></Player>
    <Player name="David Warner" country="AUS"></Player>
    <Player name="Quinton de Kock" country="SA"></Player>
    <Player name="Henry Nicholls" country="NZ"></Player>
    <Player name="Dimuth Karunaratne" country="SL"></Player>
    </div>
  );
}
function Player(props){
  console.log(props);
  return (
    <div className="player">
      <h1>Name: {props.name} </h1>
      <h2>Country: {props.country} </h2>

    </div>
  )
}

export default App;
