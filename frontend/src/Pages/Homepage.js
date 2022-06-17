import React from 'react';
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';

const Homepage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                w="100%"
                m="40px 0 15px 0"
                bg='white'
                borderRadius='lg'
                borderWidth='1px'
            >
                <Text fontSize='4xl' textAlign='center' fontWeight='bold' textColor='pink.500'>Loving Chat</Text>
            </Box>
            <Box
                w="100%"
                borderRadius='lg'
                borderWidth='1px'
                p={4}
                bg='white'
            >
                <Tabs variant='soft-rounded'>
                    <TabList mb={'1em'}>
                        <Tab w={'50%'}>Login</Tab>
                        <Tab w={'50%'}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                        <TabPanel>
                            <SignUp/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
};

export default Homepage;