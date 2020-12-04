import Header from './components/Header';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import {useState} from 'react';
import './components/scss/App.scss';





function App() {

  const [widget, setWidget] = useState(false);

 
  return (
    <div className='container-app container-fluid'>
      {/* HEADER */}
      <div className='row'>
      
          
        <div className='container-header col-12'>
          <Header 
          widget= {widget}
          setWidget={setWidget}
          />
           
          
        </div>
        {
          widget && <div className="row">
          <CartWidget setWidget={setWidget} widget= {widget} />  
        </div> 
        }
        {/* NAVBAR */}
        <div className='container-navbar col-12'>
          <NavBar 
          offers= 'Offers' 
          categories='Categories' 
          contact= 'Contact' 
          />
        </div>        
      </div>     
    </div>
  );
}

export default App;
