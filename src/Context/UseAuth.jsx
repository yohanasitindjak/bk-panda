import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export const useAuth = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = (props) =>{
    const [login, setLogin] = useState(null)
    const [name, setName] = useState(null)
    const [siswa, setSiswa] = useState(null)

    const value = {
        login, setLogin,
        name, setName,
        siswa, setSiswa
    }

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}