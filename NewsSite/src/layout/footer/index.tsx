import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

type Props = {};

function Footer({}: Props) {
  return (
    <>
      <section style={{ backgroundColor: "#101010", color: "#F2F2F2" }}>
        <Container
          maxWidth="xl"
          style={{
            backgroundColor: "#101010",
            color: "#F2F2F2",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Link
                  to="/"
                  style={{
                    // marginBottom: 1,
                    marginTop: "50px",
                    marginBottom: "20px",
                    textDecoration: "none",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: "30px",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                      fontSize: "30px",
                    }}
                  >
                    CBSNEWS
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,

                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  Copyright ©2023 CBS Interactive Inc. All rights reserved.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ul
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    listStyle: "none",
                    justifyContent: "space-around",
                    fontSize: "20px",
                    marginBottom: "100px",
                  }}
                >
                  <li>Privacy Policy</li>
                  <li>California Notice</li>
                  <li>Cookie Details</li>
                  <li>Terms of Use</li>
                  <li>About</li>
                  <li>Advertise</li>
                  <li>Closed Captioning</li>
                  <li>CBS News Live on Paramount+</li>
                  <li>CBS News Store</li>
                  <li>Site Map</li>
                  <li>Contact Us</li>
                  <li>Help</li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
}

export default Footer;
