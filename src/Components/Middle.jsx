import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import laptopDesktop from "/src/images/illustration-laptop-desktop.svg";
import laptopMobile from "/src/images/illustration-laptop-mobile.svg";
import { motion } from "framer-motion";

function Middle() {
  return (
    <Stack
      direction={{ sm: "row", lg: "row" }}
      sx={{
        color: "hsl(200, 33%, 24%)",
        padding: {
          xs: 4,
          sm: 3,
          lg: 8,
        },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 1, delay: .4 }}
        component={motion.img}
        src={laptopDesktop}
        sx={{
          width: { xs: "400px", sm: "420px", lg: "640px" }
        }}
      />

      <Stack
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        component={motion.div}
        spacing={4}
      >
        <Stack spacing={2}>
          <Typography variant="h6">
            <b>Free, open, simple</b>
          </Typography>
          <Typography
            variant="subtitle3"
            sx={{ width: { sm: "90%", lg: "80%" } }}
          >
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features features such
            as code syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h6">
            <b>Powerful tooling</b>
          </Typography>
          <Typography
            variant="subtitle3"
            sx={{ width: { sm: "90%", lg: "80%" } }}
          >
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and development a breeze, but capable of
            producing even the most complicated sites.{" "}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Middle;
