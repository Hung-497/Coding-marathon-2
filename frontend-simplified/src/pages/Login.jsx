import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const response = await fetch("/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const user = await response.json();

        if (!response.ok) {
            setError(user.error);
            return;
        }

        localStorage.setItem("user", JSON.stringify(user));
        console.log("success");
        navigate("/");
    };

    return (
        <div className="container m-auto max-w-2xl py-24">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-bold mb-2 ">Email address:</label>
                        <input className="border rounded w-full py-2 px-3" placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Password:</label>
                        <input className="border rounded w-full py-2 px-3" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button >Log in </button>
                </form>
            </div>
        </div>
    );
};

export default Login;