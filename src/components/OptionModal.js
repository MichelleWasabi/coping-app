import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleModalClose}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
        <h3 className="modal__title">Selected Coping Mechanism</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleModalClose}>Get Started</button>
    
    </Modal>
    )

export default OptionModal;