import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material/Grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BorderClearIcon from "@mui/icons-material/BorderClear";
import SearchIcon from "@mui/icons-material/Search";

// Import Swiper styles
import "swiper/css";

type Props = {};
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar({}: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [open, setOpen] = React.useState<boolean>(false);

  const [openShows, setOpenShows] = React.useState<boolean>(false);

  const [openLive, setOpenLive] = React.useState<boolean>(false);

  const [openLocal, setOpenLocal] = React.useState<boolean>(false);

  const [openBorder, setOpenBorder] = React.useState<boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleNewsOpen = (state: boolean) => {
    setOpen(!state);
  };
  const handleShowsOpen = (state: boolean) => {
    setOpenShows(!state);
  };
  const handleLiveOpen = (state: boolean) => {
    setOpenLive(!state);
  };
  const handleLocalOpen = (state: boolean) => {
    setOpenLocal(!state);
  };
  const handleBorderOpen = (state: boolean) => {
    setOpenBorder(!state);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#101010" }}>
        <Container
          maxWidth="xl"
          style={{
            backgroundColor: "#101010",
            color: "#F2F2F2",
            padding: "25px 20px 10px 20px",
            textAlign: "center",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={7}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  style={{ fontSize: "13.12px", fontFamily: "sans-serif" }}
                >
                  <SwiperSlide>Verdict In Giuliani Trial</SwiperSlide>
                  <SwiperSlide>|</SwiperSlide>
                  <SwiperSlide> Matthew Perry's Cause of Death</SwiperSlide>
                  <SwiperSlide>|</SwiperSlide>
                  <SwiperSlide>East Coast Storms</SwiperSlide>
                  <SwiperSlide>|</SwiperSlide>
                  <SwiperSlide> "48 Hours" Preview</SwiperSlide>
                  <SwiperSlide>|</SwiperSlide>
                  <SwiperSlide>CBS News Live</SwiperSlide>
                  <SwiperSlide>|</SwiperSlide>
                  <SwiperSlide>Managing Your Money</SwiperSlide>
                  <SwiperSlide>|</SwiperSlide>
                  <SwiperSlide> Newsletters</SwiperSlide>
                </Swiper>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Box>
        </Container>
      </AppBar>
      <AppBar position="static" style={{ backgroundColor: "#101010" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              to="/"
              style={{
                // marginBottom: 1,
                textDecoration: "none",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "30px",
                color: "inherit",
                display: "flex",
                alignItems: "start",
                justifyContent: "flex-start",
              }}
            >
              <RemoveRedEyeIcon sx={{ mr: 1, fontSize: "30px" }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                CBSNEWS
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">NEWS</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">SHOWS</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <div
                      style={{
                        borderRadius: "50%",
                        border: "1px solid red",
                        color: "red",
                        backgroundColor: "red",
                        display: "inline",
                      }}
                    >
                      .
                    </div>
                    LIVE
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                onClick={(e) => handleNewsOpen(open)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  fontSize: "13px",
                }}
              >
                NEWS <KeyboardArrowDownIcon />
              </Button>

              <Button
                onClick={(e) => handleShowsOpen(openShows)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  fontSize: "13px",
                }}
              >
                SHOWS <KeyboardArrowDownIcon />
              </Button>

              <Button
                onClick={(e) => handleLiveOpen(openLive)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  fontSize: "13px",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    border: "1px solid red",
                    width: "8px",
                    height: "8px",
                    color: "red",
                    backgroundColor: "red",
                    display: "inline",
                    marginRight: "5px",
                  }}
                ></div>
                LIVE <KeyboardArrowDownIcon />
              </Button>

              <Button
                onClick={(e) => handleLocalOpen(openLocal)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  fontSize: "13px",
                }}
              >
                LOCAL <KeyboardArrowDownIcon />
              </Button>

              <Button
                onClick={(e) => handleBorderOpen(openBorder)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  fontSize: "13px",
                }}
              >
                <BorderClearIcon style={{ color: "white" }} />
              </Button>
              <Box sx={{ my: 3, display: "flex" }}>
                <input
                  type="text"
                  style={{
                    backgroundColor: "grey",
                    border: "1px solid white",
                    height: "25px",
                  }}
                />
                <SearchIcon
                  style={{
                    color: "white",
                    marginLeft: "5px",
                    fontSize: "25px",
                  }}
                />
              </Box>
            </Box>
          </Toolbar>
          {open && (
            <ul style={{ listStyle: "none", width: "700px", padding: "20px" }}>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>US</h5>
                <p>
                  Hostages mistakenly killed in Gaza were carrying white flag,
                  IDF says
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>World</h5>
                <p>
                  U.S. says its destroyer shot down 14 drones in Red Sea
                  launched from Yemen
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>Politics</h5>
                <p>
                  Meadows' bid to move RICO case to federal court met with
                  skepticism by judges
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>Entertainment</h5>
                <p>
                  Alex Jones proposes $55 million legal debt settlement to Sandy
                  Hook families
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>HealthWatch</h5>
                <p>
                  How a Texas mom became a witness in her own death
                  investigation
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>MoneyWatch</h5>
                <p>
                  First cardinal prosecuted in Vatican's criminal court
                  convicted
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>CBS Village</h5>
                <p>Jeff Roe, main strategist for DeSantis super PAC, resigns</p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>Technology</h5>
                <p>
                  Storm system could cause heavy rain, damaging winds along East
                  Coast
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>Science</h5>
                <p>
                  NBA legend Kareem Abdul-Jabbar breaks hip in fall at Los
                  Angeles concert
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>Crime</h5>
                <p style={{ color: "#101010" }}>
                  {" "}
                  NBA legend Kareem Abdul-Jabbar breaks hip in fall at Los
                  Angeles concert
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>Sports</h5>
                <p style={{ color: "#101010" }}>
                  {" "}
                  NBA legend Kareem Abdul-Jabbar breaks hip in fall at Los
                  Angeles concert
                </p>
              </li>{" "}
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5>Essentials</h5>
                <p style={{ color: "#101010" }}>
                  {" "}
                  NBA legend Kareem Abdul-Jabbar breaks hip in fall at Los
                  Angeles concert
                </p>
              </li>
            </ul>
          )}
          {openShows && (
            <Grid
              container
              spacing={2}
              style={{ paddingLeft: "120px", width: "550px" }}
            >
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/show/cbs-mornings/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/show/evening-news/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/show/60-minutes/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/cbs-mornings-saturday/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/face-the-nation/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/sunday-morning/logo-square-32.svg
                  "
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/48-hours/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/cbs-reports/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/cbs-news-mornings/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/show/america-decides/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/prime-time-with-john-dickerson/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/cbs-weekender/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/the-takeout/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/uplift/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/eye-on-america/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/the-dish/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/show/here-comes-the-sun/logo-square-32.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/show/person-to-person/logo-square-32.svg"
                  alt=""
                />
              </Grid>
            </Grid>
          )}
          {openLive && (
            <Grid
              container
              spacing={2}
              style={{ paddingLeft: "150px", width: "560px" }}
            >
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/live_icons/flyout-live-cbsnews@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/live_icons/flyout-live-sanfrancisco@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/live_icons/flyout-live-baltimore@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/live_icons/flyout-live-boston@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/live_icons/flyout-live-chicago@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/live_icons/flyout-live-colorado@1x.png
                  "
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/live_icons/flyout-live-detroit@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/live_icons/flyout-live-miami@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/live_icons/flyout-live-newyork@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/live_icons/flyout-live-philadelphia@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/live_icons/flyout-live-pittsburgh@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/live_icons/flyout-live-sacramento@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="	https://www.cbsnews.com/assets/live_icons/flyout-live-texas@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/live_icons/flyout-live-inside-edition@1x.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://www.cbsnews.com/assets/live_icons/flyout-live-mixible@1x.png"
                  alt=""
                />
              </Grid>
            </Grid>
          )}
          {openLocal && (
            <ul
              style={{
                listStyle: "none",
                width: "700px",
                paddingLeft: "410px",
                fontSize: "15px",
                fontFamily: "monospace",
              }}
            >
              <li> Baltimore</li>
              <li>Bay Area</li>
              <li>Boston</li>
              <li>Chicago</li>
              <li>Colorado</li>
              <li>Detroit</li>
              <li>Los Angeles</li>
              <li>Miami</li>
              <li>Minnesota</li>
              <li>New York</li>
              <li>Philadelphia</li>
              <li>Pittsburgh</li>
              <li>Sacramento</li>
              <li>Texas</li>
            </ul>
          )}
          {openBorder && (
            <ul
              style={{
                listStyle: "none",
                width: "700px",
                paddingLeft: "410px",
                fontSize: "17px",
                fontFamily: "monospace",
                display: "flex",
              }}
            >
              <div>
                <li> Latest</li>
                <li>Video</li>
                <li>Photos</li>
                <li>Podcasts</li>
                <li>In Depth</li>
                <li>Local</li>
                <li> A Moment With…</li>
                <li>Innovators & Disruptors</li>
              </div>
              <div>
                <li>Newsletters</li>
                <li> Mobile</li>
                <li>RSS</li>
                <li>CBS Store</li>
                <li>Paramount+</li>
                <li>Join Our Talent Community</li>
                <li>Davos 2023</li>
              </div>
            </ul>
          )}
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
