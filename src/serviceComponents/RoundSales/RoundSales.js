import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import { Box, Button, Container, Typography } from "@material-ui/core";
const RoundSales = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.roundSales}>
      <Container className={classes.bigCont}>
        <Typography
          className={classes.title}
          align="center"
          variant="h2"
          style={{ marginTop: 50 }}
        >
          Rounds of Sale of Tokens
        </Typography>
        <Box className={classes.mainBox}>
          <Box className={classes.boxLeft}>
            <Typography className={classes.boxTitle}>
              Target - to Raise USD 500,000
            </Typography>
            <Button variant="outlined" className={classes.btnTxt}>
              {" "}
              Price 1 BIT - $0.25
            </Button>
            <Box className={classes.proBox}>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                20%
              </Typography>
              <Typography component={"span"} style={{ color: "gray" }}>
                Special Bonus
              </Typography>
            </Box>
          </Box>
          <Box className={classes.boxLeft}>
            <Typography className={classes.boxTitle}>
              Target - to Raise USD 500,000
            </Typography>
            <Button variant="outlined" type="text" className={classes.btnTxt}>
              Price 1 BIT - $0.25
            </Button>
            <Box className={classes.proBox}>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                20%
              </Typography>
              <Typography component={"span"} style={{ color: "gray" }}>
                Special Bonus
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default RoundSales;
