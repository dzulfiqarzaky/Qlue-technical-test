import { useState } from "react";
import { useDispatch } from "react-redux";
import { dispatchStore} from "../state"

import { useNavigate } from "react-router-dom";
import { addProfile } from "../state/action-creators";

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
        navigate("/profiles")
      }, 0)
    }
  };


  return (
    <div className="profileContainer">
      <form onSubmit={handleSubmit} className="profileCard">
        <span className="profileTitle">Create Person</span>
        <div className="inputContainer">
          <label htmlFor="name" className="label">Name</label>
          <input type="text" name="full_name" className="nameInput" onChange={handleChange} id="full_name" />
          { !error ? undefined : ( <span className="error">Please fill in name above</span> )}
          <span className="label">Expert Skills</span>
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
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  )
}

export default AddNewProfile