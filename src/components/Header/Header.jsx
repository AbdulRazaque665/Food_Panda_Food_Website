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
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PublicIcon from "@mui/icons-material/Public";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <AppBar
      position="static"
      style={{ backgroundColor: "white", zIndex: "4", position: "sticky" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className=" ">
          {/* Lg Nav */}
          <div className="max-md:flex max-sm:hidden flex justify-between h-8 mx-12 max-sm:mx-0 max-md:mx-0 w-full items-center">
            <div>
              <button onClick={() => navigate("/")}>
                <img src={Logo} className="w-40" alt="" />
              </button>
            </div>
            <div className="flex items-center">
              {/* Auth & Button */}
              <div>
                {!auth ? (
                  <div>
                    <button
                      onClick={() => navigate("/login")}
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
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  )
                )}
              </div>

              {/* Icons */}
              <div className="mx-4 ">
                <button
                  id="basic-button"
                  className="text-black flex items-center hover:bg-zinc-50 p-2 rounded-lg transition-all duration-300"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <PublicIcon  className="me-1 text-gray-600"/> English <ExpandMoreIcon className="text-pink-500 ms-1" />
                </button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>English</MenuItem>
                </Menu>
              </div>

              {/* Cart */}
              <div>
                <button className="hover:scale-110 transition-all hover:bg-zinc-50  p-2  rounded-full text-md duration-300">
                  <LocalMallOutlinedIcon className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* sm-nav */}
          <div className="hidden max-sm:flex justify-between h-8 w-full items-center">
            {/* auth & button */}
            <div>
              {!auth ? (
                <div>
                  <button
                    onClick={() => navigate("/signup")}
                    className="hover:scale-110 transition-all hover:bg-zinc-50  p-2  rounded-full text-md"
                  >
                    <PersonOutlineIcon className="text-black " />
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
            </div>
            {/* logo */}
            <div>
              <button onClick={() => navigate("/home")}>
                <img src={Logo} className="w-40" alt="" />
              </button>
            </div>
            {/* Cart */}
            <div>
              <button className="hover:scale-110 transition-all hover:bg-zinc-50  p-2  rounded-full text-md">
                <LocalMallOutlinedIcon className="text-black " />
              </button>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
