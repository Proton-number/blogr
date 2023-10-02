import React, { useState } from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
  Button,
  createTheme,
  ThemeProvider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function NavMobile() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(357, 100%, 62%)",
      },
    },
  });

  return (
    <>
      <AppBar
        id="mobileNav"
        sx={{ backgroundColor: "hsl(10, 100%, 69%)", padding: "5px" }}
        elevation={0}
      >
        <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontFamily: "DM Serif Display,  serif",
              }}
            >
              <b>Blogr</b>
            </Typography>
          </Stack>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setisDrawerOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box width="250px" role="presentation">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close-icon"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>

          <Stack spacing={3} style={{ textAlign: "center", padding: "35px" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              elevation={0}
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={
                  <ThemeProvider theme={theme}>
                    <ExpandMoreIcon color="primary" />
                  </ThemeProvider>
                }
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  {" "}
                  <b>Product</b>{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda ipsum reiciendis
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              elevation={0}
            >
              <AccordionSummary
                id="panel2-header"
                aria-controls="panel2-content"
                expandIcon={
                  <ThemeProvider theme={theme}>
                    <ExpandMoreIcon color="primary" />
                  </ThemeProvider>
                }
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  {" "}
                  <b>Company</b>{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda ipsum reiciendis
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              elevation={0}
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel3-content"
                expandIcon={
                  <ThemeProvider theme={theme}>
                    <ExpandMoreIcon color="primary" />
                  </ThemeProvider>
                }
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  {" "}
                  <b>Connect</b>{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Stack>
                  <Typography variant='subtitle1'><b>Connect</b></Typography>
                  <Typography variant='subtitle1'><b>Newsletter</b></Typography>
                  <Typography variant='subtitle1'><b>Linkedln</b></Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Stack spacing={2}>
              <Typography variant="h6" sx={{ cursor: "pointer" }}>
                {" "}
                <b>Login</b>{" "}
              </Typography>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    borderRadius: "18px",
                    padding: "10px",
                  }}
                  disableElevatio
                >
                  <b> Sign Up</b>
                </Button>
              </ThemeProvider>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default NavMobile;
