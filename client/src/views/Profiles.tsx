import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { dispatchStore, State } from '../state'
import { fetchProfiles } from '../state/action-creators'
import ProfileCard from '../components/ProfileCard'
import style from './Profiles.module.css'
import { NavLink } from 'react-router-dom'

export interface ProfileProps {
    id: string,
    full_name: string,
    expert_skills: string[],
}

function Profiles() {
    const {isError, isLoading, profiles} = useSelector((state: State) => state.profile)
    

    useEffect(() => {
        dispatchStore(fetchProfiles())
    }, [])

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error</div>
    }


    
  return (
      <>
      
        <div className={style.flex}>
        { profiles &&
        profiles.map((profile:ProfileProps) => (    
                <ProfileCard key={profile.id} profile={profile}/>
        ))
    }
    </div>  
    <NavLink to="/create" 
    className={style.createProfile}
    >
        +
    </NavLink>
      </>
  )
}

export default Profiles

