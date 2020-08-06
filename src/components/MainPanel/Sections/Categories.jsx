import React, { useState, useEffect, Fragment } from 'react';

//Componentes propios
import Total from '../../Total/Total';
import List from '../../List/List';

const Categories = () => {
    const [total, setTotal] = useState("Cargando...");
    const [list, setList] = useState([]);

    const apiCall = async (url, consequence) => {
        const result = await fetch(url);
        const data = await result.json();
        consequence(data);
    };

    useEffect(() => {
        document.title = "Categorías | Dashboard Pedí Fácil";

        apiCall("http://localhost:3001/api/v1/products", data => {
            setTotal(data.countByCategory.length);
            setList(data.countByCategory);
        });
    }, []);     //Al tener como segundo parámetro un array vacío, sólo se ejecuta al montarse, similar a componentDidMount()

    return (
        <Fragment>
            <div className="row">
                <Total title="Total" total={total} />
                <List title="Listado de categorías" list={list} thead={["Categoría", "Productos"]} />
            </div>
        </Fragment>
    );
};

export default Categories;