import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 300px;
  height: 150px;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    width: 100%;
    height: 35px;
    padding: 0 10px;
    font-size: 12px;
    border: solid 1px #ededed;
    border-radius: 5px;
  }

  input::placeholder {
    color: #e3e3e3;
  }
`;

export const Title = styled.h2`
  font-size: 14px;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ContainerButtons = styled.div`
  display: flex;
`;

export const CancelButton = styled.button`
  width: 120px;
  height: 35px;
  margin: 0 10px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  border: none;
  background-color: darkgray;
`;

export const SaveButton = styled(CancelButton)`
  background-color: rgba(40, 167, 69, 0.7);
`;
