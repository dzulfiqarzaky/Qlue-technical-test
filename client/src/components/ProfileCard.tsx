import { useNavigate } from 'react-router-dom'
import { ProfileProps } from '../views/Profiles'
import style from './ProfileCard.module.css'
const ProfileCard= ({profile}: {profile:ProfileProps}) => {
    const navigate = useNavigate()
  return (
    <div className={style.profileCard}
    onClick={() => navigate(`/${profile.id}`)}
    >
        <p className={style.fullName}>{profile.full_name}</p>
        <p>Expert skills: </p>
        <p>{profile.expert_skills.join(', ')}</p>
        </div>
  )
}

export default ProfileCard