import { useNavigate } from "react-router-dom"
import { useAuth } from "../Context/UseAuth"
import { useEffect, useState } from "react"

export default function Login() {

    const navigate = useNavigate()
    const [nama, setNama] = useState();
    const {setName, setLogin, login, siswa, setSiswa} = useAuth()

    useEffect(()=>{
        // if(localStorage.getItem('login')) navigate('/')
        if(login) navigate('/')
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem('login', true)
        const tokenAuth = localStorage.getItem('login')
        setSiswa(false)
        setLogin(tokenAuth)
        setName(nama)
        navigate('/')
    }

    const handleSubmitSiswa = (e) =>{
        e.preventDefault()
        localStorage.setItem('loginSiswa', true)
        const tokenAuth = localStorage.getItem('loginSiswa')
        setSiswa(true)
        setLogin(tokenAuth)
        navigate('/')

    }

    return(
        <div className="tatib">
            <h1>Sistem Informasi Bimbingan Konseling</h1>
                <form className="login">
                    <h1>LOGIN</h1>
                    <img src="src/asset/akun2-removebg-preview.png" alt="" width={20} />
                    <input onChange={(e)=>{
                        setNama(e.currentTarget.value)
                    }} type="text" placeholder="Masukan username kamu!" />
                    <img src="src/asset/kunci-removebg-preview.png" alt="" width={20} />
                    <input type="password" placeholder="Masukan Password kamu!" />
                    <button onClick={(e)=>handleSubmit(e)} className="tombol">Sign In</button>
                    <button onClick={(e)=>handleSubmitSiswa(e)} className="tombol">
                        Masuk sebagai siswa
                    </button>
                </form>
            
        </div>
    )
}
