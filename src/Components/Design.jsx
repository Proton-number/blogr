import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import editorDesktop from "/src/images/illustration-editor-desktop.svg";
import editorMobile from "/src/images/illustration-editor-mobile.svg";

function Design() {
  return (
    <Box
      sx={{
        color: "hsl(200, 33%, 24%)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">
          <b>Designed for the future</b>
        </Typography>
      </Box>

      <Stack
        direction={{ sm: "row", lg: "row" }}
        sx={{
          padding: {
            sm: 6,
            lg: 8,
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={4}>
          <Stack spacing={3}>
            <Typography variant="h6">
              <b>Introducing an extensible editor</b>
            </Typography>
            <Typography
              variant="subtitle3"
              sx={{ width: { sm: "100%", lg: "80%" } }}
            >
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allow easy manipulation of embeds
              such as images, videos, and Markdown. Extensibility with plugins
              and themes provide easy ways to add functionality or change the
              looks of a blog.
            </Typography>
          </Stack>
          <Stack spacing={3}>
            <Typography variant="h6">
              <b>Robust content management</b>
            </Typography>
            <Typography
              variant="subtitle3"
              sx={{ width: { sm: "100%", lg: "80%" } }}
            >
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control
            </Typography>
          </Stack>
        </Stack>

        <Box
          component="img"
          src={editorDesktop}
          sx={{
            width: {
              sm: "380px",
              lg: "800px",
            },
            height: { lg: "700px" },
          }}
        />
      </Stack>
    </Box>
  );
}

export default Design;
