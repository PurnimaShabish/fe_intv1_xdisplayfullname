import React, {useState} from "react";
import "./XDisplayName.css";

export default function XDisplayName(){
    const [formData, setFormData] = useState({firstName : '', lastName : ''});
    const [showFullName, setShowFullName] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        setFormData((prev) => ({...prev,[name]:e.target.value}));

        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form submitted");   
        setShowFullName(true); 
    }

    return (
        <div className="form-container">
            <h2>Full Name Display</h2>
            <form className="form-box" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input  id="firstName" 
                            name="firstName" 
                            type="text"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange} 
                            required>
                    </input>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input  id="lastName" 
                            name="lastName" 
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required></input>
                </div>

                <button className="button">Submit</button>
            
            </form>
            {showFullName? (<p> Full Name : {formData.firstName} {formData.lastName}</p>) : null}
        </div>
    )

}