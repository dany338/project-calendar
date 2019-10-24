import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from './styled';

const Event = (props) => {
  return (
    <Container>
    </Container>
  )
}

Event.propTypes = {

};

const mapStateToProps = state => {
  return null
};

const mapDispatchToProps = dispatch => {
  return null
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Event));
