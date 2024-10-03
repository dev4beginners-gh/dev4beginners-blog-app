/* Eslint no unsed vars disable */
import React from 'react';
import { Typography } from '@mui/material'
import { StyledMuiButton } from './styled';
import { BUTTON_COMPONENT } from '@/utils/constants';
import { IButton } from '@/models/button';

const Button = ({ 
  bgColor, 
  disabledColor, 
  labelColor, 
  lableVariant, 
  label, 
  ...props 
}: IButton) => (
  <StyledMuiButton
    data-testid={BUTTON_COMPONENT}  
    bgColor={bgColor}
    disabledColor={disabledColor}
    sx={{backgroundColor: bgColor}}
    {...props}  
  >
    <Typography
        color={labelColor}
        variant={lableVariant}
    >
        {label}
    </Typography>
  </StyledMuiButton>
)

export default Button;
