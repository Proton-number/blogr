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
import desktopTop from "/src/images/bg-pattern-intro-desktop.svg";
import mobileTop from "/src/images/bg-pattern-intro-mobile.svg";

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
        backgroundSize: {
          sm: "cover",
          lg: "cover",
        },
        backgroundPosition: { sm: "300px", lg: "425px -635px" },
        height: { sm: "20em", lg: "24em" },
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          spacing={{ sm: 28, lg: 100 }}
          sx={{ padding: { lg: "20px" } }}
        >
          <Stack
            direction="row"
            sx={{ alignItems: "center" }}
            spacing={{ sm: 4, lg: 6 }}
          >
            <Typography variant="h4" component="h2" sx={{ flexGrow: 4 }}>
              <b>Blogr</b>
            </Typography>

            <Stack direction="row" spacing={{ sm: 3, lg: 6 }}>
              <Typography variant="p" sx={{ flexGrow: 0.4 }}>
                Product
              </Typography>

              <Typography variant="p" sx={{ flexGrow: 0.4 }}>
                Company
              </Typography>
              <Typography variant="p" sx={{ flexGrow: 0.4 }}>
                Connect
              </Typography>
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
        </Stack>
      </Toolbar>

      <Stack
        spacing={{ sm: 1.6, lg: 2 }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: { sm: "28px", lg: "40px" },
        }}
      >
        <Typography variant="h3">
          <b>A modern publishing platform</b>
        </Typography>

        <Typography>Grow your audience and build your online brand</Typography>

        <Stack
          direction="row"
          spacing={{ sm: 2, lg: 2 }}
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
