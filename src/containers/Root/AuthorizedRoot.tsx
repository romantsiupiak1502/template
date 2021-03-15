import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom'

import { styled } from '../../styles';
import { useModal } from '../../hooks';
import { languageService } from '../../services';
import { onSearchByNameChangeAction, onSearchByEmailChangeAction, sortByNameAction, sortByEmailAction } from '../../store/users';

import { UsersContainer } from '../Users';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { LogoutModalContent } from './LogoutModalContent';
import { LanguageModalContent } from './LanguageModalContent';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
`;

export const AuthorizedRoot: React.FC = () => {
  const dispatch = useDispatch();
  const { openModal: openLogoutModal, closeModal: closeLogoutModal, Modal: LogoutModal } = useModal();
  const { openModal: openLanguageModal, closeModal: closeLanguageModal, Modal: LanguageModal } = useModal();

  return (
    <Wrapper>
      <Header
        onLogoutClick={ openLogoutModal }
        onChangeLanguage={ openLanguageModal }
        userName='Roman Tsiuapiak'
      />
      <ContentContainer>
        <Switch>
          <Route path='/' component={ UsersContainer }/>
        </Switch>
        <Sidebar
          onSearchByNameChange={ (text) => dispatch(onSearchByNameChangeAction(text)) }
          onSearchByEmailChange={ (text) => dispatch(onSearchByEmailChangeAction(text)) }
          onSortByNameClick = { () => dispatch(sortByNameAction()) }
          onSortByEmailClick = { () => dispatch(sortByEmailAction()) }
          onAddUserClick={ () => {} }
        />
      </ContentContainer>
      <LogoutModal title='Do you want to logout?'>
        <LogoutModalContent onCancelClick={ closeLogoutModal } onConfirmClick={ closeLogoutModal }/>
      </LogoutModal>
      <LanguageModal title='Choose language'>
        <LanguageModalContent onLanguageChangeClick={ language => {
          languageService.changeLanguage(language);
          closeLanguageModal();
        } }
        />
      </LanguageModal>
    </Wrapper>
  );
};
