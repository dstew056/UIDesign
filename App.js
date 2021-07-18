import Navbar from './Navbar';
import Home from './Home';
import Input from './Input';
import Results from './Results';
import Feedback from './Feedback';
import ThankYou from './Thankyou';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <Input/>
        <Results/>
        <Feedback/>
        <ThankYou/>
      </div>
    </div>
  );
}

export default App;
