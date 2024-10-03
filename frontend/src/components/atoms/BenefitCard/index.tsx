import { Card, CardContent, Typography } from "@mui/material";
import { ICard } from "../../../models/card";
import React from "react";
import { BENIFIT_CARD_TEST_ID } from "@/utils/constants";

const BenefitCard = ({ icon, title, description, bgColor }: ICard) => {
  return (
    <Card
      data-testid={BENIFIT_CARD_TEST_ID}
      sx={{
        backgroundColor: bgColor,
        padding: 2,
        borderRadius: "12px",
        margin: 2,
        textAlign: "center",
        width: "100%",
        maxWidth: 330,
      }}
    >
      <CardContent
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={icon}
          alt="icon"
          style={{ width: "80%", marginBottom: "16px" }}
        />{" "}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#333" }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", marginTop: "8px" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
