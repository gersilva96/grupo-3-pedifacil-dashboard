import React, { useState, useEffect, Fragment } from 'react';

//Componentes propios
import Total from '../../Total/Total';
import List from '../../List/List';

const Products = () => {
    const [productsTotal, setProductsTotal] = useState("Cargando...");
    const [productsStock, setProductsStock] = useState("Cargando...");
    const [productsSold, setProductsSold] = useState("Cargando...");
    const [mostSold, setMostSold] = useState("Cargando...");
    const [topTen, setTopTen] = useState([]);
    const [productsList, setProductsList] = useState([]);

    const apiCall = async (url, consequence) => {
        const result = await fetch(url);
        const data = await result.json();
        consequence(data);
    };

    useEffect(() => {
        document.title = "Productos | Dashboard Pedí Fácil";

        apiCall(`http://${process.env.REACT_APP_HOST}:3001/api/v1/products`, result => {
            setProductsTotal(result.data.total);
            setProductsStock(result.data.withStock);
            setProductsSold(result.data.sold);
            setMostSold(result.data.mostSold);
            setTopTen(result.data.topTen);
            const list = [];
            result.data.products.forEach(product => {
                list.push({
                    name: product.name,
                    stock: product.stock,
                    price: product.price
                });
            });
            setProductsList(list);
        });

    }, []);     //Al tener como segundo parámetro un array vacío, sólo se ejecuta al montarse, similar a componentDidMount()

    return (
        <Fragment>
            <div className="row">
                <Total title="Total de productos" total={productsTotal} />
                <Total title="Productos con stock" total={productsStock} />
                <Total title="Productos vendidos" total={productsSold} />
                <Total title="El más vendido" total={mostSold} />
            </div>
            <div className="row">
                <List title="Los 10 más vendidos" list={topTen} thead={["Producto", "Vendidos"]} />
                <List title="Listado de productos" list={productsList} thead={["Producto", "Stock", "Precio"]} />
            </div>
        </Fragment>
    );
};

export default Products;