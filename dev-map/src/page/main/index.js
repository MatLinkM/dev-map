import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as MarkerActions } from "../../store/ducks/markers";
import "mapbox-gl/dist/mapbox-gl.css";

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -5.821855,
      longitude: -35.228174,
      zoom: 13
    }
  };

  handleClickMap = e => {
    const [longitude, latitude] = e.lngLat;
    this.props.addMarkers({ longitude, latitude });
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleClickMap}
        onViewportChange={viewport => this.setState({ viewport })}
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
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MarkerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
