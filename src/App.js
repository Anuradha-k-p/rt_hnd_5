
import './App.css';
import NewHoc from './Component/HOCNew';
import Hoc from './Component/Hoc';
import PureCompo from './Component/PureCompo';

function App() {
  return (
    <div className="App">


      <h2>Pure Component: </h2>
      <p>pure component is a specific type of component that is optimized for performance by minimizing unnecessary re-renders. A pure component only re-renders if its props or state change.</p>
      <PureCompo/>
      <h4>explination:</h4>
      <p>In Pure component when we hit "Change the Number" button State number is every time getting multiply by previous value like 5*5=25 and then 25*5=125. </p>
      <h2>HOC Component</h2>
      <p>Higher-Order Component (HOC) is a pattern used to enhance or extend the behavior of existing components in a reusable way. A Higher-Order Component is essentially a function that takes a component and returns a new component with additional functionality or props.</p>
      {/* <Hoc/> */}
      <NewHoc value = { Hoc}/>
      <h4>explination:</h4>
      <p>in the Hoc function number is incremrntd by 2 for every time when we hit the button "add number". and when we pass that function as props and use the function for first time we are using "RED" backgroundColor and for second time we are using "BLUE" backgroundColor.</p>
     
    </div>
  );
}

export default App;
