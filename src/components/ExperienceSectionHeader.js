import React from 'react';
import { Flex } from '@chakra-ui/react';
import './ExperienceSectionHeader.css';

const ExperienceSectionHeader = ({title}) => {
    return (
        <Flex className="experience-section-header">
            <hr/>
            <div className="experience-section-header-title">{title}</div>
            <hr/>
        </Flex>
    );
}

export default ExperienceSectionHeader;