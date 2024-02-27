import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "Go to the market and buy stationary and grocery"
    },
    {
      sno: 2,
      title: "Laundry",
      desc: "wash unwashed cloths in washing machine and fold the washed ones"
    },
    {
      sno: 3,
      title: "Throw trash",
      desc: "Throw the trash and change the disposible bag"
    },
    {
      sno: 4,
      title: "Call mumma",
      desc: "call mumma and wish her birthday"
    },
    {
      sno: 5,
      title: "courier mom's birthday present",
      desc: "courier mom's birthday present and order her cake"
    }
  ];
  return (
    <>
      <Header title="TO-DO List" searchBar={false} />
      <Todos todos={todos}/>
      <Footer />
    </>
  );
}

export default App;
