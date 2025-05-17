import Quote from "../components/Quote.tsx";
import Auth from "../components/Auth.tsx";

function Signup(){
    return (

        <div className="grid grid-cols-2 ">
            <div className="col-span-2 md:col-span-1">
            <Auth type={"signup"}/>
            </div>
            <div className="hidden md:block">
            <Quote/>
            </div>
        </div>
    )
}
export default Signup