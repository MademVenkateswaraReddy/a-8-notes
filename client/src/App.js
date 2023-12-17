import axios from 'axios';
import './App.css';
import { Login } from './components/Login';
import { Notes } from './components/Notes';
import { useEffect, useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false)

useEffect(()=>{
  const checkLogin = async ()=>{
    const token = localStorage.getItem('tokenStore')
    if(token){
      const verified = await axios.get('/users/verify', {
        headers: {Authorization: token}
      })
      console.log('verified')
    }else{
      setIsLogin(false)
    }
  }
  checkLogin()
}, [])

  return (
    <div className="App">
      <h1>My Thoughts</h1>
      {
        isLogin ? <Notes setIsLogin={setIsLogin} /> : <Login setIsLogin={setIsLogin} />
      }
      
    </div>
  );
}

export default App;
