import React from "react";

export default function LoginForm() {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>

                <form action="#" method="post">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Login</button>
                </form>
            </div>
        </div>
    );
}
