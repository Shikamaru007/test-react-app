
import React, { useState } from 'react';

function Contact(){
    
    const [formData, setFormData] = useState({email: "",
                                              password: "",
                                              rememberMe: false});

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        if(type === "checkbox"){
            setFormData(f => ({...f, [name]: checked}))
        }else{
            setFormData(f => ({...f, [name]: value}))
        }
        console.log(`Name: ${name}, Value: ${value}, Type: ${type}, Checked: ${checked}`);
    }

    const validate = (data) => {

        const regex = {
            email: /^([^\s@]+)@([^\s@]+)\.([^\s@]+)$/

        }

        const err = {};
        if(data.email === ""){err.email = "Email is required"} else if(!regex.email.test(data.email)){err.email = "Please enter a valid email address"};

        if(data.password === ""){err.password = "Password cannot be empty"}  else if(data.password.length < 6){err.password = "Password must be at least 6 characters long"} 
        return err;        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const validateForm = validate(formData);
        console.log(validateForm);
        
        setErrors({});
        
        if(Object.keys(validateForm).length > 0){
            setErrors(validateForm);
        }else{
            window.alert("You have successfully submitted the form!");
            setFormData({email: "",
                      password: "",
                      rememberMe: false});
        }
        
    }

    return(<>
            <form action="/" onSubmit={handleFormSubmit}>
                <label>Email Address</label>
                <input type="text" 
                       name='email' 
                       value={formData.email} 
                       onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>} <br /><br />

                <label>Password</label>
                <input type="password" 
                       name='password' 
                       value={formData.password} 
                       onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>} <br /><br />

                <label htmlFor="rememberMe">
                    <input type="checkbox" 
                           name='rememberMe' 
                           value={formData.rememberMe}
                           id='rememberMe' 
                           checked = {formData.rememberMe} 
                           onChange={handleChange} /> Remember Me
                </label> <br /><br />

                <button type='submit'>Submit</button>
            </form>
          </>)

}
export default Contact;
