import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import { Link } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

type Props = {};

function Home({}: Props) {
  const theme = useTheme();
  const [value, setValue] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [views, setViews] = useState(0);
  async function getdata() {
    let response = await fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=438bf05e0d3048bc88ad666f135da8e6"
    );
    let result = await response.json();
    console.log(result);
    console.log(result.articles);
    let p = result.articles.map((a: any) => {
      return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card
            key={uuidv4()}
            sx={{
              display: "flex",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h5"
                  style={{ textDecoration: "underline" }}
                >
                  {a.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {a.content}
                </Typography>
                <br />
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    onClick={() => setLikes((prevLikes) => prevLikes + 1)}
                  >
                    <ThumbUpOffAltIcon style={{ marginRight: "5px" }} />
                  </IconButton>
                  <span style={{ marginRight: "10px" }}>{likes}</span>
                  <IconButton
                    onClick={() =>
                      setDislikes((presDislikes) => presDislikes + 1)
                    }
                  >
                    <ThumbDownOffAltIcon style={{ marginRight: "5px" }} />
                  </IconButton>
                  <span style={{ marginRight: "10px" }}>{dislikes}</span>

                  <IconButton
                    onClick={() => setViews((presViews) => presViews + 1)}
                  >
                    <RemoveRedEyeIcon style={{ marginRight: "5px" }} />
                  </IconButton>

                  <span style={{ marginRight: "10px" }}>{views}</span>
                </Box>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {a.publishedAt}
                  </Typography>
                  <Link
                    href={a.url}
                    underline="hover"
                    style={{
                      fontSize: "16px",
                      textAlignLast: "right",
                    }}
                  >
                    {"Go Site"}
                  </Link>
                </div>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              image={a.urlToImage}
              style={{ minWidth: "250px" }}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      );
    });
    console.log(p);
    setValue(p);
  }
  getdata();
  return (
    <>
      <Container
        maxWidth="xl"
        style={{
          padding: "25px 20px 10px 20px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <h1
            style={{
              fontFamily: "serif",
              fontSize: "2.82rem",
              margin: "bottom",
              fontWeight: "900",
            }}
          >
            Latest News
          </h1>
          <Grid container spacing={5}>
            {" "}
            {value}
            <Grid item xs={3}></Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Home;
