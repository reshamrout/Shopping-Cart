import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData(){

    try {
      
      setLoading(true);
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
      
    } 
    catch (error) {

      console.log("Error In API Call ");
      console.log(error)
      
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="mt-[60px] flex justify-center h-full w-full">
      {
        loading ? (<Spinner/>):
        (
          posts.length > 0 ? 
          (
            <div className="grid xs:grid-col-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto p-2 space-x-5 space-y-10">
              {
                posts.map((post)=>(
                  <Card key={post.id} post={post}/>
                ))
              }
            </div>
          ):
          (<div>No Items Found</div>)
        )

      }
    </div>
  )
};

export default Home;
