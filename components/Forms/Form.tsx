import {Checkbox} from './Checkbox';
import {CountrySelectField} from './CountrySelectField';
import {DateField} from './DateField';
import {FormControl} from './FormControl';
import {InputField} from './InputField';
import {PasswordField} from './PasswordField';
import {RadioField} from './RadioField';
import {SelectOptionField} from './SelectOptionField';
import {SliderField} from './SliderField';
import {TextareaField} from './TextareaField';

interface FormProps {
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  testId?: string;
}

const Form: React.FC<FormProps> = ({className, onSubmit, children, testId}) => (
  <form className={className} data-testid={testId} onSubmit={onSubmit}>
    {children}
  </form>
);

export {
  Checkbox,
  CountrySelectField,
  DateField,
  Form,
  SliderField,
  FormControl,
  InputField,
  PasswordField,
  RadioField,
  SelectOptionField,
  TextareaField,
};
