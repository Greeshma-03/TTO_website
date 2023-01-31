import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const navigate = useNavigate();

  const onsubmit=()=>{
        navigate("/register");
        window.location.reload(false);

  } ;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Technology Catalogue
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Button color="inherit" onClick={onsubmit}>
            Patent
          </Button>
          <Button color="inherit" onClick={()=> navigate("/login")}>
            Publications
          </Button>
          <Button color="inherit" onClick={()=> navigate("/login")}>
            IIIT-H Canvas
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
