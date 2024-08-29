"use client";
import React, { useState } from "react";
import ContentHolder from "@/app/components/ContentHolder";
import PaperWrapper from "@/app/components/PaperWrapper";
import SimpleTitle from "@/app/components/SimpleTitle";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import PaymentsIcon from "@mui/icons-material/Payments";

import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

const appname = "Convert Cash";
const appsubtitle =
  "Type in any valid amount of money and see it transform into real money. NOT actual real money, just the formatting and the way it is presented... Otherwise it would be magic. Which it IS NOT!";
const apptitleicon = <EuroSymbolIcon />;

const CashMoneys = () => {
  const [amount, setAmount] = useState("0");

  //@ts-ignore
  const inputUpdate = (event) => {
    // input validation (limit to 0-9 digits only)
    if (event.target.value.match(/[^0-9.]/g)) {
      return;
    }

    //handle empty input
    if (event.target.value === "") {
      setAmount("0");
      return;
    }

    // if amount starts with '0' remmove '0' if there is no decimal point
    if (event.target.value[0] === "0") {
      if (event.target.value.includes(".")) {
        setAmount(event.target.value);
        return;
      }
      setAmount(event.target.value.slice(1));
      return;
    }

    //if decimal point exists in input only allow 2 numbers after decimal point and ignore any other decimal inputs
    if (event.target.value.includes(".")) {
      if (event.target.value.split(".")[1].length > 2) {
        return;
      }
    }

    setAmount(event.target.value);
    return;
  };
  return (
    <ContentHolder>
      <SimpleTitle title={appname} icon={apptitleicon} subtitle={appsubtitle} />
      <PaperWrapper>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            p: 1,
            border: "1px dashed",
            borderColor: "primary.dark",
            typography: "h4",
            textAlign: "center",
          }}
        >
          <Box
            component="span"
            sx={{ fontSize: "0.5em", color: "primary.dark" }}
          >
            Bills
          </Box>
          {amount === "0" ? "No Bills" : "Bills"}
        </Box>
        <Box component="div">
          <FormControl
            fullWidth
            variant="filled"
            color="primary"
            focused={true}
          >
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              value={amount}
              onChange={inputUpdate}
              startAdornment={
                <InputAdornment position="start">€</InputAdornment>
              }
              inputProps={{ inputMode: "decimal" }}
            />
          </FormControl>
        </Box>
        <Box component="div">
          <Button variant="contained" startIcon={<PaymentsIcon />} fullWidth>
            Convert
          </Button>
        </Box>
      </PaperWrapper>
    </ContentHolder>
  );
};

export default CashMoneys;
