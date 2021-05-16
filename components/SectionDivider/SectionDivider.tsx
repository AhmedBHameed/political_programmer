import {Divider} from 'antd';
import React from 'react';

interface SectionDividerProps {
  title: string;
  orientation?: 'left' | 'right' | 'center';
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  title,
  orientation,
  className,
}) => (
  <Divider className={className} orientation={orientation}>
    {title}
  </Divider>
);

export default SectionDivider;
