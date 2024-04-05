import {React ,useState, useEffect} from 'react';
import ChartRow from './ChartRow';


function Chart (){
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products)
        })
    }, [])

    let tableRowsData2 = [
        {
            Title: 'Billy Elliot ',
            Length: '123',
            Rating: '5',
            Categories: ['Drama','Comedia'],
            Awards: 2
        },
        {
            Title: 'Alicia en el país de las maravillas',
            Length: '142',
            Rating: '4.8',
            Categories: ['Drama','Acción','Comedia'],
            Awards: 3
        },
        
    ]

    let tableRowsData = [];
    
    products?.forEach(producto => {
        tableRowsData.push({
            Title: "ID:" +producto.id + " " + producto.name,
            Length: producto.brand.name,
            Rating: "$"+producto.price.toLocaleString('es-ES'),
            Categories: [producto.stock],
            Awards: producto.description
        })
    })
    
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Descripcion</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;