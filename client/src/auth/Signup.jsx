import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await axios.post("/auth/signup", {
      name,
      email,
      password,
      role,
    });

    navigate("/login");
  };

  return (
    <form onSubmit={handleSignup} className="p-6 max-w-md mx-auto">
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="trainer">Trainer</option>
      </select>

      <button className="w-full bg-black text-white py-2 rounded">
        Signup
      </button>
    </form>
  );
};

export default Signup;
