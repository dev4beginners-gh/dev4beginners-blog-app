import React from 'react';
import { LINK_REL, LINK_TARGET } from '@/utils/constants';
import { ILink } from '@/models/interfaces';

const Link: React.FC<ILink> = ({ 
  href, 
  target = LINK_TARGET.Self, 
  rel = LINK_REL, 
  children, 
  className = '',
  styles
}) => {
  return (
    <a href={href} target={target} rel={rel} className={className} style={styles}>
      {children}
    </a>
  );
};

export default Link;
