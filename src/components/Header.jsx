import { useState } from "react"
import { NavLink } from "react-router-dom"


function Header(){
  const [open,setOpen] = useState(false)
  //menubtn
  const menubtn = ()=>{
    setOpen(true)
  }
  //closebtn
  const closebtn =()=>{
    setOpen(false)
  }
return <div className="sm:flex p-[10px] bg-white py-5 text-black justify-between ">
    <h1 className="ml-[70px] sm:ml-0 font-bold text-2xl sm:text-4xl"><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Hormuud_logo.png/220px-Hormuud_logo.png"></img></h1>
    
    
    <div style={{display:open==true ? "block":""}} className="">
    <i style={{display:open==true ? "block":""}} onClick ={closebtn} className="fa-solid fa-x  hidden  absolute left-3 top-7 text-4xl"></i>
    <i  style={{display:open == true ? "none" :""}} onClick={menubtn} className="  text-4xl fa-solid fa-bars sm:hidden absolute left-3 top-7 mt-5"></i>
   
    {/* <div style={{display:open == true ? "block" :""}}className="sm:bg-white bg-black  sm:h-0 h-[300px]"> */}
    <ul style={{display:open == true ? "block" :""}} className=" hidden h-screen w-full p-4 sm:bg-white bg-black sm:flex sm:flex-row flex-col mr-[200px] justify-center list-none gap-6 mt-10 sm:mt-4 sm:gap-8  sm:text-black text-white  text-2xl font-bold ">
      <NavLink to="/home"><li className="text-green-700 sm:text-black">Home</li></NavLink>
      <NavLink to="/personal"><li className="mt-2 sm:mt-0">Personal</li></NavLink>
      <li className="mt-2 sm:mt-0">Business</li>
      <li className="mt-2 sm:mt-0">Who We Are</li>
      <li className="mt-2 sm:mt-0">Media</li>
      <li className="mt-2 sm:mt-0">Contact us</li>
   
      </ul>
      </div>
      {/* </div> */}
      <div  className=" hidden  sm:flex-row  justify-start sm:flex  mr-[-100px] mt-4 text-3xl">
      <i className="fa fa-heart" aria-hidden="true"></i>
      </div>
      <div  className="  sm:flex-row  justify-start sm:flex flex-col sm:mt-3 absolute right-3 top-7 mt-4  text-4xl sm:text-3xl">
      <i className="fa fa-shopping-bag" aria-hidden="true"></i>
      </div>
  </div>


}
export default Header