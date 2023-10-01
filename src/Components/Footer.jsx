import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        borderTopRightRadius: "100px",
        backgroundColor: "hsl(231, 8%, 17%)",
        padding: {
          lg: "40px",
        },
      }}
    >
      <Box>
        <Typography variant='h4'>
          <b>Blogr</b>
        </Typography>
      </Box>

      <Stack spacing={1}>
        <Typography>
          <b>Product</b>
        </Typography>
        <Stack spacing={0.5}>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Overview
          </Typography>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Pricing
          </Typography>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Marketplace
          </Typography>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Features
          </Typography>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Integrations
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Typography>
          <b>Company</b>
        </Typography>
        <Stack spacing={0.5}>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            About
          </Typography>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Team
          </Typography>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Blog
          </Typography>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Careers
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Typography>
          <b>Connect</b>
        </Typography>
        <Stack spacing={0.5}>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Contact
          </Typography>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Newsletter
          </Typography>
          <Typography variant="subtitle3" sx={{ opacity: "80%" }}>
            Linkedin
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
