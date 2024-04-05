import {useState, useEffect} from 'react';

function LastProductInDb () {
    const [product, setLastProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => {
            let product = data.products.pop()
            setLastProduct(product)
        })
    }, [])


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:3001/images/products/" + product?.image} style={{width: 40 +'rem'}} alt=" Star Wars - Mandalorian "></img>
                    </div>
                    <h3>{product?.name}</h3>
                    <p>{product?.large_description}</p>
                    <a className="btn btn-primary" rel="nofollow" href={product?.detailUrl}>Ver Detalle</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
