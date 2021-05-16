import {Input} from 'antd';
import {SizeType} from 'antd/lib/config-provider/SizeContext';
import React, {forwardRef} from 'react';

interface InputFieldProps {
  prefixIcon?: React.ReactNode;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  size?: SizeType;
  type?: 'text' | 'number' | 'password';
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  testId?: string;
}

const InputField = forwardRef<Input, InputFieldProps>(
  (
    {
      name,
      disabled,
      type,
      prefixIcon,
      placeholder,
      size,
      value,
      onChange,
      testId,
    },
    ref
  ) => (
    <Input
      data-testid={testId}
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      prefix={prefixIcon}
      ref={ref}
      size={size}
      type={type || 'text'}
      value={value}
    />
  )
);

export {InputField};
