import { useNavigate } from "react-router-dom";
import IconHead from "./IconHead";
import { useEffect } from "react";
import { useAuth } from "../Context/UseAuth";

function History() {

    
  const navigate = useNavigate()
  const {login} = useAuth()

  useEffect(()=>{
    if(!login) navigate('/login')
  }, [])

    return (
        <div className="tatib">
            <h1>Sistem Informasi Bimbingan Konseling</h1>
            <IconHead img="src\asset\his2-removebg-preview.png" text="History Siswa/i"/>
            <div className="tatib-list">
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet quod corporis voluptate repellat perferendis odit? Saepe, ad commodi! Reprehenderit placeat est cumque pariatur, porro quam? Nihil odit eligendi at ab rem aliquam perferendis, aliquid, numquam quam, provident similique adipisci.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque deleniti quos amet nostrum voluptate odit commodi animi iusto perferendis harum possimus explicabo, vitae inventore fugit eum minus. Qui ea, nostrum doloremque ipsum accusamus quaerat illum eos in saepe quas iure porro reiciendis eius totam blanditiis. Odit magni sapiente rerum eos iusto excepturi nostrum, quas ex at! Eaque accusamus repellendus dolore consectetur dolorum, cumque sint veritatis veniam adipisci magni, nihil ut officia. Repudiandae unde provident aperiam ipsam saepe aliquam nemo eos reprehenderit exercitationem dolore et, sequi beatae ea magnam dolorum.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae, maiores impedit saepe dolor quam blanditiis ad provident aliquid non dignissimos perferendis, nobis fugit quibusdam tempore laudantium unde illo itaque iure? Sit dolore culpa a voluptatum nam earum at repellendus, et, aspernatur ipsa, possimus sed voluptates quibusdam! Quasi vel ea ad ducimus, distinctio iusto accusamus et pariatur corporis facilis recusandae odit atque quis quos officiis itaque ipsa amet, sapiente fuga iure? In ab cupiditate sapiente amet eos. Voluptates.</li>
                </ul>
            </div>
        </div>
    )
}

export default History