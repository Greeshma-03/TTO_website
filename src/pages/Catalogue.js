import React from "react"
import "../styles/Home.css"
import bg from "../assets/cc.jpg"
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import BreadCrumbs from "../components/breadcrumbs"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Popover from '@mui/material/Popover';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';







function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (
        <div>

            <div className="home" style={{ backgroundColor: '#D4F1F4' }}>
                <BreadCrumbs />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center" paddingLeft={20} paddingTop={5} spacing={4}>
                        <Grid item justifyContent="center" xs={3}>
                            <Typography color="text.primary">Lab Name</Typography>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Typography color="text.primary">Lab Name</Typography>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Typography color="text.primary">Lab Name</Typography>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Typography color="text.primary">Lab Name</Typography>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Typography color="text.primary">Lab Name</Typography>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Typography color="text.primary">Lab Name</Typography>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Typography color="text.primary">Lab Name</Typography>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Typography color="text.primary">Lab Name</Typography>
                        </Grid>
                    </Grid>
                </Box>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center" spacing={4} paddingLeft={15}>
                        <Grid item justifyContent="center" xs={3}>
                            <Card sx={{ maxWidth: 300 }} aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Project Name
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                A brief Project Description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            
                                            <Button size="small">Visit Page</Button>
                                        </CardActions>
                                    </Card>
                                </Popover>

                                <CardMedia
                                    component="img"
                                    width="auto"
                                    height="auto"
                                    image="https://tto.iiit.ac.in/TTO_website_images/MLL/Intelligent-Transportation.png"
                                    alt="Paella dish"
                                />
                            </Card>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Card sx={{ maxWidth: 300 }} aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Project Name
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                A brief Project Description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            
                                            <Button size="small">Visit Page</Button>
                                        </CardActions>
                                    </Card>
                                </Popover>

                                <CardMedia
                                    component="img"
                                    width="auto"
                                    height="auto"
                                    image="https://tto.iiit.ac.in/TTO_website_images/MLL/Intelligent-Transportation.png"
                                    alt="Paella dish"
                                />
                            </Card>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Card sx={{ maxWidth: 300 }} aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Project Name
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                A brief Project Description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            
                                            <Button size="small">Visit Page</Button>
                                        </CardActions>
                                    </Card>
                                </Popover>

                                <CardMedia
                                    component="img"
                                    width="auto"
                                    height="auto"
                                    image="https://tto.iiit.ac.in/TTO_website_images/MLL/Intelligent-Transportation.png"
                                    alt="Paella dish"
                                />
                            </Card>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Card sx={{ maxWidth: 300 }} aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Project Name
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                A brief Project Description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            
                                            <Button size="small">Visit Page</Button>
                                        </CardActions>
                                    </Card>
                                </Popover>

                                <CardMedia
                                    component="img"
                                    width="auto"
                                    height="auto"
                                    image="https://tto.iiit.ac.in/TTO_website_images/MLL/Intelligent-Transportation.png"
                                    alt="Paella dish"
                                />
                            </Card>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Card sx={{ maxWidth: 300 }} aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Project Name
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                A brief Project Description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            
                                            <Button size="small">Visit Page</Button>
                                        </CardActions>
                                    </Card>
                                </Popover>

                                <CardMedia
                                    component="img"
                                    width="auto"
                                    height="auto"
                                    image="https://tto.iiit.ac.in/TTO_website_images/MLL/Intelligent-Transportation.png"
                                    alt="Paella dish"
                                />
                            </Card>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Card sx={{ maxWidth: 300 }} aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Project Name
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                A brief Project Description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            
                                            <Button size="small">Visit Page</Button>
                                        </CardActions>
                                    </Card>
                                </Popover>

                                <CardMedia
                                    component="img"
                                    width="auto"
                                    height="auto"
                                    image="https://tto.iiit.ac.in/TTO_website_images/MLL/Intelligent-Transportation.png"
                                    alt="Paella dish"
                                />
                            </Card>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Card sx={{ maxWidth: 300 }} aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Project Name
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                A brief Project Description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            
                                            <Button size="small">Visit Page</Button>
                                        </CardActions>
                                    </Card>
                                </Popover>

                                <CardMedia
                                    component="img"
                                    width="auto"
                                    height="auto"
                                    image="https://tto.iiit.ac.in/TTO_website_images/MLL/Intelligent-Transportation.png"
                                    alt="Paella dish"
                                />
                            </Card>
                        </Grid>
                        <Grid item justifyContent="center" xs={3}>
                            <Card sx={{ maxWidth: 300 }} aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Project Name
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                A brief Project Description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            
                                            <Button size="small">Visit Page</Button>
                                        </CardActions>
                                    </Card>
                                </Popover>

                                <CardMedia
                                    component="img"
                                    width="auto"
                                    height="auto"
                                    image="https://tto.iiit.ac.in/TTO_website_images/MLL/Intelligent-Transportation.png"
                                    alt="Paella dish"
                                />
                            </Card>
                        </Grid>




                    </Grid>
                    
                </Box>
            </div>
        </div>

    );
}
export default Home;