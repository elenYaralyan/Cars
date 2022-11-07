import Footer from './components/Footer';
import Header from './components/Header';
import RootRouter from './router/RootRouter';
import "./assets/i18next/index"

function App() {
  return (
    <div className='App'>
      <Header/>
      <RootRouter />
      <Footer/>
    </div>
  );
}

export default App;
