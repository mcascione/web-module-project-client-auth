import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFriend = () => {
   const navigate = useNavigate();
   const randomId = generateRandomId();
   
   const [form, setForm] = useState({
        id:randomId,    
        name: '',
        age: '',
        email: ''
   });

   function generateRandomId() {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
        }
        return result;
    }

   const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
   }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post("http://localhost:9000/api/friends", form, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
                navigate("/friends");
            })
            .catch(err => {
                console.log(err);
            })
    };
   
    return (
    <div>
        <h1>AddFriend</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">FRIEND NAME:</label>
                <input id="name" name="name" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="age">FRIEND AGE:</label>
                <input id="age"name="age" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">FRIEND EMAIL:</label>
                <input id="email" name="email" onChange={handleChange}/>
            </div>
            <button>SUBMIT</button>
        </form>
    </div>);
  };

export default AddFriend;