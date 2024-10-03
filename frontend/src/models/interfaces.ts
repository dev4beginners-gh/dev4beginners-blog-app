import { LINK_TARGET } from "@/utils/constants"
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

export interface ILink {
  href: string;
  target?: typeof LINK_TARGET[keyof typeof LINK_TARGET];
  rel?: string;
  children: React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
}
