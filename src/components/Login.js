import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import "../css/bootstrap.min.css"
import "../css/Login.css"


function Login() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        const regExEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === "" || password === "") {
            Swal("Error","Los campos deben estar completos", "error");
            return;
        }

        if (email !== "" && !regExEmail.test(email)) {
            Swal("Error","Debes escribir una direccción de correo valida" , "error");
            return
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            Swal("Error","Credenciales invalidas", "error");
            return
        }

        

        axios.post('http://challenge-react.alkemy.org' , {email, password})
            .then(res => {
                Swal(<h1>Perfecto</h1>, <p>Estamos listos!</p>, "success");
                console.log (res.data);
                const tokenRes = res.data.token;
                localStorage.setItem("token", tokenRes);
                navigate('/list');
            })
    }

    return (
        <>
            <h2>Formulario de login</h2>
            <div className="form-group">
            <form onSubmit={submitHandler}>
                <label>
                    <span> Correo electrónico:</span> <br />
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    <span>Contraseña:</span><br />
                    <input type="password" name="password" />
                </label>
                <br />
                <div className="btn-group">
                <button type="submit" className="btn btn-success">Ingresar</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default Login