import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import phoneDesktop from "/src/images/illustration-phones.svg";
import { motion } from "framer-motion";

function State() {
  return (
    <Stack
      id="state"
      direction={{ xs: "column", sm: "row", lg: "row" }}
      spacing={{ lg: 22 }}
      sx={{
        position: {
          xs: "relative",
          sm: "initial",
          md: "initial",
          lg: "initial",
        },
        backgroundSize: {
          xs: "cover",
          sm: "cover",
          lg: "auto",
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: {
          xs: "-51px -123px",
          sm: "-100px -546px",
          lg: "-110px -701px",
        },
        height: {
          xs: "390px",
          sm: "250px",
          lg: "250px",
        },
        borderTopRightRadius: "100px",
        borderBottomLeftRadius: "100px",
        alignItems: "center",
        backgroundColor: "hsl(228, 20%, 29%)",
        padding: {
          xs: "58px",
          lg: "40px",
        },
      }}
    >
      <Box
        initial={{ opacity: 0, x:'-3000px' }}
        animate={{ opacity: 1, x:0 }}
        transition={{duration:1}}
        component={motion.img}
        src={phoneDesktop}
        sx={{
          position: {
            xs: "absolute",
            sm: "initial",
            md: "initial",
            lg: "initial",
          },
          bottom: {
            xs: "243px",
          },
          left: {
            xs: "20px",
          },
          width: {
            xs: "350px",
            sm: "350px",
            lg: "500px",
          },
          height: {
            xs: "350px",
            lg: "500px",
          },
        }}
      />

      <Stack
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay:1 }}
        component={motion.div}
        sx={{
          position: {
            xs: "absolute",
            sm: "initial",
            md: "initial",
            lg: "initial",
          },
          top: {
            xs: "244px",
          },
        }}
        spacing={2}
      >
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
