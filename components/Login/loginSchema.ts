import {Joi, requiredEmail, requiredPassword} from '../../util/validations';
import {LoginModel} from './models/LoginModel';

const loginSchema = Joi.object<LoginModel>({
  email: requiredEmail(),
  password: requiredPassword(),
});

export default loginSchema;
