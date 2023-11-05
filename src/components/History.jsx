import { useNavigate } from "react-router-dom";
import IconHead from "./IconHead";
import { useEffect } from "react";
import { useAuth } from "../Context/UseAuth";
import Biodata from "./Biodata";

function History() {


    const navigate = useNavigate()
    const { login, siswa } = useAuth()

    useEffect(() => {
        if (!login) navigate('/login')
    }, [])

    return (
        <div className="tatib">
            <h1>Sistem Informasi Bimbingan Konseling</h1>
            <IconHead img="./public/asset/his2-removebg-preview.png" text="History Siswa/i" />
            <div className="overflow-x-auto w-2/3 mx-auto bg-white rounded-md">
                {/* Siswa */}
                {
                    siswa ? (
                        <>
                            <h1 className="text-center pd-2 rounded-md bg-white text-blue-500">Table Siswa</h1>
                            <table className="table text-slate-600 text-center">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Siswa/i</th>
                                        <th>Pelanggaran</th>
                                        <th>Sanksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="bg-sky-100">
                                        <td>1</td>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>2</td>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className="bg-sky-100">
                                        <td>3</td>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>

                    ) :
                        (
                            <>
                                <h1 className="text-center pd-2 rounded-md bg-white text-blue-500">Table Admin</h1>
                                <Biodata />
                            </>
                        )
                }
            </div>
        </div>
    )
}

export default History