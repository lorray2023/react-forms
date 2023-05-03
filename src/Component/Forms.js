    import React, {useState} from 'react'

    export default function Forms() {

    const [name, setName] = useState ('');
    const [email,setEmail] =useState ('');
    const [password, setPassword] =useState ('');
    const [gender, setGender] =useState ('Male');

    const handleSubmit = (e) => {
        e.preventDefault (); {
            const userDetails = {
                user_name: name,
                user_email: email,
                user_password:password,
                user_gender: gender,
            }

            console.log(userDetails);
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          
          <label>Name</label>
          <br />
          <input placeholder='name' value={name} onChange={(e)=> {setName(e.target.value)}}/>
          <br />
          <label>Email</label>
          <br />
          <input placeholder='email' value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
          <br />
          <label>Password</label>
          <br />
          <input placeholder='password' value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
          <br/>

          <label>Gender</label>
          <br />
         <label>Male</label> <input type='radio' name='gender' onClick={(e)=> {setGender(e.target.name)}}/>
         <label>Female</label> <input type='radio' name='gender' onClick={(e)=>{setGender(e.target.name)}}/>
         <label>Other</label> <input type='radio' name='gender' onClick={(e)=> {setGender(e.target.name)}}/>

           <br />



        <button>Submit</button>

        </form>

    </div>
  )
}
 