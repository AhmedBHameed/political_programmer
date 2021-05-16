import {Form} from 'antd';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {mediumGathomFontStyle} from '../shared/sharedStyles';

const FormField = styled(Form.Item)`
  flex-direction: column;
  margin-bottom: 0.5rem;
  .ant-form-item-label {
    ${mediumGathomFontStyle}
    padding: 0;
    text-align: left;
    label:after {
      content: '';
    }
  }
`;

export const FormHelperText = styled.small`
  display: flex;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.red};
`;

interface FormControlProps {
  label?: React.ReactNode;
  className?: string;
  error?: string;
}

const FormControl: React.FC<FormControlProps> = ({
  children,
  className,
  label,
  error,
}) => {
  const {t} = useTranslation();

  return (
    <FormField className={className} label={label}>
      {children}
      <FormHelperText data-testid={error ? 'input-error' : ''}>
        {error ? t(error) : <>&nbsp;</>}
      </FormHelperText>
    </FormField>
  );
};

export {FormControl};
