
import './App.css';
import Footerimg from './Components/Footerimg';
import Header from './Components/Header';
import Headerup from './Components/Headerup';
import Paragraph from './Components/Paragraph';
import Pms from './Components/Pms';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Subscribe from './Components/Subscribe';
function App() {
  return (
    <div className="App">
         <Headerup/>
         <Header/>
         <Pms/>
         <Paragraph/>
         <Section1/>
         <Section2/>
         <Section3/>
         <Section4/>
         <Section5/>
         <Section6/>
         <Subscribe/>
         <Footerimg/>
    </div>
  );
}
export default App;
