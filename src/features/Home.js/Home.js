import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../server-api/api";
// import Footer from "../Footer/Footer";
// import Navigation from "../Navigation/Navigation";
import Products from "../Shared/Products";
import Spinner from "../Shared/Spinner/Spinner";

function Home() {
  const showStatus = useSelector((state) => state.spinner.value)
  const [hide, setHide] = useState("show");
   
  /* Hide the spinner after 5 sec. */
    
  useEffect(() => {
    setTimeout(() => {
      setHide(showStatus === 0 ?"hide":showStatus)
    },2000)
    
  },[showStatus])

  const [allProduct, setProduct] = useState([]);
  const product = async () => {
    const response = await api.get("products");
    return response.data;
  };

  useEffect(() => {
    product().then((data) => {
      // console.log(data);
      setProduct(data);
      // console.log(allProduct);
    });
    // console.log(getAllProduct());
  },[]);


  return (
    <>
     
      <div className="container-fluid pt-3">
      <Spinner hide={hide}/>
        <div className="row justify-content-center">
          {allProduct.map((itm, index) => (
            <Products key={itm.id} items={itm} className=" d-flex py-5" />
          ))}
         
        </div>
      </div>
      {/* <div className="Footer">
        <Footer />
      </div> */}
    </>
  );
}

export default Home;
