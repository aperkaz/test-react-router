import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';
import Home from '../Page/Home';
import About from '../Page/About';

const FlexWrapper = styled.div`
     display: flex;
     flex-flow: column;
     height: 100%;
`;

const RouteWrapper = styled.div`
    flex: 1;
`;

const FooterWrapper =  styled.footer`
    background-color: grey;
    text-align: center;
    color: white;
`;

const Router = () => (
  <FlexWrapper>
      <RouteWrapper >
        <BrowserRouter >
            <FlexWrapper>
                <div>
                    <Header text={'test-react-router'} >
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                    </Header>
                </div>
                <RouteWrapper>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                </RouteWrapper>
            </FlexWrapper>
        </BrowserRouter>
      </RouteWrapper>
      <FooterWrapper>
          Footer
      </FooterWrapper>
  </FlexWrapper>
);

export default Router;
