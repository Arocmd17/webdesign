import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  Box,
  Flex,
  Text,
  Link,
  Stack,
  Grid,
  Image,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  VStack,
  SimpleGrid
} from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import { Button } from "@chakra-ui/core";
import NavBar1 from './components/NavBar1'
import NavBar from './components/NavBar'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Grid gap={1} w="100%">
        <Box w="100vw" h="12" bg="red.600" pos="fixed" zIndex={2}>
          <NavBar1 w="100vw"/>
        </Box>
        <Box w="100vw" h="24" bg="white" pos="fixed" zIndex={2} top="12">
          <NavBar/>
        </Box>
        <Grid w="100vw" gap={1} mt="24" >
          <Header/>
          <Intro/>
        </Grid>
        <SectionOne/>
        <SectionTwo/>
        <SectionFour/>
        <VStack  mx="auto" gap={2}
        my ={4} >
          <Box color="red.600">
            <Text 
                fontWeight="bold"
                fontSize={30}
                letterSpacing="wide"
                >CLIENTS & PARTNERS</Text>
          </Box>
          <SimpleGrid 
          columns={[1,2,3,4]} 
            w={["80vw",350,"100%","100%"]} 
            spacing={2} >
              <Image src="/picture/wb.png" alt="EU-BASELINE" h={150}/>
              <Image src="/picture/mikano.png" alt="MIKANO" h={150}/>
              <Image src="/picture/lg-state.png" alt="Lagos State" h={150}/>
              <Image src="/picture/npc.png" alt="NPC" h={150}/>
          </SimpleGrid>
        </VStack>
        <Footer/>
      </Grid>
    </ChakraProvider>
  );
}
export default App;

const Header = () =>{
  return(
    <Box w="100vw" h="400px" 
      backgroundImage="url('/picture/new_york.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      p={10}
    >
           
      <Text as="h1"
      fontWeight="bold"
      fontSize={40}
      letterSpacing="wide"
      color="white"
      mt={5}
      >
        DELIVERING QUALITY 
        <br/>
        RESEARCH ACROSS AFRICA
      </Text>
      <Text
      fontWeight="bold"
      fontSize={20}
      color="white"
      mx={4}
      >
        Hyperlocal Consumer Insights | World class Data Technology | Indepth Market Intelligence & Analytics
      </Text>
    </Box>
  )
}
const Intro = () =>{
  return(
      <Box w="60vw"
             mx="auto" mt={-10}
             bg="white"
             >
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} p={4}>
              <Text fontSize="20px">
              <b>VIZON Research</b> is Nigeria’s leading Market and Social Research Agency. 
              </Text>
              <Text mt={2} fontSize="20px">
              With an active presence in <b>24 African countries</b>, we provide high quality geospatial and field data services to multinational organisations, investors, financial institutions, agencies and consulting firms.
              </Text>
              <Text mt={2} >
              For proprietary baseline surveys and customized feasibility studies, contact us via +2348182071037 or info@vizonresearch.com
              </Text>
          </Box>
      </Box>
      
  )
}

const SectionOne = () =>{
  const sectionData = [
    {
      picture:'url(/picture/energy.png)', 
      title: 'ENERGY'
    },
    {
      picture:'url(/picture/retail.png)', 
      title: 'RETAIL'
    },
    {
      picture:'url(/picture/technologies.png)', 
      title: 'TECHNOLOGY'
    },
    {
      picture:'url(/picture/agriculture.png)', 
      title: 'AGRICULTURE'
    },
    {
      picture:'url(/picture/advertise.png)', 
      title: 'ADVERTISING'
    },
    {
      picture:'url(/picture/developmental.png)', 
      title: 'DEVELOPMENTAL'
    },
  ]
  return(
    <VStack mx="auto" w="80vw" >
      <Box>
        <Text 
            fontWeight="bold"
            fontSize={30}
            letterSpacing="wide"
            >SECTORS & INDUSTRIES</Text>
      </Box>
        <SimpleGrid 
        columns={[1,1,2,3]} 
        w={["80vw",350,"100%","100%"]} 
        spacing={10} 
        >
          {
            sectionData.map((item)=>{
              return(
                <Box h={250}  
                bgImage={item.picture}
                bgPos="center" bgRepeat="no-repeat"
                 my="2px"
                fontWeight="bold"
                color="white"
                key={sectionData.indexOf(item) +1}
                >
                  <Box h={70} bg='gray.600' pos="relative" bottom="-11.4rem" 
                  opacity="0.8"
                  textAlign="left"
                  px={4}
                  lineHeight={1}
                  >
                    <Text fontSize={20} >
                    {item.title}
                    </Text>
                    <Link fontSize={10} >FIND OUT MORE</Link><br/>
                    < FontAwesomeIcon icon={faLongArrowAltRight} fontSize={10}/>
                  </Box>
                </Box>
              )
            })
          }
        </SimpleGrid>
    </VStack>
  )
}

const SectionTwo = () =>{
  return(
    <SimpleGrid columns={[1,1,2,2]}  gap={1} mx='10%' >
          <Box bg="blue.800" w={450} h={400} p="20" color="white" round="full" borderRadius="full"
            textAlign={[ 'left', 'center' ]} >
              <Text >
                Our market insights and databases are powered by innovative technology and a field unit of 5000 data collectors, delivering real-time competitive intelligence to our clients.
                <br/>
                <br/>
              </Text>
              <Text>
                  <b>VIZON</b>'s team of research consultants, data scientists and analysts are internationally certified by the <b>European Society of Opinion Polls and Market Research</b> (ESOMAR).
              </Text>
          </Box>
          <Box w='100%' h={400} bg="gray.300">
            <Image src="/picture/africa.png" alt="africa" w='100%' h="100%"/>
          </Box>
        </SimpleGrid>
  )
}

const SectionFour = () =>{
  const sectionData = [
    {
      picture:"/picture/eu-baseline.png",
      alt:"eu-baseline",
      title: "EU-BASELINE",
      subtitle:"VIZON leads Data Analytics Unit in European Union Project",
      text: `In partnership with the National Population Commission (NPopC), 
      we sampled 15,000 respondents across 7 states in Nigeria on a 
      European Union funded survey, delivering high quality data processing, 
      analytics and impact assessment services on the project.`
    },
    {
      picture:"/picture/survey.png",
      alt:"lbs-m&e survey",
      title: "LBS-M&E SURVEY",
      subtitle:"VIZON evaluates financial inclusion of populace across Nigeria",
      text: `We worked as lead data consultants on a nationwide monitoring and evaluation project launched by the World Bank, processing thousands of datasets to distill the level of financial  inclusion of people resident in states across Nigeria.`
    },
    {
      picture:"/picture/faisible.png",
      alt:"feasibility study",
      title: "FEASIBILITY STUDY",
      subtitle:"VIZON researches market potential and sector opportunities for international investore",
      text: `As part of our client's go-to-market strategy, VIZON uncovered industry growth opportunities within the auto-manufacturing sector across subSaharan Africa and mapped end to end blueprints for new market entry, stakeholder engagement and sales.`
    },
  ]
  return(
    <Box mx="auto">
      <Box>
        <Text 
            fontWeight="bold"
            fontSize={30}
            letterSpacing="wide"
            >RECENT ACTIVITIES</Text>
      </Box>
      <SimpleGrid columns={[1,1,2,3]} 
        w={["80vw",350,"100%","100%"]} 
        spacing={10} 
        >
          {
            sectionData.map((item)=>{
              return(
                <Box w= "100%" maxW={350}
                minH={520} bg="white"
                shadow="md"
                borderWidth="1px"
                key={sectionData.indexOf(item) +1}
                >
                <Image src={item.picture} alt={item.alt} w='100%'/>
                <Box>
                  <Text bg="white" w="50%" mt="-10px" pos="relative">{item.title}</Text>
                  <Box p={4} h={270}>
                    <Text color="red.600"  mt="5px">
                    {item.subtitle}
                    </Text>
                    <Text   mt="5px">
                      {item.text}
                    </Text>
                  </Box >
                  <Button bg="blue.600" color="white" pos="relative" left="20" mb={1}>Read more</Button>
                </Box>
              </Box>
            )
          })
          }
        </SimpleGrid>
    </Box>
    

  )
}

const Footer = () =>{
  return(
    <Box w="100vw" h="100" bg="red.600" color="white">
          <Box textAlign="center">
            <Text 
            fontWeight="bold"
            fontSize={30}
            letterSpacing="wide"
            
            >CONTACT US</Text>
          </Box>
          <Flex direction={['column','column','row','row']}>
            <Box w="80%" pl="20%" >
                <Text><b>REQUEST A QUOTE</b></Text>
                <FormControl boarderradius>
                  <Stack spacing={1} borderRadius="0" >
                    <FormLabel htmlFor="email">Please fill out the form</FormLabel>
                    <Input type="text" id="name" placeholder="Name" required borderRadius="0" color="black"/>
                    <Input type="email" id="email" aria-describedby="email-helper-text"  placeholder="Email" 
                        color="black" borderRadius="0"/>
                    <Input type="phone" id="phone" placeholder="Phone" required borderRadius="0" color="black"/>
                    <Input type="text" id="subject" placeholder="Subject" required borderRadius="0" color="black"/>
                    <Textarea placeholder="Message" borderRadius="0" color="black"/>
                  </Stack>
                </FormControl>
                <Box textAlign="left" mr="0">
                  <Button  bg="white" 
                    color="black" 
                    mt={2}>
                      Send
                  </Button>
                </Box>
                
            </Box>
            <Box w="80%" textAlign="left" pl="2%" pr="10%" mb={-1} >
              <pre>
                <Text>
                  <b>Lagos Office</b><br/>
                  <br/>
                  Wing A, 12th Floor,<br/>
                  Elephant House, Marina,<br/>
                  Lagos Island, Nigeria.<br/>
                  <br/>
                  <b>Tel:</b> +234-818-207-1037<br/>
                  <b>Email:</b> info@vizonresearch.com<br/>
                  <br/>
                  <b>Follow us</b>
                  <br/>
                    <FontAwesomeIcon icon={faTwitterSquare} />  <FontAwesomeIcon icon={faLinkedin} />
                  <b>Copyright 2018: VIZON Research Limited. All rights reserved</b>
                </Text>
              </pre>
            </Box>
          </Flex>
        </Box>
  )
}
