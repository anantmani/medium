import Auth from "../components/Auth.tsx";
import Quote from "../components/Quote.tsx";

function Signin(){
    return (

        <div className="grid grid-cols-2 ">
            <div className="col-span-2 md:col-span-1">
                <Auth type={"signin"}/>
            </div>
            <div className="hidden md:block">
                <Quote/>
            </div>
        </div>
    )
}
export default Signin