import React from 'react'
import { TopHeader } from '../top-header'
import { StyledAppWrapper } from './app.style'
import SearchIcon from '@material-ui/icons/Search'

export const App = () => {
  return (
    <StyledAppWrapper>
      <h1>Linkedin Clone</h1>
      <div className="header__left">
        <img src="" alt=""/>
      </div>
      <div className="header__right">
        <SearchIcon />
        <input type="text"/>

      </div>
      <TopHeader />
    </StyledAppWrapper>
  );
}

