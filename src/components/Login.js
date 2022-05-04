import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        const regExEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === "" || password === "") {
            swal("Error","Los campos deben estar completos", "error");
            return;
        }

        if (email !== "" && !regExEmail.test(email)) {
            swal("Error","Debes escribir una direccción de correo valida" , "error");
            return
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            swal("Error","Credenciales invalidas", "error");
            return
        }

        

        axios.post('http://challenge-react.alkemy.org' , {email, password})
            .then(res => {
                swal(<h1>Perfecto</h1>, <p>Estamos listos!</p>, "success");
                console.log (res.data);
                const tokenRes = res.data.token;
                localStorage.setItem("token", tokenRes);
                navigate('/list');
            })
    }

    return (
        <>
            <h2>Formulario de login</h2>
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
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login