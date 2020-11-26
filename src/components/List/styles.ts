import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 50px;
  width: 70%;

  background-color: #1a1a1d;
  color: #fff;
  margin: 10px auto;

  border-radius: 10px;

  &:hover {
    border: 2px solid #27ae60;
    opacity: 0.8;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  cursor: pointer;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Flag = styled.img`
  width: 30px;
  height: 30px;
`;

export const Text = styled.h4`
  font-weight: bold;

  margin-left: 20px;
`;
