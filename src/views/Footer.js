import React from 'react';
import { Flex } from '@chakra-ui/layout';
import FooterSocialLinks from '../components/FooterSocialLinks';
import FooterNavBar from '../components/FooterNavBar';
import FooterSignature from '../components/FooterSignature';
import './Footer.css';

function Footer() {
    return (
        <Flex id="footer">
            <FooterSocialLinks />
            <FooterNavBar />
            <hr />
            <FooterSignature />
        </Flex>
    );
}

export default Footer;