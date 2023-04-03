import React, {useState} from 'react';
import Login from './Login'
import Register from './Register';

export default function LgRgPage() {

    const [changePage, setChangePage] = useState(false);


  const ragister = () => {
    console.log("ragister");
    setChangePage(true)
  };

  const login = () => {
    console.log("login");
    setChangePage(false)
  };

  return (
    <div>
    {changePage?
     <Register login={login} register={ragister} /> :
    <Login login={login} register={ragister}/>
   
    }
      
    </div>
  );
}
