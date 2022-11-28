import React, { useContext } from "react";
import Products from "./Products/Products";
import { useQuery } from "@tanstack/react-query";
import { GET, POST } from "../../Utilities/RequestObjects";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import LoadingRound from "../../Shared/LoadingRound/LoadingRound";
import Loading from "../../Shared/Loading/Loading";

const Category = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products", user?.uid],
    queryFn: () => GET(`/products/${params.id}?uid=${user?.uid}`),
  });
  // console.log((new Date()).toDateString(),);
  // console.log(data);
  const handleReportSubmit = (e) =>{
    e.preventDefault();
    POST('/report',{report:e.target.report.value,
      senderName:user.displayName,
      senderEmail:user.email,
      time:(new Date()).toLocaleTimeString()
    })
    .then(res=>{
        if(res.status===200){
            alert('report submitted');
            e.target.reset();
        }
    })
    .catch(err=>{
        console.log(err);
    })
  }

  if(isLoading){
    return <Loading/>
  }

  return (
    <section>
      <div className="" style={{background:"url('https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1060&t=st=1669648274~exp=1669648874~hmac=dd32248ae2b5d8041decece90e484f590bc493f44cdebe6866a70b9295ccc027')"}}>
        <div className="container flex flex-col px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-xl font-bold text-left -mt-10 mb-10 text-black">
            Home{">"}
            {data?.data[0].category}
          </h1>
          <h1 className="text-5xl text-left font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
            {data?.data[0].category}
          </h1>
        </div>
      </div>
      <div className=" w-full lg:w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 glass">
        <Products data={data} refetch={refetch}></Products>
      </div>
      <div>

        <div
          className="w-full dark:bg-gray-500"
        >
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
              Report to admin
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
              Find out about events and other news
            </p>
            <form className="flex flex-row" onSubmit={handleReportSubmit}>
              <textarea
                type="text"
                placeholder="Hello! I'm.."
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
                name="report"
              />
              <button
                type="submit"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
              >
                send
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Category;
