import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../Context/UseAuth';

const Sidebar = () => {

    const { name, login, setLogin, setName } = useAuth()

    const navigate = useNavigate()

    useEffect(()=>{
        if(login) navigate('/')
    }, [])

    const handleLogout = () =>{
        localStorage.removeItem('login')
        setName(null)
        setLogin(false)
        navigate('/login')
    }

    return (
        <div className="sidebar">
            <header>
                <img src="src/asset/logo_smk-removebg-preview.png" width={60} />
                <h1>SMK PUTRA ANDA BINJAI</h1>
            </header>
                {name && (
                    <>
                        <h1>Selamat Datang!</h1>
                        <h1>{name}</h1>
                    </>
                )}
    
            {
                !login ? <button className="btn" onClick={() => navigate('/Login')}>Login</button> :
                <ul>
                <li> <img src="src/asset/tatib-removebg-preview.png" width={35} />
                    <button className='btn-navigate' onClick={() => navigate('/tatib')}>Tata Tertib Sekolah</button>
                </li>
                <li> <img src="src/asset/doc2-removebg-preview.png" width={35} />
                    <button className='btn-navigate' onClick={() => navigate('/document')}>Document</button>
                </li>
                <li> <img src="src/asset/his2-removebg-preview.png" width={35} />
                    <button className='btn-navigate' onClick={() => navigate('/history')}>History</button>
                </li>
                <button className="btn" onClick={() => handleLogout()}>Logout</button>
            </ul>
            }
        </div>
    )
}
export default Sidebar