import './App.css';
import Header from './components/Header';
import Icon from './components/Icon';
import Footer from './components/Footer';
import Icons_class from './components/Icons_class';
import Extra from './Extra';
function App() {
  const theme = {
    backgroundColor: 'blue',
  };
  return (
    <div>
      <Header update="updated title" />
      <Extra/>
      <Icon/>
      <Icons_class/>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
