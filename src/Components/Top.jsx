import React from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

function Top() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <Box
      id="desktopTop"
      sx={{
        marginTop: {
          xs: "22px",
          sm: 0,
        },
        backgroundSize: {
          xs: "600px",
          sm: "cover",
          lg: "cover",
        },
        backgroundPosition: {
          xs: "40px 80px",
          sm: "300px",
          lg: "425px -635px",
        },
        height: { xs: "30em", sm: "20em", lg: "24em" },
      }}
    >
      <Box
        id="desktopNav"
        sx={{
          padding: { sm: "30px", lg: "30px" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            sx={{ alignItems: "center" }}
            spacing={{ sm: 4, lg: 6 }}
          >
            <Typography variant="h4" component="h2">
              <b>Blogr</b>
            </Typography>

            <Stack direction="row" spacing={{ sm: 3, lg: 6 }}>
              <Stack
                component={motion.div}
                whileHover={{ y: -6 }}
                direction="row"
                sx={{ alignItems: "center" }}
              >
                <Typography sx={{ cursor: "pointer" }} variant="p">
                  Product
                </Typography>
                <IconButton>
                  <ThemeProvider theme={theme}>
                    <ExpandMoreIcon color="primary" />
                  </ThemeProvider>
                </IconButton>
              </Stack>

              <Stack
                component={motion.div}
                whileHover={{ y: -6 }}
                direction="row"
                sx={{ alignItems: "center" }}
              >
                <Typography sx={{ cursor: "pointer" }} variant="p">
                  Company
                </Typography>
                <IconButton>
                  <ThemeProvider theme={theme}>
                    <ExpandMoreIcon color="primary" />
                  </ThemeProvider>
                </IconButton>
              </Stack>

              <Stack
                component={motion.div}
                whileHover={{ y: -6 }}
                direction="row"
                sx={{ alignItems: "center" }}
              >
                <Typography sx={{ cursor: "pointer" }} variant="p">
                  Connect
                </Typography>
                <IconButton>
                  <ThemeProvider theme={theme}>
                    <ExpandMoreIcon color="primary" />
                  </ThemeProvider>
                </IconButton>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            sx={{ alignItems: "center" }}
            spacing={{ sm: 2, lg: 4 }}
          >
            <Typography sx={{ cursor: "pointer" }}> Login</Typography>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    backgroundColor: "hsl(0, 0%, 92%)",
                  },
                  color: "hsl(10, 100%, 69%)",
                  textTransform: "none",
                  borderRadius: "18px",
                }}
                disableElevation
              >
                <b> Sign Up</b>
              </Button>
            </ThemeProvider>
          </Stack>
        </Box>
      </Box>

      <Stack
        component={motion.div} 
        initial={{ opacity: 0, x:'-200px' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{duration:.5}}
        spacing={{ xs: 3, sm: 1.6, lg: 2 }}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "50px", sm: "28px", lg: "40px" },
        }}
      >
        <Typography variant="h3">
          <b>A modern publishing platform</b>
        </Typography>

        <Typography>Grow your audience and build your online brand</Typography>

        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 2, lg: 2 }}
          sx={{ alignItems: "center" }}
        >
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              sx={{
                "&:hover": {
                  backgroundColor: "hsl(0, 0%, 92%)",
                },
                color: "hsl(10, 100%, 69%)",
                textTransform: "none",
                borderRadius: "18px",
              }}
              disableElevation
            >
              <b> Start for free</b>
            </Button>
          </ThemeProvider>
          <Button
            variant="outlined"
            sx={{
              "&:hover": {
                borderColor: "hsl(0, 0%, 92%)",
              },
              color: "white",
              borderColor: "white",
              textTransform: "none",
              borderRadius: "18px",
            }}
            disableElevation
          >
            {" "}
            <b> Learn More</b>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Top;
