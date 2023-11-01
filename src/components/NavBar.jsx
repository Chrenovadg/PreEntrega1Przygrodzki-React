import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Logo from '../assets/Logo'
import CartWidget from './CartWidget/CartWidget';

function linkClick(){
    console.log('Boton Clickeado')
  }
  

const NavBar = () => {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#f941a2' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
    
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Logo/>
              </Typography>
    
              <Button color="inherit" onClick={linkClick} className='btnNav'> Sabores </Button>
              <Button color="inherit" onClick={linkClick} className='btnNav'> Shop </Button>
              <Button color="inherit" onClick={linkClick} className='btnNav'> Contacto </Button>
              
              <CartWidget/>
    
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default NavBar