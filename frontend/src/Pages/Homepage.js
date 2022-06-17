import React from 'react';
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

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
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
};

export default Homepage;