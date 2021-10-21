import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  min-height: 300px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;
export const Wrapper = styled.div`
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: 2px solid #fff;
  border-bottom: 2px solid #13161f;
  padding: 5px 20px;
  margin-bottom: 20px;
  transition: 0.2s;
  :focus,
  :focus-visible,
  :focus-within {
    border: 2px solid blue;
    border-radius: 5px;
  }
`;
export const Submit = styled.input`
  width: 100%;
  height: 40px;
  background: #fd5c63;
  border-radius: 20px;
  color: #fff;
  font-size: 1.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background: #007fff;
  }
`;

export const Error = styled.div``;

export const Loading = styled.div`
  width: 100%;
  max-width: 100px;
  height: 100px;
`;

export const Result = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #13161f;
  border-radius: 30px;
`;
