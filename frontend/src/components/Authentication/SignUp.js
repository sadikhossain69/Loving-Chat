import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pic, setPic] = useState('')
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()

    const postDetails = (pics) => {
        setLoading(true)
        if (pics === undefined) {
            toast({
                title: "Please select an Image",
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
            return
        }
        if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
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

    const submitSignUp = async () => {
        setLoading(true)
        // if (!name || !password || !email || !confirmPassword) {
        //     toast({
        //         title: "Please Fill all the Fields",
        //         status: 'warning',
        //         duration: 5000,
        //         isClosable: true,
        //         position: 'top'
        //     })
        //     setLoading(false)
        //     return
        // }
        // if (password !== confirmPassword) {
        //     toast({
        //         title: "Password don't match",
        //         status: "warning",
        //         duration: 5000,
        //         isClosable: true,
        //         position: 'top'
        //     })
        //     return
        // }

        try {
            const config = {
                headers: {
                    'content-type': 'application/json'
                },
            }

            const { data } = await axios.post('http://localhost:5000/api/user', { name, email, password, pic }, config)

            toast({
                title: "Registration Successful",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })

            localStorage.setItem('userInfo', JSON.stringify(data))

            setLoading(false)
            navigate('/chats')

        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
            setLoading(false)
        }

    }

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
                    <Input placeholder='Enter Your Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} autoComplete='off' type={show ? 'text' : 'password'} />

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

            <Button colorScheme={'blue'} width='100%' style={{ marginTop: '15px' }} onClick={submitSignUp} isLoading={loading} >Sign Up</Button>
        </VStack>
    );
};

export default SignUp;