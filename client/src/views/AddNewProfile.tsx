import { useState } from "react";
import { useDispatch } from "react-redux";
import { dispatchStore} from "../state"

import { useNavigate } from "react-router-dom";
import { addProfile } from "../state/action-creators";
import style from './AddNewProfile.module.css'
function AddNewProfile() {
  const [user, setUser] = useState({
    full_name: "",
    expert_skills: Array(),
  })

  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const checklist = (e: { target: { checked: boolean; value: any; }; }) => {
    if(e.target.checked) {
      setUser({
        ...user,
        expert_skills: [...user.expert_skills, e.target.value],
      });
    } else {
      setUser({
        ...user,
        expert_skills: user.expert_skills.filter(skill => skill !== e.target.value),
      });
    }
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if(user.full_name.length === 0) {
      setError(true)
    } else {
      dispatchStore(addProfile(user)) 
      setTimeout(() => {
        navigate("/")
      }, 0)
    }
  };


  return (
    <div className={style.profileContainer}>
      <form onSubmit={handleSubmit} className={style.profileCard}>
        <span className={style.profileTitle}>Create Person</span>
        <div className={style.inputContainer}>
          <label htmlFor="name" className={style.label}>Name</label>
          <input type="text" name="full_name" className={style.nameInput} onChange={handleChange} id="full_name" />
          { !error ? undefined : ( <span className={style.error}>Please fill in name above</span> )}
          <span className={style.label}>Expert Skills</span>
          <div>
            <input type="checkbox" name="skills" value="javascript" id="javascript" onChange={checklist} />
            <label htmlFor="javascript">javascript</label>
          </div>
          <div>
            <input type="checkbox" name="skills" value="python" id="python" onChange={checklist} />
            <label htmlFor="python">python</label>
          </div>
          <div>
            <input type="checkbox" name="skills" value="golang" id="golang" onChange={checklist} />
            <label htmlFor="golang">golang</label>
          </div>
          <div>
            <input type="checkbox" name="skills" value="php" id="php" onChange={checklist} />
            <label htmlFor="php">php</label>
          </div>
        </div>
        <button type="submit" className={style.button}>Submit</button>
      </form>
    </div>
  )
}

export default AddNewProfile