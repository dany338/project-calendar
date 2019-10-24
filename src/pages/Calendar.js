import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* Components */
import Month from '../Month';
import Event from '../Event';

/* Style Components */
import { Container } from './styled';

class Calendar extends Component {
  state = {
    classError: '',
  }

  componentDidMount() {
    const { getMyInformation } = this.props
    getMyInformation()
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, getMyInformation } = this.props
    if(prevProps.query !== query) {
      getMyInformation()
    }
  }

  render() {
    return (
      <Container>
        <Month />
        <Event />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  query: state.filtersMyReducer.filter.query,
  myInformation: state.personalsReducer.data,
  loading: state.personalsReducer.loading,
  error: state.personalsReducer.error,
})

const mapDispatchToProps = dispatch => ({
  getMyInformation: () => dispatch(getMyInformationRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Calendar));
