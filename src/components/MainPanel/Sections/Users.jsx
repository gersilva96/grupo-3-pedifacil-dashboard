import React, { useState, useEffect, Fragment } from 'react';

//Componentes propios
import Total from '../../Total/Total';
import List from '../../List/List';

const Users = () => {
    const [users, setUsers] = useState("Cargando...");
    const [buyers, setBuyers] = useState("Cargando...");
    const [sellers, setSellers] = useState("Cargando...");
    const [admins, setAdmins] = useState("Cargando...");
    const [buyersList, setBuyersList] = useState([]);
    const [sellersList, setSellersList] = useState([]);

    const apiCall = async (url, consequence) => {
        const result = await fetch(url);
        const data = await result.json();
        consequence(data);
    };

    useEffect(() => {
        document.title = "Usuarios | Dashboard Pedí Fácil";

        apiCall("http://localhost:3001/api/v1/users", data => {
            setUsers(data.count);
            setBuyers(data.buyers.length);
            setSellers(data.sellers.length);
            setAdmins(data.admins.length);
            setBuyersList(data.buyers);
            setSellersList(data.sellers);
        });
    }, []);     //Al tener como segundo parámetro un array vacío, sólo se ejecuta al montarse, similar a componentDidMount()

    return (
        <Fragment>
            <div className="row">
                <Total title="Total de usuarios" total={users} />
                <Total title="Compradores" total={buyers} />
                <Total title="Vendedores" total={sellers} />
                <Total title="Administradores" total={admins} />
            </div>
            <div className="row">
                <List title="Listado de compradores" list={buyersList} thead={["Nombre"]} />
                <List title="Listado de vendedores" list={sellersList} thead={["Negocio"]} />
            </div>
        </Fragment>
    );
};

export default Users;