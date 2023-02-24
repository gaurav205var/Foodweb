import { Fragment } from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

const BackDrop=(props)=>{
    return <div className='backdrop' onClick={props.onHide}/>;
};

const ModalOverlay=(props)=>{
    return (
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    ); 
};

const portalElement = document.getElementById('overlays');

const Modal=(props)=>{
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onHide={props.onHide}/>, portalElement)}

        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        
    </Fragment>
};


export default Modal;