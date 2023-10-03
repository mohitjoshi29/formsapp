import React,{useState} from 'react'

export default function Register() {
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [datainput,setDatainput]=useState('');
    const Register=()=>{
        const info1={fname:fname,lname:lname,email:email,password:password};
        setDatainput([info1]);
    }

  return (
    <div>
        <form method='' onSubmit={Register}>
            <div>
                <label htmlFor='fname'>first name</label>
                <input id='fname' value={fname} type='text' name='fname' onChange={(e)=>setFname(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='lname'>last name</label>
                <input id='lname' value={lname} type='text' name='lname' onChange={(e)=>setLname(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='email'>email</label>
                <input id='email' value={email} type='email' name='email' onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input id='fnapasswordme' value={password} type='password' name='password' onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}
