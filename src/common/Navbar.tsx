import {
  Box,
  Toolbar,
  AppBar,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography>Mipp</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" sx={{ padding: "4px 25px" }}>
                    Login
                  </Button>
                  <Button variant="outlined" sx={{ padding: "4px 25px" }}>
                    Register
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
