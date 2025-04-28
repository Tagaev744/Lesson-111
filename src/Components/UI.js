import styled from 'styled-components';

export const PageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 8px 16px;
  border: 1px solid gray;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Input = styled.input`
  margin: 10px;
  padding: 8px;
  font-size: 16px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;