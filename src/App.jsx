import LoginForm from "./layout/Loginform";
import RegisterForm from "./layout/Registerform";

function App() {
  return (
    <div className="min-h-screen">
      <h1 className="text-lg text-pink-600 text-center bg-lime-400 py-5 m-6 font-bold">
        HELLO it Me!!
      </h1> 
      <hr />
      <RegisterForm/>
      <hr />
      <LoginForm/>
    </div>
  );
}

export default App;
