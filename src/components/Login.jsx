import { useNavigate } from "react-router-dom"
import { useAuth } from "../Context/UseAuth"
import { useEffect, useState } from "react"

export default function Login() {

    const navigate = useNavigate()
    const [nama, setNama] = useState();
    const {setName, setLogin, login} = useAuth()

    useEffect(()=>{
        // if(localStorage.getItem('login')) navigate('/')
        if(login) navigate('/')
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem('login', true)
        const tokenAuth = localStorage.getItem('login')
        setLogin(tokenAuth)
        setName(nama)
        navigate('/')
    }

    return(
        <div className="tatib">
            <h1>Sistem Informasi Bimbingan Konseling</h1>
                <form className="login" onSubmit={(e)=>handleSubmit(e)}>
                    <h1>Login akun kamu disini!</h1>
                    <img src="src/asset/akun2-removebg-preview.png" alt="" width={20} />
                    <input onChange={(e)=>{
                        setNama(e.currentTarget.value)
                    }} type="text" placeholder="Masukan username kamu!" />
                    <img src="src/asset/kunci-removebg-preview.png" alt="" width={20} />
                    <input type="password" placeholder="Masukan Password kamu!" />
                    <button className="tombol">Sign In</button>
                </form>
            
        </div>
    )
}
