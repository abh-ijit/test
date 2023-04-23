import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SingleImages = () => {
    const {id} =useParams;

    const [image,setImage] = useState([]);
    

    const url ="https://dummyjson.com"

    const singleImg = async () => {
        try {
            const response = await axios.get(`${url}/products/${id}`) 
            setImage(response?.data)
        } catch (error) {
            console.log(`error ${error}`)
            
        }
    } 

    useEffect(()=>{
        singleImg();
    },[])

    console.log(image);
    
  return (
    <>
    <div className="container">
        <div className="row">
            {
                image.map((myimage ,index)=>{
                    return(

                        <div className="col" key={index}>
                            <img src={myimage[1]} alt='..' />
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default SingleImages