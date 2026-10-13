import { useNavigate } from "react-router-dom";
export default function ErrorMessage() {
    const navigate = useNavigate();
    return(
        <>

        <h1>Error Message</h1>
        <p>This is the error message page</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
        </>
    )
}