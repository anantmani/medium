import {Link} from "react-router-dom";
import type {SigninInput} from "@invisibleana/medium-common";
import {useState} from "react";

function Auth(){
    
    const [postInputs,setPostInputs] = useState<SigninInput>({
        name: "",
        password: "",
        username: ""
    });
    return (
        <div className="  h-screen  flex flex-col justify-center">
            <div className = " flex justify-center">
                <div className= " w-80">
                <div className=" text-lg font-bold" >
                    Create an Account
                </div>
                     <div className="text-slate-400" >
                    Already have an account?
                    <Link className="pl-2 underline" to={"/signin"}>
                        login
                    </Link>
                </div>
                    <div>
                        <LablelledInput lable="Name" placeholder="Anant..." onChange={ (e) => setPostInputs( {...postInputs,name:e.target.value} ) } />
                        <LablelledInput lable="email" placeholder="anant@xyz.com" onChange={ (e) => setPostInputs( {...postInputs,username:e.target.value} ) } />
                        <LablelledInput lable="password" placeholder="12324" type= "password" onChange={ (e) => setPostInputs( {...postInputs,password:e.target.value} ) } />
                    </div>
                </div>


            </div>
        </div>
    )
}
interface LablelledInputType{
    lable:string;
    placeholder:string;
    onChange : (e:React.ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
}
function LablelledInput({lable,placeholder,onChange,type}:LablelledInputType){
return (<div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lable}</label>
    <input type={type||"text"} id="first_name"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
           placeholder={placeholder} onChange={onChange} />
</div>)
}

export default Auth;