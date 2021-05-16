import {SizeType} from 'antd/lib/config-provider/SizeContext';
import Select, {RefSelectProps} from 'antd/lib/select';
import {
  getAlpha2Code,
  getName,
  getNames,
  registerLocale,
} from 'i18n-iso-countries';
import countriesDeJson from 'i18n-iso-countries/langs/de.json';
import countriesEnJson from 'i18n-iso-countries/langs/en.json';
import {forwardRef} from 'react';
import {useTranslation} from 'react-i18next';

registerLocale(countriesEnJson);
registerLocale(countriesDeJson);

function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

interface CountrySelectFieldProps {
  onChange?: (selectedValue: string) => void;
  value?: string;
  className?: string;
  size?: SizeType;
  ref?: React.ForwardedRef<RefSelectProps>;
  placeholder?: string;
  optionTestId?: string;
}

/**
 * We did not use `SelectOptionField` because passing nested ref is inefficient
 * which cause error in Controller of `react-hook-form`.
 */
const CountrySelectField = forwardRef<RefSelectProps, CountrySelectFieldProps>(
  ({value, onChange, size, className, placeholder, optionTestId}, ref) => {
    const {i18n} = useTranslation();
    const lang = i18n.language;

    const getCountryName = (countryAlpha2Code: string) =>
      getName(countryAlpha2Code, lang, {
        select: 'official',
      });

    return (
      <Select
        className={className}
        data-testid="country-select-field"
        filterOption={(input, option) =>
          option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onChange={(selectedValue) =>
          onChange && onChange(getAlpha2Code(selectedValue, lang))
        }
        placeholder={placeholder}
        ref={ref}
        showSearch
        size={size}
        /**
         * To show placeholder correctly "undefined" value must be set.
         * @see https://github.com/ant-design/ant-design/issues/16417#issuecomment-489177065
         */
        value={value ? getCountryName(value) : undefined}
      >
        {Object.keys(getNames(lang, {select: 'official'})).map(
          (countryAlpha2Code: string, index: number) => {
            const countryName = getCountryName(countryAlpha2Code);

            return (
              <Select.Option
                data-testid={optionTestId}
                key={index.toString()}
                value={countryName}
              >
                <>
                  <span>{countryToFlag(countryAlpha2Code)} </span>
                  {countryName}
                </>
              </Select.Option>
            );
          }
        )}
      </Select>
    );
  }
);

export {CountrySelectField};
