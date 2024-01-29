import { IconButton, 
    Table, TableBody, TableCell, TableContainer, TableHead, 
    TableRow} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const TablaIntegrantes = (props) => {
    return <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Nombre
                    </TableCell>
                    <TableCell>
                        Código
                    </TableCell>
                    <TableCell>
                        Acciones
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    props.integrantes.map((integrante) => {
                        return <TableRow>
                            <TableCell>
                                { integrante.nombre }
                            </TableCell>
                            <TableCell>
                                { integrante.codigo }
                            </TableCell>
                            <TableCell>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    })
                }

                
            </TableBody>
        </Table>
    </TableContainer>
}

export default TablaIntegrantes