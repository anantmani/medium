import {Link} from "react-router-dom";
import {useState} from "react";
import {BACKEND_URL} from "../../config.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Auth({type}: {type: "signin"|"signup"}) {
    const navigate = useNavigate()
    interface SigninInput {
        email: string;
        password: string;
        name?: string;
    }
    const [postInputs,setPostInputs] = useState<SigninInput>({
        name: "",
        password: "",
        email: ""
    });

    async function sendRequest() {
        console.log(`${BACKEND_URL}/api/v1/user/${type === 'signin'?'signin':'signup'}`)
        console.log(postInputs)
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signin'?'signin':'signup'}`, postInputs,{headers:{"content-type": "application/json"}});
        console.log(response)
        const jwt = response.data;
        console.log(jwt);
        localStorage.setItem("token", jwt);
        navigate("/blogs")

    }
    return (
        <div className="  h-screen  flex flex-col justify-center">
            <div className = " flex justify-center">
                <div className=" w-80">
                    <div className="mb-6">
                    <div className=" text-3xl font-bold">
                        Create an Account
                    </div>
                    <div className="text-slate-400">
                        {type === "signup" ? "Already have an account?" : "Create an account"}
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Signup" : "Login"}
                        </Link>
                    </div>
                    </div>
                    <div>
                        {type === "signup" ? <LablelledInput label="Name" placeholder="Anant..."
                                        onChange={(e) => setPostInputs({...postInputs, name: e.target.value})}/> : null}
                        <LablelledInput label="email" placeholder="anant@xyz.com"
                                        onChange={(e) => setPostInputs({...postInputs, email: e.target.value})}/>
                        <LablelledInput label="password" placeholder="12324" type="password"
                                        onChange={(e) => setPostInputs({...postInputs, password: e.target.value})}/>
                    </div>
                    <button type="button"
                            onClick={() => sendRequest()}
                            className="mt-4 w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        {type === "signin" ? "Signin" : "Signup"}
                    </button>

                </div>


            </div>
        </div>
    )
}

interface LablleledInputType {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LablelledInput({label, placeholder, onChange, type}: LablleledInputType) {
    return (<div className="mb-3">
        <label className="block mb-1 text-sm font-medium text-gray-900">{label}</label>
    <input type={type||"text"} id="first_name"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
           placeholder={placeholder} onChange={onChange} />
</div>)
}

export default Auth;