import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [error, setError] = useState(null);

    const address = {
                   "street": street,
                   "city": city,
                   "zipCode": zipCode
                };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        const response = await fetch("/api/users/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                password,
                phone_number: phoneNumber,
                gender,
                date_of_birth: dateOfBirth,
                address: address
            })
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
        <div className="create">
            <h2>Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email address:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Phone Number:</label>
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <label>Gender:</label>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                <label>Date of Birth:</label>
                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                <label>Address:</label>
                <label>Street</label>
                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
                <label>City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                <label>Zip code</label>
                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                <button>Sign up</button>
            </form>
        </div>
    );
};

export default Signup;