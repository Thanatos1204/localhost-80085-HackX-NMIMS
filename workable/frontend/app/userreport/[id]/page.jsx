'use client'

import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useParams } from "next/navigation";




const Userreport = () => {
    const [apiData, setApiData] = useState([]);
    const genAI = new GoogleGenerativeAI(
        "AIzaSyC3Ps3LC-0phb3Xk2shMp_DdeWuMtpG9Jc"
      );
      const params=useParams();



      const fetchData = async () => {
        console.log('Hello')
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
   
        const prompt = `summary of image in point wise`;

        const result = await model.generateContent([prompt,{inlineData: {data: imgDataInBase64, mimeType: 'image/jpeg'}}]);
        const response = await result.response;
        const text = response.text();
        setApiData(text);
        
        console.log(apiData)
      };
    // useEffect(async ()=>{
    //     // await fetchData();
    //     // console.log(apiData);
      
    // })

    return (<>
         <div className="border-2 border-blue-600 p-5 w-24 h-32">
         <p>{apiData}</p>
         </div>
         
        </>
        
    );
};

export default Userreport;