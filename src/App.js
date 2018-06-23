import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@material-ui/core";

const styles = () => ({
  root: {
    padding: "50px 100px",
    zIndex: 999,
    position: "absolute"
  },
  card: {
    display: "flex",
    height: "calc(100vh - 100px)"
  },
  rightBorder: {
    borderRight: "solid #d0D0D0 1px"
  },
  content: {
    marginTop: 0
  },
  background: {
    position: "absolute",
    height: 200,
    width: "100%",
    top: 0,
    background: "#7159C1"
  },
  rightContainer: {
    background:
      "url(http://www.hdwallpapers20.com/wp-content/uploads/2015/04/Inspirational-Quotes-for-whatsapp-background-dp-1080p-free.jpg) no-repeat center center fixed",
    flex: 1,
    backgroundSize: "cover",
  },
  heightAdjust: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    background: "#9de1fe",
    padding: 20
  },
  information: {
    color: "#444"
  }
});

const randomUser = Math.floor((Math.random() * 9) + 0);

const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <LeftContainer classes={classes} />
            <RightContainer classes={classes} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);

const list = [
  {
    id: 0,
    name: "Ayla Cornell",
    image: "https://d3iw72m71ie81c.cloudfront.net/female-17.jpg",
    text: "Lorem ipsum"
  },
  {
    id: 1,
    name: "Elliana Palacios",
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9",
    text: "Lorem ipsum"
  },
  {
    id: 2,
    name: "Konsta peura",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Lorem ipsum"
  },
  {
    id: 3,
    name: "Bonnie Riley",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    text: "Lorem ipsum"
  },
  {
    id: 4,
    name: "Abdullah Hadley",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f",
    text: "Lorem ipsum"
  },
  {
    id: 5,
    name: "Zachary Levi",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg",
    text: "Lorem ipsum"
  },
  {
    id: 6,
    name: "veeti seppanen",
    image: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "Lorem ipsum"
  },
  {
    id: 7,
    name: "Thomas Stock",
    image: "https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg",
    text: "Lorem ipsum"
  },
  {
    id: 8,
    name: "Guillermo Raffaele",
    image: "https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg",
    text: "Lorem ipsum"
  },
  {
    id: 9,
    name: "Olive Mathews",
    image: "https://d3iw72m71ie81c.cloudfront.net/female-52.jpg",
    text: "Lorem ipsum"
  }
]

const LeftContainer = ({ classes }) => (
  <Grid item xs={3}>
    <CardHeader
      className={classes.rightBorder}
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          F
        </Avatar>
      }
    />
    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.information} variant="subheader">
        Nulla in orci sit amet lorem pretium vulputate.
      </Typography>
    </Paper>
    <List>
      {list.map(item => (
        <ListItem>
          <Avatar src={item.image}/>
          <ListItemText primary={item.name} secondary={item.text} />
        </ListItem>
      ))}
    </List>
  </Grid>
);

const RightContainer = ({ classes }) => (
  <Grid className={classes.heightAdjust} item xs={9}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar} src={list[randomUser].image}/>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title= {list[randomUser].name}
    />
    <CardContent className={[classes.rightContainer, classes.content]} />
  </Grid>
);

export default withStyles(styles)(App);