import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Card, CardContent, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"
import { Container, ListItemIcon } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import GrillaEquipos from "./components/GrillaEquipos";
import dataEquipos from "../../data/equipos"

const MainPage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const onMenuIconClick = () => {
        setDrawerOpen(true)
    }

    const onModalOpenClick = () => {
        setModalOpen(true)
    }

    const onMenuClose = () => {
        setDrawerOpen(false)
    }

    const onModalClose = () => {
        setModalOpen(false)
    }

    return <Box>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={ onMenuIconClick }
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Equipos
                </Typography>

            </Toolbar>
        </AppBar>
        <Drawer variant="temporary"
            anchor="left"
            onClose={ onMenuClose }
            open={ drawerOpen }>
            <List>
                <ListItem>
                    <ListItemText primary={"Menu 1"} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Menu 1"} />
                </ListItem>
            </List>
        </Drawer>
        <Container sx={ { mt : 2 }}>
            <Button variant="contained"
                sx={ { mb : 2 } }
                onClick={ onModalOpenClick }>
                +
            </Button>
            <GrillaEquipos listaEquipos={ dataEquipos }/>
        </Container>

        { /* Modal */  }
        <Dialog
            open={ modalOpen }
            onClose={ onModalClose }>
            <DialogTitle >
                Nuevo Equipo
            </DialogTitle>
            <DialogContent>
                Aca ira el formulario
            </DialogContent>
            <DialogActions>
                <Button variant="contained">
                    Guardar
                </Button>
                <Button variant="contained">
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    </Box>
}

export default MainPage