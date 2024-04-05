import React from 'react';
import LastProductInDb from './LastProductInDb';
import BrandsInDb from './BrandsInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <BrandsInDb />

        </div>
    )
}

export default ContentRowCenter;