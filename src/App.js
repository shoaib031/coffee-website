import Bodyheader from './components/bodyheader';
import Body from './components/body'
import SideBarText from './components/sideBarText'
import About from './components/About';
import Seller from './components/seller';
import New from './components/New';
import Subscribe from './components/subscribe'
import Footer from './components/Footer';
function App() {
  return (
    <div>

      <div className="App">
        <div>
          <Bodyheader />
        </div>
        <SideBarText />
      </div>
      <Body />
      <About />
      <Seller />
      <New />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
