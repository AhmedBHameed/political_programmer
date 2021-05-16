import {MenuOutlined} from '@ant-design/icons';

import {Button} from 'antd';
import styled from 'styled-components';

const BurgerIcon = styled(MenuOutlined)`
  margin-top: 0.2rem;
  font-size: 2rem;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 0;
`;

interface BurgerButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({onClick}) => (
  <StyledButton
    data-testid="burger-button"
    icon={<BurgerIcon style={{fontSize: '1.4rem'}} />}
    onClick={onClick}
    type="text"
  />
);

export default BurgerButton;
