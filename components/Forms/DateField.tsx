import {DatePicker} from 'antd';
import localeDE from 'antd/es/date-picker/locale/de_DE';
import {SizeType} from 'antd/lib/config-provider/SizeContext';
import moment, {Moment} from 'moment';
import React, {forwardRef} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import 'moment/locale/de';

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;

interface DateFieldProps {
  prefixIcon?: React.ReactNode;
  placeholder?: string;
  size?: SizeType;
  value?: string;
  disabled?: boolean;
  onChange?: (value: Moment | null, dateString: string) => void;
  testId?: string;
}

const DateField = forwardRef<any, DateFieldProps>(
  ({onChange, placeholder, size, disabled, testId, value}, ref) => {
    const {i18n} = useTranslation();
    const lang = i18n.language;

    return (
      <StyledDatePicker
        data-testid={testId}
        disabled={disabled}
        format="yyyy-MM-DD"
        inputReadOnly
        locale={lang === 'de' ? localeDE : undefined}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        size={size}
        value={value ? moment(value) : undefined}
      />
    );
  }
);

export {DateField};
