import React, { useState, useEffect, Fragment } from 'react';

//Componentes propios
import Total from '../../Total/Total';
import List from '../../List/List';

const Home = () => {
    const [soldProducts, setSoldProducts] = useState("Cargando...");
    const [generatedOrders, setGeneratedOrders] = useState("Cargando...");
    const [commodityTotal, setCommodityTotal] = useState("Cargando...");
    const [sellersTotal, setSellersTotal] = useState("Cargando...");
    const [lastProducts, setLastProducts] = useState([]);
    const [userRoles, setUserRoles] = useState([]);

    const apiCall = async (url, consequence) => {
        const result = await fetch(url);
        const data = await result.json();
        consequence(data);
    };

    useEffect(() => {
        document.title = "Inicio | Dashboard Pedí Fácil";

        apiCall(`http://${process.env.REACT_APP_HOST}:3001/api/v1/orders/total`, result => {
            setGeneratedOrders(result.data);
        });

        apiCall(`http://${process.env.REACT_APP_HOST}:3001/api/v1/products`, result => {
            setSoldProducts(result.data.sold);
        });

        apiCall(`http://${process.env.REACT_APP_HOST}:3001/api/v1/products/commodities/total`, result => {
            setCommodityTotal(result.data.total);
        });

        apiCall(`http://${process.env.REACT_APP_HOST}:3001/api/v1/users`, result => {
            setSellersTotal(result.data.sellers.length);
            setUserRoles(result.data.countByRole);
        });

        apiCall(`http://${process.env.REACT_APP_HOST}:3001/api/v1/products/recents`, result => {
            setLastProducts(result.data.products);
        });

    }, []);     //Al tener como segundo parámetro un array vacío, sólo se ejecuta al montarse, similar a componentDidMount()

    return (
        <Fragment>
            <div className="row">
                <Total title="Productos vendidos" total={soldProducts} />
                <Total title="Órdenes generadas" total={generatedOrders} />
                <Total title="Total de mercadería" total={commodityTotal} />
                <Total title="Cantidad de vendedores" total={sellersTotal} />
            </div>
            <div className="row">
                <List title="Últimos productos cargados" list={lastProducts} thead={["Producto", "Stock", "Precio"]} />
                <List title="Roles de usuario" list={userRoles} thead={["Rol", "Cantidad"]} />
            </div>
        </Fragment>
    );
};

export default Home;