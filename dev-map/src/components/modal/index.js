import React from "react";

import {
  Overlay,
  Modal,
  Title,
  CancelButton,
  SaveButton,
  ContainerButtons
} from "./styles";

const Popup = () => {
  return (
    <Overlay>
      <Modal>
        <Title>Adicionar novo usuário</Title>
        <input placeholder="Usuário do Github" />
        <ContainerButtons>
          <CancelButton>Cancelar</CancelButton>
          <SaveButton>Salvar</SaveButton>
        </ContainerButtons>
      </Modal>
    </Overlay>
  );
};

export default Popup;
