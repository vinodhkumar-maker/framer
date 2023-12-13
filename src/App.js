import './App.css';
import Dragpage from './Components/Dragpage';
import RotatePage from './Components/RotatePage';
import ScollPage from './Components/ScollPage';



function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "50px",

    }}>
      <Dragpage />
      <ScollPage />
      <RotatePage/>
     
      

    </div>
  );
}

export default App;
