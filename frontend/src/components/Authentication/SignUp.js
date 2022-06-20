import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pic, setPic] = useState('')
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const postDetails = (pics) => {
        setLoading(true)
        if(pics === undefined) {
            toast({
                title: "Please select an Image",
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
            return
        }
        if(pics.type === 'image/jpeg' || pics.type === 'image/png') {
            const data = new FormData()
            data.append('file', pics)
            data.append("upload_preset", "Loving-Chat")
            data.append('cloud_name', 'daycntffc')
            fetch('https://api.cloudinary.com/v1_1/daycntffc/image/upload', {
                method: "POST",
                body: data
            })
            .then(res => res.json())
            .then(picData => {
                setPic(picData.url.toString())
                console.log(picData);
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
        }
        else {
            toast({
                title: "Please select an Image",
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
            setLoading(false)
            return
        }
    }

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

            <Button colorScheme={'blue'} width='100%' style={{marginTop: '15px'}} onClick={submitSignUp} isLoading={loading} >Sign Up</Button>
            <Button colorScheme={'red'} variant='solid' width='100%' onClick={() => {setEmail('guest@example.com'); setPassword('123456')}} >Continue With Guest</Button>
            This is SignUp!!!
        </VStack>
    );
};

export default SignUp;