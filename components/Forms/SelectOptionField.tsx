import {Select} from 'antd';
import {SizeType} from 'antd/lib/config-provider/SizeContext';
import {LabeledValue, OptionType, RefSelectProps} from 'antd/lib/select';
import React, {forwardRef} from 'react';

interface SelectOptionFieldProps {
  showSearch?: boolean;
  placeholder?: string;
  onChange?: (selectedValue: LabeledValue, option?: OptionType) => void;
  value?: LabeledValue;
  disabled?: boolean;
  defaultValue?: LabeledValue;
  options: LabeledValue[];
  className?: string;
  testId?: string;
  optionsTestId?: string;
  size?: SizeType;
  ref?: React.ForwardedRef<RefSelectProps>;
}

const SelectOptionField = forwardRef<RefSelectProps, SelectOptionFieldProps>(
  (
    {
      className,
      onChange,
      options,
      placeholder,
      showSearch,
      size,
      testId,
      value,
      defaultValue,
      disabled,
      optionsTestId,
    },
    ref
  ) => (
    <Select
      className={className}
      data-testid={testId}
      defaultValue={defaultValue}
      disabled={disabled}
      filterOption={(input, option) =>
        option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      labelInValue
      onChange={(selectedValue) => onChange?.(selectedValue)}
      placeholder={placeholder}
      ref={ref}
      showSearch={showSearch}
      size={size}
      /**
       * To show placeholder correctly "undefined" value must be set.
       * @see https://github.com/ant-design/ant-design/issues/16417#issuecomment-489177065
       */
      value={value || undefined}
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

export {SelectOptionField};
