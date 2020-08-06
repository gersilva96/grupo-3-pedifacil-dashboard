import React from 'react';

//Componentes y métodos de Material UI
import { Box, Typography, Divider } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//CSS propio
import './List.scss';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Nunito',
        h5: {
            fontWeight: 700
        }
    }
});

const List = ({ title, list, thead }) => {
    return (
        <div className="col-12 col-xl-6 mb-5">
            <Box boxShadow={3} className="card">
                <ThemeProvider theme={theme}>
                    <Typography variant="h5" component="h3">{title}</Typography>
                </ThemeProvider>
                <Divider variant="fullWidth" className="my-3" />
                <table>
                    <thead>
                        <tr>
                            {thead.map(name => (
                                <th key={name}>{name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((row, i) => (
                            <tr key={i}>
                                {Object.keys(row).map((key, j) => <td key={j}>{row[key]}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        </div>
    );
};

export default List;