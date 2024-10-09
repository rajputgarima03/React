import { useRouteError } from "react-router-dom"

const ErrorPage =()=>{
 const error = useRouteError();
    return(
        <div>
           <h1>Something went wrong</h1>
           <h2>{error?.status}</h2>
           <h3>{error?.statusText}</h3>
        </div>
    )
}

export default ErrorPage