import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { Creators as MarkersActions } from "../../store/ducks/markers";

import {
  Overlay,
  Modal,
  Title,
  CancelButton,
  SaveButton,
  ContainerButtons
} from "./styles";

class Popup extends Component {
  state = {
    userGithub: ""
  };

  setUserGithub = e => {
    this.setState({ userGithub: e.target.value });
  };

  saveUserGithub = () => {
    const { userGithub } = this.state;
    const { addMarkers, dataClickMap, closePopup } = this.props;
    const [longitude, latitude] = dataClickMap.lngLat;

    if (userGithub === "") return;

    closePopup();
    addMarkers({ longitude, latitude });
    this.setState({ userGithub: "" });
  };

  cancelPopup = () => {
    const { userGithub } = this.state;
    const { closePopup } = this.props;
    if (userGithub === "") {
      closePopup();
    } else {
      this.setState({ userGithub: "" }, () => {
        closePopup();
      });
    }
  };

  render() {
    const { userGithub } = this.state;
    const { visiblePopup } = this.props;

    return (
      <Overlay visiblePopup={visiblePopup ? "flex" : "none"}>
        <Modal>
          <Title>Adicionar novo usuário</Title>
          <input
            placeholder="Usuário do Github"
            type="text"
            value={userGithub}
            onChange={this.setUserGithub}
          />
          <ContainerButtons>
            <CancelButton onClick={this.cancelPopup}>Cancelar</CancelButton>
            <SaveButton onClick={this.saveUserGithub}>Salvar</SaveButton>
          </ContainerButtons>
        </Modal>
      </Overlay>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MarkersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
