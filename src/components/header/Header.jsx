import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Video from "./Video";

const pages = ["Home", "Buy", "Sell", "Order", "Crop-Diseases", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "green" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div style={{ width: "200px" }}>
              <img
                src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-farm-circle-logo-vector-illustration-health-shape-summer-vector-png-image_12586449.png"
                alt="farm-logo"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: 55,
                  margin: 5,
                }}
              />
            </div>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", justifyContent: "end" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                src="cloudy.png"
                alt="farm-logo"
                style={{
                  cursor: "pointer",
                  width: "70px",
                  height: "70px",
                  borderRadius: 55,
                  margin: 5,
                }}
              />
            </Box>
          </Toolbar>
        </Container>

        {/* <Box>
        <img
          src="https://hbr.org/resources/images/article_assets/2021/08/Sep21_02_1176415931.jpg"
          alt=""
          style={{ width: "100%", height: "80vh" }}
        />
      </Box> */}
      </AppBar>
      <Video />
    </>
  );
}
export default Header;
