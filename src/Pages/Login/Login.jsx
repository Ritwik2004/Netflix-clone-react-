import React, { useState } from "react";
import logo from '../../assets/logo.png'
function Login(){
    const [signState,setSignState] = useState("Sign In")

    return(
        <div className="h-screen bg-gradient-to-b-from-[#0000007e] to-[#0000007e] bg-cover bg-no-repeat p-[20px] px-[8%]" style={{backgroundImage : "url('/background_banner.jpg')"}}>
            <img src={logo} alt="" className="w-[150px]" />
            <div className="w-full max-w-[450px] bg-black/75 rounded-[4px] p-[60px] m-auto">
                <h1 className="text-[32px] mb-[28px] font-medium">{signState}</h1>
                <form action="#">
                    {signState==='Sign Up'?<input className="w-full h-[50px] text-white my-[12px] mx-0 bg-[#333] border-0 outline-0 rounded-[4px] px-[20px] py-[16px] text-[16px] font-medium placeholder:text-[16px] placeholder:font-medium" type="text" placeholder="Enter Your Name"/>:<></>}
                    
                    <input className="w-full h-[50px] text-white my-[12px] mx-0 bg-[#333] border-0 outline-0 rounded-[4px] px-[20px] py-[16px] text-[16px] font-medium placeholder:text-[16px] placeholder:font-medium" type="email" placeholder="Enter Your Email"/>
                    <input className="w-full h-[50px] text-white my-[12px] mx-0 bg-[#333] border-0 outline-0 rounded-[4px] px-[20px] py-[16px] text-[16px] font-medium placeholder:text-[16px] placeholder:font-medium" type="password" placeholder="Enter Your Password"/>
                    <button className="w-full border-0 outline-0 p-4 bg-[#e50914] text-white rounded-md text-[16px] font-medium mt-5">{signState}</button>
                    <div className="flex items-center justify-between text-[#b3b3b3] text-[13px]">
                        <div className="flex gap-[5px] items-center">
                            <input className="w-[18px] h-[18px]" type="checkbox"/>
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help ?</p>
                    </div>
                </form>
                <div className="mt-[40px] text-[#727272]">
                    {signState==="Sign In"?<p>New to Netflix ? <span className="ml-[6px] text-white font-medium cursor-pointer" onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account ? <span className="ml-[6px] text-white font-medium cursor-pointer" onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
                </div>
            </div>
        </div>
    )
}

export default Login