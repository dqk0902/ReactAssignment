import React from "react";
import Typography from "@mui/material/Typography";
import { Card, Box } from "@mui/material";
import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: "30%",
    alignItems: "top",
    padding: "15px",
    margin: "0 auto",
    textAlign: "center",
    marginTop: "5rem",
    borderRadius: "30",
  },
  avatar: {
    fontSize: "20px",
    margin: "auto",
  },
});

export default function Create(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const classes = useStyles(props);
  const { id } = useParams();

  const user = users.find((user) => user.id === Number(id));

  return (
    <Card className={classes.root}>
      <Typography variant="h6" gutterBottom={true}>
        User Details
      </Typography>
      <Avatar className={classes.avatar}>{user?.name.charAt(0)}</Avatar>
      <Typography variant="h6">
        <Box>
          <br /> Name: {user?.name}
        </Box>
      </Typography>

      <Typography variant="h6">
        <Box>Username: {user?.username}</Box>
      </Typography>
      <Typography variant="h6" component="div">
        <Box>Email: {user?.email}</Box>
        <Box>Phone: {user?.phone}</Box>
        <Box>Company: {user?.company.name}</Box>
        <Box>
          Website:
          <Link> {user?.website}</Link>
        </Box>
        <Box>
          Address: <br />
          Street: {user?.address.street} <br />
          Suite: {user?.address.suite} <br />
          City: {user?.address.city} <br />
          Zip: {user?.address.zipcode}
        </Box>
      </Typography>
    </Card>
  );
}
