import { LINK_TARGET } from "@/utils/constants";

export interface ILink {
  href: string;
  target?: typeof LINK_TARGET[keyof typeof LINK_TARGET];
  rel?: string;
  children: React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
}
