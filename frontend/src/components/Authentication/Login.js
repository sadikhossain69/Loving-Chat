import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const submitSignUp = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }

        // console.log(email, password);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "http://localhost:5000/api/user/login",
                { email, password },
                config
            );

            // console.log(JSON.stringify(data));
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate('/chats')
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            setLoading(false);
        }
    }

    return (
        <VStack spacing={'5px'}>

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input defaultValue={email} placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} autoComplete='off' type='email' />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input defaultValue={password} placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} autoComplete='off' type={show ? 'text' : 'password'} />

                    <InputRightElement width={'4.5em'}>
                        <Button h={'1.75rem'} size='sm' onClick={(e) => setShow(!show)}>
                            {show ? 'Hide' : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button colorScheme={'blue'} width='100%' style={{ marginTop: '15px' }} onClick={submitSignUp} isLoading={loading} >Login</Button>
            <Button colorScheme={'red'} variant='solid' width='100%' onClick={() => { setEmail('guest@example.com'); setPassword('123456') }} >Continue With Guest</Button>
            This is SignUp!!!
        </VStack>
    );
};

export default Login;