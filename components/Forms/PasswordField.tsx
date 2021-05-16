import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {Input} from 'antd';
import {SizeType} from 'antd/lib/config-provider/SizeContext';
import React, {forwardRef} from 'react';

interface PasswordFieldProps {
  prefixIcon?: React.ReactNode;
  placeholder?: string;
  name?: string;
  size?: SizeType;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  testId?: string;
}

const PasswordField = forwardRef<Input, PasswordFieldProps>(
  ({name, prefixIcon, placeholder, value, onChange, size, testId}, ref) => (
    <Input.Password
      data-testid={testId}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      prefix={prefixIcon}
      ref={ref}
      size={size}
      value={value}
    />
  )
);

export {PasswordField};
