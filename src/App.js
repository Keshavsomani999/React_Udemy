// import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading"
import List from "./components/List"

const stl = {
  color:"blue",
  fontSize:"20px",
  border:"1px solid black"
}

stl.color = "yellow";

const date = new Date(2020,1,1,19);
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color:""
}


if(currentTime<12){
  greeting = "Good Morning"
  customStyle.color="red"
}else if(currentTime<18){
  greeting = "Good Afternoon"
  customStyle.color="green"

}
else{
  greeting="Good Night"
  customStyle.color="blue"

}



function App() {
 
  return (
    <div className="App">
      <Heading />
      <h1 style={customStyle}>{greeting}</h1>
      <List/>
    </div>
  );
}

export default App;
