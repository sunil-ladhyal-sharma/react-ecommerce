import React, { useEffect, useState } from "react";
import api from "../../server-api/api";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Products from "../Shared/Products";

function Home() {
    const [allProduct, setProduct] = useState([]);
    const product = async () => {
         const response = await api.get("products");
         return response.data;
    }

    useEffect(() =>{
     
       product().then( (data) => {
            console.log(data);
            setProduct(data);
            console.log(allProduct);
        })
        // console.log(getAllProduct());
    }, []);

  return (
    <>

      <div>
        <Navigation />
      </div>
      <div className="row">
         
          {allProduct.map((itm) => (
            //    <li id={itm.id}>{itm.id}</li>
              <Products key={itm.id} items={itm} />
            //   console.log(itm);
          ))}
          {/* ///{allProduct} */}
        {/* {
            allProduct.map((item) => (
                <Products items={item}/>
            ))
        }     */}
{/* <Products items={allProduct} /> */}
      
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
