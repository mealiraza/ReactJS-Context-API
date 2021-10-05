
import './App.css';
import React,{useState} from 'react';
import AuthContext from './context/AuthContext';
import Navigation from './components/Navigation';
function App() {

  const [auth,setAuth]=useState(false);
  return (
    <div className="App">
      <header className="App-header">

        <AuthContext.Provider value={{
          isLoggedIn: auth,
          setLoggedIn:(value)=>{
            setAuth(value);
          }
        }}>
          <Navigation />
        </AuthContext.Provider>

      </header>
    </div>
  );
}

export default App;
