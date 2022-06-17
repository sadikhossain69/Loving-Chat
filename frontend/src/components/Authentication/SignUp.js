import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pic, setPic] = useState('')

    const postDetails = (pics) => {}

    const submitSignUp = () => {}

    return (
        <VStack spacing={'5px'}>
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} autoComplete='off' type='text' />
            </FormControl>

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

            <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input placeholder='Enter Your Confirm Password' onChange={(e) => setPassword(e.target.value)} autoComplete='off' type={show ? 'text' : 'password'} />

                    <InputRightElement width={'4.5em'}>
                        <Button h={'1.75rem'} size='sm' onClick={(e) => setShow(!show)}>
                            {show ? 'Hide' : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl>
                <FormLabel>Upload Your Picture</FormLabel>
                <Input type='file' p={'1.5'} accept='image/*' onChange={(e) => postDetails(e.target.files[0])} />
            </FormControl>

            <Button colorScheme={'blue'} width='100%' style={{marginTop: '15px'}} onClick={submitSignUp} >Sign Up</Button>
            This is SignUp!!!
        </VStack>
    );
};

export default SignUp;