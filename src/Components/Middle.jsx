import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import laptopDesktop from "/src/images/illustration-laptop-desktop.svg";
import laptopMobile from "/src/images/illustration-laptop-mobile.svg";

function Middle() {
  return (
    <Stack
      direction={{ sm: "row", lg: "row" }}
      sx={{
        color: "hsl(200, 33%, 24%)",
        padding: {
          sm: 6,
          lg: 8,
        },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={laptopDesktop}
        sx={{ width: { lg: "800px" }, height: { lg: "700px" } }}
      />

      <Stack spacing={4}>
        <Stack spacing={2}>
          <Typography variant="h6">
            <b>Free, open, simple</b>
          </Typography>
          <Typography
            variant="subtitle3"
            sx={{ width: { sm: "100%", lg: "80%" } }}
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
            sx={{ width: { sm: "100%", lg: "80%" } }}
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
