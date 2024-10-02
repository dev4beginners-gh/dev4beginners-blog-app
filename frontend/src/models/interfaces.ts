import { ButtonProps, SxProps, TypographyVariant } from "@mui/material"

export interface IButton extends ButtonProps {
  sx?: SxProps
  label?: string
  labelColor?: string
  bgColor?: string
  disabledColor?: string
  lableVariant?: TypographyVariant
  option?: string
}

export interface IIcon {
  src?: any;
  alt?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  styles?: React.CSSProperties;
}
