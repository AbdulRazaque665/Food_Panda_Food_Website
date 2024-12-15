import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/logo.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [auth, setAuth] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const userData = localStorage?.getItem("user");
  const user = JSON.parse(userData);
  useEffect(() => {
    if (user) {
      setAuth(true);
    }
  }, [user]);

  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          className="mx-24 max-sm:mx-0 max-md:mx-0 flex justify-between h-8"
        >
          <div>
            <img src={Logo} className="w-40" alt="" />
          </div>

          {!auth ? (
            <div>
              <button
                onClick={() => navigate("/")}
                className="bg-transparent px-3 py-1 text-black border hover:scale-110 transition-all border-black rounded-lg text-md me-5"
              >
                Log In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-pink-500 hover:bg-pink-700 hover:scale-110 transition-all px-3 py-1 text-white  rounded-lg text-md"
              >
                Sign Up
              </button>
            </div>
          ) : (
            auth && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => {
                        handleCloseUserMenu();
                        if (setting === "Logout") {
                          localStorage.removeItem("user");
                          setAuth(false);
                          navigate("/signup");
                        } else if (setting === "Profile") {
                          navigate("/profile");
                        }
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
