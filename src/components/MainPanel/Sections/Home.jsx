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

        apiCall("http://localhost:3001/api/v1/orders/total", data => {
            setGeneratedOrders(data);
        });

        apiCall("http://localhost:3001/api/v1/products", data => {
            setSoldProducts(data.sold);
        });

        apiCall("http://localhost:3001/api/v1/products/commodities/total", data => {
            setCommodityTotal(data);
        });

        apiCall("http://localhost:3001/api/v1/users", data => {
            setSellersTotal(data.sellers.length);
            setUserRoles(data.countByRole);
        });

        apiCall("http://localhost:3001/api/v1/products/recents", data => {
            setLastProducts(data);
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