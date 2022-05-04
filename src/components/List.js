import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function List() {

    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            navigate("/")
        }
    });


    


    return(
        <h2>Soy un Listado :D</h2>
    )
}

export default List;