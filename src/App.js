import { useContext, useEffect } from 'react';
import './App.css';
import { GlobalContext } from './GlobalContext';
import Header from './components/Header';

function App() {
  const { contar, setContar, titulo } = useContext(GlobalContext)
  useEffect(() => {
    document.title = titulo + ': ' + contar;
  }, [contar, titulo]);

  return (
    <Header />
  );
}

export default App;
