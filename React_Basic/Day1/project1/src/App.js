import logo from './logo.svg';
import './App.css';
import './styles/style.css'
import MyButton from './components/button';
import Profile from './components/profile';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table'
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div>
      {/* <h1>Welcome to my app</h1> */}
      {/* <MyButton /> */}
      {/* <Profile /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p> This is children props </p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button> Action </button>
      </Greet>
      <Greet name="Diana" heroName="WonderWoman" />
      <Welcome name="Bruce"  heroName="Batman"/>
      <Welcome name="Clark" heroName="SuperMan"/>
      <Welcome name="Diana" heroName="WonderWoman"/> */}
      {/* <Message /> */}

       {/* <Greet name="Diana" heroName="WonderWoman"/> */}
      {/* <Counter /> */}

      {/* <FunctionClick />
      <ClassClick /> */}

      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true}/>
      <Inline />
      <h1 className='error'> Error</h1>
      <h1 className={styles.success}> Success</h1> */}
      {/* <Form /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <PureComp /> */}
      <ParentComp /> 

    </div>
  );
}

export default App;
