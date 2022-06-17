import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitSignUp = () => {}

    return (
        <VStack spacing={'5px'}>

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} autoComplete='off' type='email' />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} autoComplete='off' type={show ? 'text' : 'password'} />

                    <InputRightElement width={'4.5em'}>
                        <Button h={'1.75rem'} size='sm' onClick={(e) => setShow(!show)}>
                            {show ? 'Hide' : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button colorScheme={'blue'} width='100%' style={{marginTop: '15px'}} onClick={submitSignUp} >Login</Button>
            <Button colorScheme={'red'} variant='solid' width='100%' onClick={() => {setEmail('guest@example.com'); setPassword('123456')}} >Continue With Guest</Button>
            This is SignUp!!!
        </VStack>
    );
};

export default Login;