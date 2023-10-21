import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {
    createTheme,
    ThemeProvider,
  } from "@material-ui/core/styles";
  import { makeStyles } from '@mui/styles';
  //import { useHistory } from "react-router-dom";
  import { useNavigate } from 'react-router-dom';
  import { CryptoState } from "../CryptoContext";
  import { blue } from '@mui/material/colors';



  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      type: "dark",
    },
  });
  
  
  function Header() {
    const classes = useStyles();
    const navigate=useNavigate();
    const { currency, setCurrency } = CryptoState();
    console.log(currency);
    
    return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="primary" position="static">
          <Container>
            <Toolbar>
              <Typography onClick={() => navigate(`/`)}
              variant="h6"
              className={classes.title}>
                CryptoKnight
              </Typography>

              <Select
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            </Toolbar>
          </Container>
        </AppBar>
        </ThemeProvider>
      
    );
  }
  
  export default Header;