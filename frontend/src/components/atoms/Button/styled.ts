import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';

export const StyledMuiButton = styled(MuiButton)<{
    bgColor?: string,
    disabledColor?: string
}>(({ bgColor, disabledColor }) => ({
    '&:hover': {
      backgroundColor: bgColor ?? 'inherit',
    },
    '&:disabled': {
      backgroundColor: disabledColor ?? 'inherit',
    },
}));
