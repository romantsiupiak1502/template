import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { Button, TextButton } from '../../components';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  padding-top: 32px;
`;

const ButtonStyled = styled(Button)`
  background-color: ${ ({ theme }) => theme.colors.red};
  margin-left: 16px;
`;

interface ILogoutModalContentProps {
  onCancelClick: () => void;
  onConfirmClick: () => void;
}

export const LogoutModalContent: React.FC<ILogoutModalContentProps> = props => {
  const { onCancelClick, onConfirmClick } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
        <TextButton text={t("CANCEL")} onClick={ onCancelClick }/>
        <ButtonStyled text={t("CONFIRM")} onClick={ onConfirmClick }/>
    </Wrapper>
  );
};
