import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import phoneDesktop from "/src/images/illustration-phones.svg";
("/src/images/bg-pattern-circles.svg");
function State() {
  return (
    <Stack
      id="state"
      direction={{ sm: "row", lg: "row" }}
      spacing={{ lg: 22 }}
      sx={{
        backgroundSize: {
          sm: "cover",
          lg: "auto",
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: { sm: "-100px -546px", lg: "-110px -701px" },
        height: {
          sm: "250px",
          lg: "250px",
        },
        borderTopRightRadius: "100px",
        borderBottomLeftRadius: "100px",
        alignItems: "center",
        backgroundColor: "hsl(228, 20%, 29%)",
        padding: {
          lg: "40px",
        },
      }}
    >
     <Box
        component="img"
        src={phoneDesktop}
        sx={{
          width: {
            sm: "350px",
            lg: "500px",
          },
          height: {
            lg: "500px",
          },
        }}
      />

      <Stack>
        <Typography variant="h5">
          <b>State of the Art Infrastructure</b>
        </Typography>
        <Typography
          variant="subtitle3"
          sx={{ width: { sm: "80%", lg: "66%" } }}
        >
          With reliabilty and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </Typography>
      </Stack> 
    </Stack>
  );
}

export default State;
