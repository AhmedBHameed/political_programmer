import {InputNumber} from 'antd';
import {SizeType} from 'antd/lib/config-provider/SizeContext';
import {forwardRef} from 'react';

interface NumberFieldProps {
  placeholder?: string;
  className?: string;
  name?: string;
  size?: SizeType;
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  testId?: string;
}

const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  (
    {name, className, min, max, placeholder, size, value, onChange, testId},
    ref
  ) => (
    <InputNumber
      className={className}
      data-testid={testId}
      max={max}
      min={min}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
      size={size}
      type="number"
      value={value}
    />
  )
);

export {NumberField};
