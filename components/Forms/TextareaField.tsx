import {Input} from 'antd';
import {SizeType} from 'antd/lib/config-provider/SizeContext';
import {TextAreaRef} from 'antd/lib/input/TextArea';
import React, {forwardRef} from 'react';

const {TextArea} = Input;

interface TextareaFieldProps {
  className?: string;
  maxLength?: number;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  size?: SizeType;
  testId?: string;
  value?: string | number;
}

const TextareaField = forwardRef<TextAreaRef, TextareaFieldProps>(
  (
    {className, maxLength, name, onChange, placeholder, size, testId, value},
    ref
  ) => (
    <TextArea
      className={className}
      data-testid={testId}
      maxLength={maxLength}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
      showCount
      size={size}
      value={value}
    />
  )
);

export {TextareaField};
