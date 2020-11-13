import styled from 'styled-components';

export const Container = styled.div`
  width: 321px;
  height: auto;
  box-shadow: 0 1px 3px -1px rgba(32, 31, 31, 0.6);
  color: #fff;

  background-color: #1a1a1d;

  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;

  margin: 0;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const Body = styled.div`
  margin-top: 20px;
`;
