import './App.css';
import Compat from './components/Compatibility/Compat';
import HeaderSection from './components/header-section/HeaderSection';
import AppHeader from './components/header/AppHeader';

function App() {
  return (
    <>
      <AppHeader />
      <HeaderSection />
      <Compat />
    </>
  );
}

export default App;
