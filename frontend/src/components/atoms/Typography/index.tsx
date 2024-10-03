import React from "react";
import { Typography } from "@mui/material";
import { TypographyWrapperProps } from "@/models/typography";
import { TYPOGRAPHY_TEST_ID } from "@/utils/constants";

const TypographyWrapper: React.FC<TypographyWrapperProps> = ({
  variant = "body1",
  color = "inherit",
  className,
  children,
  ...rest
}) => {
  return (
    <Typography variant={variant} color={color} className={className} {...rest} data-testid={TYPOGRAPHY_TEST_ID}>
      {children}
    </Typography>
  );
};

export default TypographyWrapper;
