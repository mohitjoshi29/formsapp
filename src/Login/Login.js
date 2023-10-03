import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
        const [name,setName]=useState('');
        const [pass,setPass]=useState('');
        const [datainput,setDatainput]=useState('');
        const LoginForm=()=>{
            const info={name:name,pass:pass};
            setDatainput([info]);
        }
  return (
    <div style="margin:50px 0px 0px 200px;">
      <form action="" onSubmit={LoginForm}>
        <div>
            <label htmlFor='name'>User Name</label>
            <input type="text" value={name} name="name" id="user_name" onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor='pass'>password</label>
            <input type='password' id="password" value={pass} name='pass' onChange={(e)=>setPass(e.target.value)}></input>
        </div>
        <Link to="/register"><button type='submit'>Login</button></Link>
      </form>
    </div>
  )
}
