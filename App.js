
import { useState } from 'react';
import './App.css';
import Footer from './pages/footer';
import Language from './pages/language';
import Menu from './pages/Menu';


function App() {
  const lang = ['en', 'de', 'uk'];
  const [region, setRegion] = useState(null);
  const handlerSelection = (val) => {
    console.log("object", val);
    setRegion(val)
  }
  return (
    <div className="App">
      {region ? null : <h3>Select a Language {region}</h3>}
      {region ? <Menu region={region} /> : <Language langs={lang} handlerSelection={handlerSelection} />}
      <Footer />
    </div>
  );
}

export default App;
