import { useState } from "react";

const ConditonaionalRendering = () => {
    
// conditional rendering with switch  

    // let role = "user"

    // switch (role) {
    //     case "admin":
    //         return <h1>Admin</h1>
    //     case "user":
    //         return <h1>User</h1>
    //     case "guest":
    //         return <h1>Guest</h1>
    //     default:
    //         return <h1>Unknown</h1>
    // }
   
 // conditional rendering with if else  and terniary operater
    
//    const [isLogedIn,setIsLogedIn] = useState(false);



//    if (isLogedIn){
//     return <div className="flex flex-col items-center justify-center h-screen"  >
//         <h1         className="text-2xl font-bold mb-4" >Welcome Back</h1>
//         <button   
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           onClick={()=>{
//             setIsLogedIn(!isLogedIn);
//           }}
//         >{isLogedIn ? "log out" : "log in"}</button> 
//     </div> 
//    }else{
//        return <div className="flex flex-col items-center justify-center h-screen" >
//         <h1 className="text-2xl font-bold mb-4" >Please login</h1>
//         <button
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//         onClick={()=>{
//             setIsLogedIn(!isLogedIn);
//           }}
//         >{isLogedIn ? "log out" : "log in"}</button>
//        </div>   
//    }

// rendering text from input 

// const [name,setName] = useState("");

// const nameHandler = (e)=>{
//     setName(e.target.value);
// }

// return (

//     <div className="flex justify-center items-center h-screen flex-col">
//         <input onChange={nameHandler} type="text" placeholder="Enter your name" className="border border-black p-2 rounded-lg  " />
//          <h1 className="mt-5 font-bold">your name is {name || "unknown"}</h1>
//     </div>
// )

// List and looping 

// const fruits = [
//     {id: 1 , name : "apple"},
//     {id: 2 , name : "banana"},
//     {id: 3 , name : "orange"},
//     {id: 4 , name : "strawbery"},
// ];
 
// return (
//     <div className="flex flex-col gap-3 justify-center items-center mt-6">
//         <h1>helllllo</h1>
//         <ul>
//             {fruits.map((fruit)=>(
//                  <li key={fruit.id}>{fruit.name}</li>
//             ))}
//         </ul>
//     </div>
// )

// filtering list 

const [serach, setSerach] = useState('');
const   fruits = ["apple","banana","grapes","orange",];
const filteredList = fruits.filter((item)=>( item.toLocaleLowerCase().includes(serach.toLocaleLowerCase())))

return (

    <div className="flex flex-col justify-center items-center mt-10">
        <input type="text" onChange={(e)=>setSerach(e.target.value)} className="border border-black" />
        <ul>
        {filteredList.map((item)=>(
            <li>{item}</li>
        ))}
    </ul>
     {filteredList.length === 0 && <p>no item found</p> }
    </div>
)


}

export default ConditonaionalRendering;