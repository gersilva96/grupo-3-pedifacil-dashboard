import React from 'react';

//Componentes de Material UI
import { Box, Divider, Typography } from '@material-ui/core';

//CSS propio
import './Total.scss';

const Total = ({ title, total }) => {
    const getId = (value) => {
        if (value.toString().length >= 16) {
            return "text";
        } else if (value.toString().length > 10 && value.toString.length < 16) {
            return "large";
        } else {
            return "";
        }
    };

    return (
        <div className="col-12 col-md-6 col-xl-3 mb-5">
            <Box boxShadow={3} className="total-card">
                <Typography variant="h5" component="h3">{title}</Typography>
                <Divider variant="fullWidth" />
                <span id={getId(total)}>{total}</span>
            </Box>
        </div>
    );
};

export default Total;