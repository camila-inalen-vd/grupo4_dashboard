import {useState, useEffect} from 'react';

function BrandsInDb() {

  const [brands, setBrands] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3001/api/brands')
      .then(response => response.json())
      .then(data => {
          setBrands(data.brands)
      })
  })


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Marcas en BD
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {brands.map(brand => {
            return(
              <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{brand.name}</div>
              </div>
            </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandsInDb;
