import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Axios from "axios";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Validasi, setValidasi] = useState('')
    const [status, setStatus] = useState('')
    let navigate = useNavigate();

    const Login = () => {
        // console.log(username, password);

        // cek usename
        if (username === '') {
            setStatus('isi username dan password terlebih dahulu')
        } else if (password === '') {
            setStatus('password nya?')


            // proses login ketika data sudah tervalidasi
        } else {
            Axios.post("http://localhost:3001/login", {
                username: username,
                password: password,

            }).then((Response) => {
                if (Response.data.message) {
                    setStatus(Response.data.message);
                } else {
                    sessionStorage.setItem('token', Response.data);
                    navigate('/dashboard');
                }
            })

        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("token") === null) {
            navigate('/')
        } else {
            navigate('/dashboard')
        }
    }, [navigate])

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
                    <div className="text-danger" onChange={() => setStatus(Validasi)} >{status}</div>
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