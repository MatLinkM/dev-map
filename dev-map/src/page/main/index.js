import React, { Component, Fragment } from "react";
import MapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as MarkerActions } from "../../store/ducks/markers";
import { Creators as ViewportActions } from "../../store/ducks/viewport";
import "mapbox-gl/dist/mapbox-gl.css";

import Popup from "../../components/popup";

class Main extends Component {
  state = {
    visiblePopup: false,
    dataClickMap: null
  };

  handleClickMap = e => {
    this.setState({
      visiblePopup: true,
      dataClickMap: e
    });
  };

  closePopup = () => {
    this.setState({ visiblePopup: false });
  };

  render() {
    const { visiblePopup, dataClickMap } = this.state;
    const { viewport } = this.props;

    return (
      <Fragment>
        <MapGL
          {...viewport}
          onClick={this.handleClickMap}
          onViewportChange={viewport => this.props.changeViewport({ viewport })}
          mapboxApiAccessToken={
            "pk.eyJ1IjoibWF0bGlua20iLCJhIjoiY2ptMWJ4ZW5sMGs3YzNwcjVndXp5cnZ4ayJ9.rYOKiMdCadpEeV9_WTryWg"
          }
        >
          {this.props.markers != null
            ? this.props.markers.map(item => (
                <Marker
                  key={item.id}
                  latitude={item.latitude}
                  longitude={item.longitude}
                  onClick={this.handleClickMap}
                  captureClick={true}
                >
                  <span>AKI</span>
                </Marker>
              ))
            : null}
        </MapGL>
        <Popup
          visiblePopup={visiblePopup}
          dataClickMap={dataClickMap}
          closePopup={this.closePopup}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers,
  viewport: state.viewport
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MarkerActions, ...ViewportActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
