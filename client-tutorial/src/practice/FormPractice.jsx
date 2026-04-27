import { useState } from "react"

const FormPractice = () => {
 
    const [form, setFormData] = useState({
        name:"",
        lastName:"",
        email:""
    });
         const [userName , setUserName] = useState("");
    const handleChange = (e)=>{
         setFormData({
            ...form,
            [e.target.name]:e.target.value
         });
    }


    return (
            <section className="flex flex-col justify-center items-center h-screen">
                        <form action="" className="flex flex-col gap-3 w-[170px]">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className="border border-black" />
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Enter your last name" className="border border-black"  />
            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email"className="border border-black "  />
            <button type="submit">Submit</button>
            <div>
                 <p>Name :  {form.name} {form.lastName}</p>
            <p>Email :  {form.email}</p>
            </div>
        </form>
            </section>
    )
}

export default FormPractice