import React from 'react'
import { StyledIcon } from './styled'
import { ICON_COMPONENT_DATA_TEST_ID } from '@/utils/constants'
import { IIcon } from '@/models/icon';

const Icon = ({ 
  src, 
  alt, 
  width, 
  height,
  styles, 
  onClick 
}: IIcon
) => {
  return (
    <StyledIcon
      data-testid={ICON_COMPONENT_DATA_TEST_ID}  
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      style={styles}
  />
  );
};

export default Icon;
