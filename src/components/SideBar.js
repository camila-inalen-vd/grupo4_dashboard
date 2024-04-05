import React from 'react';
import image from '../assets/images/logopng.png';
import ContentWrapper from './ContentWrapper';
import BrandsInDb from './BrandsInDb';
import LastProductInDb from './LastProductInDb';
import ContentRowProducts from './ContentRowProducts';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar - Barra de lado (Izquierda) -->*/}
            <ul className="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Logo -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="ShoesMarket"/>
                    </div>
                </a>

                {/*<!-- Divider HR -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - ShoesMarket</span></Link>
                </li>

                {/*<!-- Divider HR -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Encabezado -->*/}
                <div className="sidebar-heading">Tablas</div>

                {/*<!-- Nav Item - Marcas -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/BrandsInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Marcas</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Ultimo producto-->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto</span></Link>
                </li>

                {/*<!-- Nav Item - General -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowProducts">
                        <i className="fas fa-fw fa-table"></i>
                        <span>General</span></Link>
                </li>


                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/BrandsInDb">
                    <BrandsInDb />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentRowProducts">
                    <ContentRowProducts  />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;