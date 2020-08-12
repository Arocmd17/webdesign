import React from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  Image
} from '@chakra-ui/core';
const NavBar = () =>{
    const content = ['HOME','ABOUT US','SERVICES','OUR WORK','CONTACT','REPORTS']; 
    return(
        <Flex align="center" justify="center" 
            fontWeight="bold"
            fontSize={['2vw','1.7vw','1.4vw','1vw']}
            mt={4}
            shadow="md"
            >
            <Box>
                <Image src="picture/vision.png" alt="vision" w='100%' h='100%'/>
            </Box>
            {
                content.map(item =>{
                    return(
                        <Flex key={content.indexOf(item)}
                            bg="none" 
                            size="auto" 
                            align="center" 
                            justify="center"
                            mx="2%"
                            >
                            <Text textAlign="center" bg="none">
                                <Link to="#">{item}</Link>
                            </Text>
                        </Flex>
                    )
                })
            }
        </Flex>
    )
}
export default NavBar