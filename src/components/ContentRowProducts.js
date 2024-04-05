import {useState, useEffect} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/*  <!-- Movies in DB -->  */



function ContentRowProducts(){

    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data)
        }) 
        
        fetch('http://localhost:3001/api/brands')
        .then(response => response.json())
        .then(data => {
            setBrands(data)
        })
    }, [])

    
    let stockQuantity = {
        title:'Productos en stock' ,
        color:'warning',
        cuantity: products?.totalStock,
        icon:'fa-check-circle'
    } 
    

    let totalBrands = {
        title:'Cantidad de marcas disponibles', 
        color:'success', 
        cuantity: brands?.count,
        icon:'fa-thumbs-up'
    }

    let productsInDb = {
        title: 'Productos en BD',
        color: 'primary', 
        cuantity: products?.count,
        icon: 'fa-clipboard-list'}
        
    let cartProps = [productsInDb, stockQuantity, totalBrands]; 

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;