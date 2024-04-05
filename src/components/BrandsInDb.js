import {useState, useEffect} from 'react';

function BrandsInDb() {

  const [brands, setBrands] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3001/api/brands')
      .then(response => response.json())
      .then(data => {
          setBrands(data.data)
      })
  }, [])


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Marcas disponibles
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {brands.map(brand => {
            return(
              <div key={brand?.brands.id} className="col-lg-6 mb-4">
              <div className="card bg-primary text-white shadow">
                <div className="card-body">{brand.brands.name} [{brand.totalProducts} productos disponibles]</div>
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
