import React, { Component } from 'react';
import PlaceScreen from './Places';
import { connect } from 'react-redux';

class PlacesContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log(this.props)
      }
    render() {
        return <PlaceScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        loginScreen: state
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacesContainer);
