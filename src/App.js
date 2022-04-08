import './App.css';
import { headerLinks } from './components/utils/utils';
import NavBar from './components/header/navbar';
import SideBar from './components/sidebar/SideBar';
import Landing from './components/landing/Landing';

function App() {
  return (
    <div className="wrapper">
      <header className="header__container">
        <NavBar headerLinks={headerLinks}/>
      </header>
      <main className="main">
        <div className="main__container">
        <SideBar/>
        <Landing/>
        </div>
      </main>
    </div>
  )
}

export default App;
