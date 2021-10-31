import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-black text-center py-4'>
            <span>Copyright © <span style={{ color: '#12C1AD' }}>Tarunno</span> . All Rights Reserved</span>
        </div>
    );
};

export default Footer;