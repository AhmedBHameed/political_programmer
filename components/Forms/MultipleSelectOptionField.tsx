import {Select} from 'antd';
import {SizeType} from 'antd/lib/config-provider/SizeContext';
import {LabeledValue, OptionType, RefSelectProps} from 'antd/lib/select';
import {forwardRef} from 'react';

interface MultipleSelectOptionFieldProps {
  placeholder?: string;
  onChange?: (selectedValue: (string | number)[], option?: OptionType) => void;
  value?: (string | number)[];
  disabled?: boolean;
  defaultValue?: string[];
  options: LabeledValue[];
  className?: string;
  testId?: string;
  optionsTestId?: string;
  size?: SizeType;
  ref?: React.ForwardedRef<RefSelectProps>;
}

const MultipleSelectOptionField = forwardRef<
  RefSelectProps,
  MultipleSelectOptionFieldProps
>(
  (
    {
      className,
      onChange,
      options,
      placeholder,
      size,
      testId,
      value,
      defaultValue,
      optionsTestId,
      disabled,
    },
    ref
  ) => (
    <Select
      allowClear
      className={className}
      data-testid={testId}
      defaultValue={defaultValue}
      disabled={disabled}
      mode="multiple"
      onChange={(selectedValue) => onChange?.(selectedValue)}
      placeholder={placeholder}
      ref={ref}
      showArrow
      showSearch={false}
      size={size}
      value={value}
    >
      {options.map((option, index) => (
        <Select.Option
          data-testid={optionsTestId}
          key={index.toString()}
          value={option.value}
        >
          {option.label}
        </Select.Option>
      ))}
    </Select>
  )
);

export default MultipleSelectOptionField;
