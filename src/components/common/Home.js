import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import sample_image from '/home/oem/IS/frontend/src/components/Images/2.jpg'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import { Gallery } from "react-grid-gallery";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  localStorage.setItem("useremail", "");


  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 400,
      height: 500,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",

    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 500,
      height: 500,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 500,
      height: 500,
    },
  ];

  useEffect(() => {
    setName("Office");
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
      </div>
      <div style={{ textAlign: "center" }}>Technology Transfer  {name}</div>;
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img width={400} height={200} src={sample_image} />
      </div>
      {/* <Grid> */}
      {/* <Grid item xs={4}>
          <Item><img width={400} height={200} src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/Bhakra-Nangal-Dam-Facts1.jpg"></img></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><img width={400} height={200} src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/Bhakra-Nangal-Dam-Facts1.jpg"></img></Item>
        </Grid> */}
      {/* <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      {/* </Grid> */}

      <div style={{
        backgroundImage: `url("https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/Bhakra-Nangal-Dam-Facts1.jpg")`
      }}>

        <div height={300}>
          Hello World

        </div>
      </div>

      <Gallery images={images} />




      <div style={{ width: 700, margin: 'auto' }}>
        <GridList cellHeight={180} >

          <GridListTile>
            <img
              src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/Bhakra-Nangal-Dam-Facts1.jpg" />
            <GridListTileBar
              title='Startup Seeding'
              subtitle={<span>some content to be written like a caption</span>}
              actionIcon={
                <IconButton aria-label={`Best Place to learn`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </div>


      <div style={{ width: 700, margin: 'auto' }}>
        <h3>How to put title over image in ReactJS?</h3>
        <GridList cellHeight={180} >
          <GridListTile key="Subheader" cols={2} rows={4} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          <GridListTile>
            <img
              src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/Bhakra-Nangal-Dam-Facts1.jpg" />
            <GridListTileBar
              title='Startup Seeding'
              subtitle={<span>some content to be written like a caption</span>}
              actionIcon={
                <IconButton aria-label={`Best Place to learn`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </div>
      
      <Card>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label={`Best Place to learn`}>
                  <InfoIcon />
                </IconButton>                <IconButton aria-label={`Best Place to learn`}>
                  <InfoIcon />
                </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/06/Bhakra-Nangal-Dam-Facts1.jpg"
        alt="Live from space album cover"
      />
    </Card>


    </div>)
};

export default Home;
