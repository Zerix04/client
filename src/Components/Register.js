import { useState } from "react";
import { Link } from 'react-router-dom'
import Axios from 'axios'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nama, setNama] = useState('');
    const [Validasi, setValidasi] = useState('')
    const Register = () => {
        // console.log(username, password);

        // cek usename
        if (username === '') {
            setValidasi('username  wajib di isi')
        } else if (password === '') {
            setValidasi('isi password nya ')

        } else if (nama === '') {
            setValidasi('isi nama nyaa')
        }

        else {
            // proses login ketika data sudah tervalidasi
            Axios.post('http://localhost:3001/register', {
                username: username,
                password: password,
                nama: nama

            })


        }


    }


    return (
        <>
            <div className='container py-5'>
                <h1 className='text-muted'>Register</h1>
                <p className='text-muted'>please Register to authentication</p>
                <hr />

                <div className='form-group'>

                    <label>Username</label>
                    <input type='text' className="form-control" onChange={(e) => { setUsername(e.target.value) }} ></input>

                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className="form-control" onChange={(e) => { setPassword(e.target.value) }} ></input>

                </div>

                <div className='form-group'>
                    <label>Nama</label>
                    <input type='text' className="form-control" onChange={(e) => { setNama(e.target.value) }} ></input>
                    <div className="text-danger" onChange={() => setValidasi(Validasi)} >{Validasi}</div>
                </div>


                <div className='form-group mt-3'>
                    <button className='btn btn-warning ' onClick={Register}>Register</button>
                </div>

                <p className='text-muted'> have account? <Link to='/'>Login</Link></p>
            </div>


        </>
    );
}

export default Register;