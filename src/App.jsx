import axios from "axios";
import { Tour } from "./Tour";
import React, { useEffect, useState } from 'react'
function App() {

  const [tour, setTour] = useState([])
  const [error, setError] = useState("")
  const handleDelete = (id) => {
    setTour(tour.filter((item) => item.id !== id));
   
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://www.course-api.com/react-tours-project")
        .then((res) => setTour(res.data))
        .catch((err) => setError(err.message))

    }
    getData();
    console.log(tour)
  }, [])
  
  return (
    <>
     
     

      <Tour title={"Tours"} description={" This application is a simple React-based tours gallery that displays a collection of tours fetched from an external API. Each tour card includes an image, description, price, and a feature to toggle long descriptions. Users can also delete tours from the list with a single click."}
      tour={tour} error={error} onDelete={handleDelete}> </Tour >
      
      <p className="text-red-600 text-[30px] semibold text-center ">{tour.length == 0 ? "All Tours have been deleted ! " : ""} </p>
    </>
  )
}

export default App
