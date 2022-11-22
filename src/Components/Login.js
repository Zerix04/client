import { useState } from "react";
import { Link } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Validasi, setValidasi] = useState('')
    const Login = () => {
        // console.log(username, password);

        // cek usename
        if (username === '') {
            setValidasi('isi username dan password terlebih dahulu')
        } else if (password === '') {
            setValidasi('password nya?')


        } else {
            // proses login ketika data sudah tervalidasi

        }
    }


    return (
        <>
            <div className='container py-5'>
                <h1 className='text-muted'>Login</h1>
                <p className='text-muted'>please login to authentication</p>
                <hr />

                <div className='form-group'>

                    <label>Username</label>
                    <input type='text' className="form-control" onChange={(e) => { setUsername(e.target.value) }} ></input>

                </div>
                <div className='form-group'>
                    <label>password</label>
                    <input type='password' className="form-control" onChange={(e) => { setPassword(e.target.value) }} ></input>
                    <div className="text-danger" onChange={() => setValidasi(Validasi)} >{Validasi}</div>
                </div>


                <div className='form-group mt-3'>
                    <button className='btn btn-warning ' onClick={Login}>Login</button>
                </div>

                <p className='text-muted mt-4'>Don't have account? please <Link to='Register'>Register</Link></p>
            </div>


        </>
    );
}

export default Login;