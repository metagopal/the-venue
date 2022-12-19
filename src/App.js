import Featured from './components/featured';
import Header from './components/header_footer/Header';
import './resources/styles.css'

function App() {
  return (
    <div className="App" style={{height:"1500px", backgroundColor:"cornflowerblue"}}>
      <Header />
      <Featured />
     
    </div>
  );
}

export default App;
