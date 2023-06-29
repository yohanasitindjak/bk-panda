import { useEffect } from "react"
import { useAuth } from "../Context/UseAuth"
import { useNavigate } from "react-router-dom"

const Wellcome = () => {

  const navigate = useNavigate()
  const {login} = useAuth()

  useEffect(()=>{
    if(!login) navigate('/login')
  }, [])

  return (
    <div className="wellcome">
        <h1>Selamat Datang di Website BK Putra Anda!</h1>
    </div>
  )
}

export default Wellcome