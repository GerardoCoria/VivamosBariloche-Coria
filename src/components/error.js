import Error404 from "../media/404.jpg"

const Error = ()=>{
    return (
        <div id="error">
            <h1>Error 404</h1>
            <p>La página que has solicitado no existe</p>
            <img src={Error404} alt="404"/>
        </div>
    )
}
export default Error