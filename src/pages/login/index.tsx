import React, { ChangeEvent, FormEvent } from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

type LoginType = { username: string; password: string };

export const LoginPage: React.FC = () => {
  const [loginData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", maxWidth: "500px", margin: "auto" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Login
            </Typography>
            <Box onSubmit={handleSubmit} component="form">
              <TextField
                type="text"
                fullWidth
                label="username"
                name="username"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={handleChange}
                required
              />
              <TextField
                type="password"
                fullWidth
                name="password"
                label="password"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, mb: 1.5, fontSize: "16px" }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
