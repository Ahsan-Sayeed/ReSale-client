import axios from "axios";

const config = {
    headers:{
        authorization : localStorage.getItem("accessToken")
    }
  };
  
export const POST = (url,data) =>axios.post(`https://re-sale.vercel.app${url}`,data,config);
export const GET = (url) =>axios(`https://re-sale.vercel.app${url}`,config);
export const DELETE = (url) =>axios.delete(`https://re-sale.vercel.app${url}`,config);
export const PUT = (url,data) =>axios.put(`https://re-sale.vercel.app${url}`,data,config);


