import { useState } from "react"
import axios from "axios"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()
    const {data} = await axios.post("/api/v1/users/signin",{email: email, password: password});
  }
  return (
    <div>SignIn</div>
  )
}

export default SignIn