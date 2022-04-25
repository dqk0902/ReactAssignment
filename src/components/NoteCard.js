import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MainButton from "../components/MainButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignItems: "top",
    padding: "15px",
    margin: "32px",
    textAlign: "center",

    borderRadius: 15,
  },
  avatar: {
    fontSize: "20px",
    margin: "auto",
  },
});
export default function NoteCard({ note }, props) {
  const classes = useStyles(props);
  return (
    <div>
      <Card className={classes.root}>
        <Avatar className={classes.avatar}>{note.name.charAt(0)}</Avatar>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {note.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <p>@{note.username}</p>
            <Link>{note.website}</Link>
          </Typography>
        </CardContent>
        <MainButton note={note} />
      </Card>
    </div>
  );
}
