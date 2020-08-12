import React from 'react';
import {
  Box,
  Flex,
  Text
} from '@chakra-ui/core';
import { faPhone, faEnvelope, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const NavBar1 = () =>{
    return(
        <Flex align="center" justify="center" 
            fontWeight="bold"
            fontSize={['2vw','1.7vw','1.4vw','1vw']}
            color="white"
            p={2}
        >
            <Flex bg="none" align="flex-end" mx="5%">
              <Text>Get In Touch With Us <FontAwesomeIcon icon={faCaretRight}/></Text>
            </Flex>
            <Flex bg="none" size="auto" align="center" justify="center" mx="5%">
              <Text textAlign="center" bg="none">
              <FontAwesomeIcon icon={faPhone} />
                +234 818 2017 1037
              </Text>
            </Flex>
            <Box mx="5%" w={250}>
              <pre>
                <Text bg="none">
                    <FontAwesomeIcon icon={faEnvelope} /> info@vizonresearch.com
                </Text>
              </pre>
            </Box>
            <Box fontSize="25px" textAlign="left">
              <pre>
                <FontAwesomeIcon icon={faTwitterSquare} />  <FontAwesomeIcon icon={faLinkedin} />
              </pre>
            </Box>
          </Flex>
    )
}

export default NavBar1;