import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { Box } from "@material-ui/core";

const Copyright = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "15vh",
          color: "greenyellow",
        }}
      >
        <Typography
          style={{ color: "white", fontWeight: "bold" }}
          variant="footer"
          color="text.secondary"
          align="center"
          {...props}
        >
          {"Copyright © "}
          <Link color="inherit" href="#">
            Farm-Skills
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Grid>
    </Grid>
  );
};

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Social Media",
    description: ["Instagram", "Facebook", "Twitter", "YouTube"],
  },
];

const defaultTheme = createTheme();

function Footer() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles
          styles={{
            ul: { margin: 0, padding: 0, listStyle: "none" },
            bgcolor: "lightgreen",
          }}
        />
        <CssBaseline />

        <Container
          maxWidth="xl"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            // py: [1, 2],
            bgcolor: "#0b7003",
          }}
        >
          <Grid container justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={6} md={3} key={footer.title}>
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        variant="subtitle1"
                        style={{ color: "#fff" }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Container
            maxWidth="md-container"
            sx={{ width: "100%", borderTop: "0px solid black", my: 4 }}
          >
            <Divider sx={{ mt: 5 }} />
            <Copyright />
          </Container>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Footer;
