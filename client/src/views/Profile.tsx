import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { dispatchStore, State } from "../state"
import { fetchProfileDetail } from "../state/action-creators"
import style from './Profile.module.css'
export interface ProfileProps {
  id?: string,
  full_name: string,
  expert_skills: string[],
}

function Profile() {
  const params = useParams();
  const {isError, isLoading, profile} = useSelector((state: State) => state.profile)
    
  const navigate = useNavigate()

  useEffect(() => {
      dispatchStore(fetchProfileDetail(params.id))
  }, [])

  if(isLoading) {
      return <div>Loading...</div>
  }

  if(isError) {
      return <div>Error</div>
  }

  return (
    <div className={style.detailCard}>
        { profile &&
        <div key={profile.id}>
            <img className={style.image} src={require('../assets/user.png')} alt="profile" />
            <p className={style.name}>{profile.full_name}</p>
            <div  className={style.skills}>
              <p>Expert skills: </p>
              <ul>
              {profile.expert_skills && profile.expert_skills.map((skill:string) => (
                  <li key={skill}>{skill}</li>
                ))
              }
                </ul>
            </div>
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur suscipit nisi, atque mollitia error! Doloremque, quasi. Laborum maxime at mollitia nostrum, est eaque ab veniam, consequuntur quasi corporis commodi.
            Laboriosam corporis fugit id hic officia, illum fugiat? Corporis, aspernatur! Corrupti illo quos repellat nisi impedit reiciendis facilis, dicta quibusdam, earum deleniti eum aspernatur laboriosam modi eius quasi, provident obcaecati.
            A qui assumenda voluptatum facere illo? Praesentium veritatis, tempora quidem fugiat consequuntur natus voluptatum itaque incidunt ipsum sunt, ab eligendi consequatur maiores ipsam quas laborum impedit saepe dolorum? Dicta, dolores?
            </p>
        </div>
        }
    </div>
  )
}

export default Profile