import './App.css';
import Compat from './components/Compatibility/Compat';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSection from './components/header-section/HeaderSection';
import AppHeader from './components/header/AppHeader';
import Amount from './components/Amounts/Amount';

function App() {
  return (
    <>
      <AppHeader />
      <HeaderSection />
      <Compat />
      <Amount />
    </>
  );
}

export default App;
