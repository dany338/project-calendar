import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Dispatchers */
import { eventActiveModal } from '../../dispatchers';

import { Container } from './styled';

const Event = ({ active, onEventActiveModal }) => {
  const handleCloseModal = (e) => { onEventActiveModal(); e.stopPropagation(); };

  useEffect(() => {
    console.log('useEffect Event', active);
  }, [active]);

  return (
    <Container>
      <div className={`modal ${active && ('is-active')}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Event Register</p>
            <button type="button" className="delete" aria-label="close" onClick={(e) => handleCloseModal(e)}></button>
          </header>
          <section className="modal-card-body">
            {'Formulario con campos....'}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button type="button" className="button" onClick={(e) => handleCloseModal(e)}>Cancel</button>
          </footer>
        </div>
      </div>
    </Container>
  )
}

Event.propTypes = {
  active: PropTypes.oneOf([true, false]).isRequired,
  onEventActiveModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  active: state.get('eventReducer').get('active')
});

const mapDispatchToProps = dispatch => ({
  onEventActiveModal: () => dispatch(eventActiveModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Event));
