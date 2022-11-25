import axios from "axios";

const config = {
    headers:{
        authorization : `Bearer ${localStorage.getItem("access_token")}`
    }
  };
  
export const POST = (url,data) =>axios.post(`http://localhost:5000${url}`,data,config);
export const GET = (url) =>axios(`http://localhost:5000${url}`,config);
export const DELETE = (url) =>axios.delete(`http://localhost:5000${url}`,config);
export const PUT = (url,data) =>axios.put(`http://localhost:5000${url}`,data,config);


