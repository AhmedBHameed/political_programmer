import {Radio, RadioChangeEvent} from 'antd';
import {SizeType} from 'antd/lib/config-provider/SizeContext';
import {LabeledValue} from 'antd/lib/select';
import React, {forwardRef} from 'react';
import styled from 'styled-components';

const StyledRadio = styled(Radio)`
  display: block;
`;
interface RadioFieldProps {
  onChange?: (event: RadioChangeEvent) => void;
  value?: LabeledValue;
  disabled?: boolean;
  options: LabeledValue[];
  className?: string;
  testId?: string;
  size?: SizeType;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

const RadioField = forwardRef<HTMLDivElement, RadioFieldProps>(
  ({value, options, size, disabled, className, testId, onChange}, ref) => (
    <Radio.Group
      className={className}
      disabled={disabled}
      onChange={onChange}
      ref={ref}
      size={size}
      value={value?.value}
    >
      {options.map((option, index) => (
        <StyledRadio
          data-testid={testId}
          key={index.toString()}
          value={option.value}
        >
          {option.label}
        </StyledRadio>
      ))}
    </Radio.Group>
  )
);

export {RadioField};
