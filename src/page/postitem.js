import ".././App.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { pink } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const PostItem = ({ card }) => {
  const navigate = useNavigate();

  return (
    <Grid item key={card} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        align="left"
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: pink[500] }} aria-label="nickname">
              {card.username.substr(0, 1)}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={() => {
                navigate("/postupdate/"+card.id);
              }}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={card.username}
          subheader={card.createdAt.substr(0, 10)}
        />
        <CardMedia
          component="img"
          height="194"
          image={card.imageUrl.toString()}
          alt="default"
          onClick={() => {
            navigate("/post/"+card.id);
          }}
        />
        <CardContent onClick={() => {
            navigate("/post/"+card.id);
          }}>
          <Typography variant="body2">{card.title}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteRoundedIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={() => {
            navigate("/post/"+card.id);
          }}>
            <ChatRoundedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PostItem;
