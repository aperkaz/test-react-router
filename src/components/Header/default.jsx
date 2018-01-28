import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    background-color: grey;
    text-align: center;
   
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
   font-size: 1.5em;
`;

const FlexContainer = styled.div`
    display: flex;
`;

const FlexElement = styled.div`
    flex: 1;
`;

const Header = ({ text, children }) => (
    <Wrapper>
        <Title>{text}</Title>
        <FlexContainer>
            {children.map((child, index) => (
                <FlexElement key={index}>{child}</FlexElement>
            ))}
        </FlexContainer>
    </Wrapper>
);

export default Header;