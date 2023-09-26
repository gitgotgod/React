
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import SlotMachine from './Slots'
import ShoppingList from './ShoppingList'

let data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "chicken breast", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 6, completed: true },
];

function App() {
  return (
    <div>
      <ShoppingList items={data} />
    </div>
  )
}

export default App

{
  /* < SlotMachine val1="1" val2="1" val3="1" />
  <SlotMachine val1="2" val2="1" val3="1" /> */
  /* <div>
  <Heading color="magenta" text="Test Your Luck!" />
  <Heading color="aquamarine" text="Lucky?" font="30px" />
  <DoubleDice />
  <DoubleDice />
  <DoubleDice />
  
  <ColorList colors={["red", "pink", "purple", "teal"]} />
  </div> */



  // <div className="Greets">
  //   <Greeter person="Jason" name="Chung" />
  //   <Greeter person="Jean" name="Chung" />
  //   <Greeter person="Mina" name="Park" />
  // </div>
  // <>
  //   <Die numSides={20} />
  //   <Die numSides={6} />
  //   <Die numSides={10} />
  // </>
}