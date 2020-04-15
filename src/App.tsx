import React, { useState } from 'react';

import { Paper, Grid, Typography, Button, ThemeProvider, createMuiTheme, Card, CardContent } from "@material-ui/core";
// import HighlightIcon from "@material-ui/icons/HighlightOutlined";
import Header from './components/Header';
// import CoffeeCard from './components/CoffeeCard';

// import coffeMakerItems from "./models/constants";
import Content from './components/Content';
import ContentSameHeight from './components/ContentSameHeight';
// import classes from '*.module.css';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light"
    }
  });

  // const coffeeCardDataItems = [coffeMakerItems[0]];

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Grid item>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </Grid>
          <Grid item container direction="column">
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Sample application, showing Dark theme switching.
                </Typography>
              </CardContent>
            </Card>

            {/* <HighlightIcon /> */}
            <Button variant="contained" color="primary">
              This is a button
            </Button>
            <Button variant="contained" color="secondary">
              This is another button
            </Button>
            {/* <Typography variant="subtitle1">{isDarkMode ? "light" : "dark"}</Typography> */}
            {/* <Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} /> */}
          </Grid>

          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <ContentSameHeight />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>

          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Content />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
          {/* {coffeeCardDataItems.map(item => <CoffeeCard {...item} />)} */}

        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
