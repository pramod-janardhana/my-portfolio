import React from 'react';
import { Flex } from '@chakra-ui/react';
import ExperienceSectionHeader from '../components/ExperienceSectionHeader';
import Internship from '../components/Internship';
import Fulltime from '../components/Fulltime';
import sideImage from '../drawables/experience/side-image.svg';
import './Experience.css';

function Experience() {

    const myInternships = [<Internship/>, <Internship/>, <Internship/>];

    return (
        <>
        <Flex id="experience-head">
            <div id="experience-title">EXPERIENCE</div>
        </Flex>
        <div id="experience-body">
            <div>
                <ExperienceSectionHeader title="INTERNSHIP"/>
                <Flex id="internship-body">
                    <img src={sideImage} id="side-image"/>
                    <Flex id="internships">
                        {myInternships}
                    </Flex>
                </Flex>
            </div>
            <div>
                <ExperienceSectionHeader title="FULLTIME"/>
                <Flex id="full-time-body">
                    <Fulltime />
                </Flex>
            </div>
            
        </div>
        </>
    );
}

export default Experience;