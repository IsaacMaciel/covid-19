import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 10px;

  padding: 10px;

  height: 50px;
  width: 50%;

  background-color: #1a1a1d;

  margin-bottom: 20px;

  color: #fff;
  font-weight: bold;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const InputSearch = styled.input`
  width: 90%;
  height: 50%;
  background-color: #1a1a1d;
  color: #fff;

  border-radius: 5px;

  text-align: center;
  /* border-color: #202124; */
  border: 2px solid #202124;
  /* outline: 1px solid green; */
  /* border-color: #fff; */
`;
