import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleRegister(e){
        e.preventDefault();
        
        try{
            const response = await fetch(
                "http://localhost:3000/api/users/register",{

                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password})
            });

        const data = await response.json();

        if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
        }

        alert("Registration successful!");
        navigate("/login");
        }catch(error){
            alert("Cannot connect to the server. Please try again.");
        }
    }

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleRegister}>
                <h1>Create Account</h1>
                <p>Join Zeynep Store today!</p>

                <label>Full Name</label>
                <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required>
                </input>

                <label>Email Address</label>
                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required>
                </input>

                <label>Password</label>
                <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required>
                </input>

                <button type="submit">Register</button>

                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>

        </div>
    );
    
}

export default Register;