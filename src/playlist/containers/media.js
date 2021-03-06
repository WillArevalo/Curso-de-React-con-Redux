import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';

class MediaContainer extends Component {
    render(){
        return <Media {...this.props.data.toJS()}/>
    }
}
// Se mapea el estado y a propiedades para enviarselas al componente
function mapStateToProps(state, props){
    return {
        data: state.get('data').get('entities').get('media').get(props.id),
    }
}

export default connect(mapStateToProps)(MediaContainer);