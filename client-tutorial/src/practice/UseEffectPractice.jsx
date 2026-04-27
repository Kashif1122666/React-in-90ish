import { useEffect, useState } from "react";

const UseEffectPractice = ()=>{
    const [a, setA] = useState("");

    useEffect(()=>{
        setA("ali");
    },[]);

    return(
          <h1>
            hello this is the data {a}
          </h1>
    )
};

export default UseEffectPractice;