import React from "react"
import IconHead from "./IconHead"
import { useNavigate } from "react-router-dom"

function Biodata() {


    const navigate = useNavigate()

    return (
        <>
            <div className="overflow-x-auto m">
                <table className="table flex justify-center align">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NISN</th>
                            <th>Nama Siswa</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>4321</td>
                            <td>Mikio</td>
                            <td>
                                {/* You can open the modal using ID.showModal() method */}
                                <button onClick={()=>navigate('/biosiswa')} className="btn btn-gosht" >
                                    Detail
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>6352</td>
                            <td>Sea</td>
                            <td>
                                {/* You can open the modal using ID.showModal() method */}
                                <button onClick={()=>navigate('/biosiswa')} className="btn btn-gosht" >
                                    Detail
                                </button>                            
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Biodata