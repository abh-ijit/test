import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../Style/Product.css"

const Prodcut = () => {
    const [edata, setEdata] = useState([])
    const [loading, setLoading] = useState(true)
    const imgPerRow = 4
    const [loadImage, setLoadImage] = useState(imgPerRow)
    const handleMoreImg =(()=>{
        setLoadImage(loadImage+imgPerRow)
    })



    const url = "https://dummyjson.com"

    const getdata = async () => {
        try {
            const response = await axios.get(`${url}/products`)
            console.log(response)
            setEdata(response.data?.products)
            setLoading(false)
        } catch (error) {
            console.log(`error${error}`)

        }
    }
    useEffect(() => {
        getdata();
    }, [])

    if (loading) {
        return (
            <>
                <h2 className='loading-text'>Loading.....</h2>
            </>
        )
    }

    return (

        <>

            <h1 className='product-heading text-center  mt-3'>Products Page</h1>
            <div className="container">
                <div className="row">
                    {
                        edata?.slice(0,loadImage)?.map((myproduct, index) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-4 py-5">
                                        <div className="card m-auto p overflow-hidden shadow " key={index} style={{ width: "20rem" }}>
                                            <img src={myproduct.thumbnail} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title fs-3"><span></span>{myproduct.brand}</h5>
                                                <h4 className="card-title text-success"><span className='text-danger'>Price-</span>{myproduct.price}</h4>
                                                <h2>{}</h2>
                                                <Link to={`/products/${myproduct.id}`} className="btn btn-primary">See More</Link>
                                            </div>
                                        </div>
                                    </div>
                            
                                </>
                            )
                        })
                    }
                    {loadImage < edata?.length && (
                        <button className='btn btn-primary' onClick={handleMoreImg}>
                        Load More
                        </button>
                    )}
                    
                </div>
            </div>
        </>
    )
}

export default Prodcut