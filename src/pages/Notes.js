import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";

import NoteCard from "../components/NoteCard";
export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <Container>
      <Grid container>
        {notes ? (
          notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <NoteCard note={note} />
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Container>
  );
}
