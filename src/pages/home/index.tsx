import React from "react";
import { Container, Button } from "@mui/material";
import { Header } from "../../components/Header";

export const HomePage: React.FC = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Header
        title="Hello there"
        description="General Kenobi, you are a bold one."
        element={
          <Button variant="contained" fullWidth>
            To Tatooine
          </Button>
        }
      />
    </Container>
  );
};
