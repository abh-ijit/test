import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Prodcut from './Prodcut'
import SingleImages from './SingleImages'


const ProductRouting = () => {
  return (
    <>
    <Router>

        <Routes>
            <Route path='/' element={<Prodcut />}/>
            <Route path='/products/:id' element={<SingleImages />} />
        </Routes>
    </Router>
    </>
  )
}

export default ProductRouting