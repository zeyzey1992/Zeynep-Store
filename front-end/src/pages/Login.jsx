import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Login({ setUser }){

    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin(e) {
    e.preventDefault();

    try {
        const response = await fetch
        ("http://localhost:3000/api/users/login", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Login failed");
            return;
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);

        navigate("/");
    } catch (error) {
        alert("Cannot connect to the server. Please try again.");
    }
}
    return(

        <div className="auth-container">
            <form className="auth-form" onSubmit={handleLogin}>
                <h1>Login</h1>

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
                placeholder="Enter passwaord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                >
                </input>

                <button type="submit">Login</button>

                <p>
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </form>

        </div>

    );
}

export default Login;