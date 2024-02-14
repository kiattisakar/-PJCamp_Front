
import axios from "axios";

import {useState} from "react";

export default function RegisterForm() {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        comfirmpassword: '',
        firstName: '',
        lastName: '',
        phone: ''
    })


    const hdlChange = e => {
        setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
    }

    const hdlSubmit = async e => {
        e.preventDefault()
        // validation vertifile //
        if (input.password !== input.comfirmpassword) {
            return alert('Ur password not match')
        }
        console.log(input)
        const rs = await axios.post('http://localhost:8899/auth/register', input)
        // console.log(input)
    }

    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>

                <form action="#" method="post" onSubmit={hdlSubmit} >
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input type="text" id="user" name="username" 
                        value={input.username} 
                        // onChange={ e => setInput({...input, [e.target.name] : e.target.value})}
                        onChange={ hdlChange }
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" name="email" 
                        value={input.email} 
                        onChange={ hdlChange }
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="pass" name="password" 
                        value={input.password}
                        onChange={ hdlChange }
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="comfirmpassword" className="block text-gray-600">Confirm Password</label>
                        <input type="password" id="comfirmpassword" name="comfirmpassword" 
                        value={input.comfirmpassword}
                        onChange={ hdlChange }
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-600">First Name</label>
                        <input type="firstName" id="firstName" name="firstName" 
                        value={input.firstName}
                        onChange={ hdlChange }
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-600">Last Name</label>
                        <input type="lastName" id="lastName" name="lastName" 
                        value={input.lastName}
                        onChange={ hdlChange }
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone call" className="block text-gray-600">phone call</label>
                        <input type="phone call" id="phone call" name="phone" 
                        value={input.phone}
                        onChange={ hdlChange }
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Register</button>
                </form>
            </div>
        </div>
    );
}
