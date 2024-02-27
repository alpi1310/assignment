import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className='footer_section'>
            <div className='number'>
                <span><FontAwesomeIcon icon={faPhone} /></span>
                <span>Toll free 1800 200 1234</span>
            </div>
            <div className='facebook'>
                <span><FontAwesomeIcon icon={faFacebook} /></span>
                <span>www.facebook.com/cripumps</span>
            </div>
            <div className='www'>
                <span><FontAwesomeIcon icon={faGlobe} /></span>
                <span>www.crigroups.com</span>
            </div>
        </div>
    )
}

export default Footer;

