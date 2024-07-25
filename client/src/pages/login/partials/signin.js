import React from 'react'
import styles from './partials.module.scss'
import Button from '../../../components/atoms/button'
import Input from '../../../components/atoms/input'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    const handleSignin = () => {
        if (!email.length && !password.length) toast.error('All fields are required');
        fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data?.success === 201) {
                toast.success('User Logged in successfully!'); 
                console.log(data);
                

                navigate('/notes');
            } else {
                toast.error(data?.message);
            }
        }).catch((err) => {
            console.log(err);
            toast.error('Login Failed');
        })
    }

  return (
    <div className={styles.form}>

    <Button text='Join with Google' icon='ri:google-fill' />

    <div className={styles.option}>
      <span>or Join with email address</span>
    </div>

    <article className={styles.details}>
      <Input type={'email'} placeholder={'Enter your Email Id'} value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type={'password'} placeholder={'Enter your password'} value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button text='Login' icon='material-symbols:login' className={styles.loginBtn} handleClick={handleSignin}/>
    </article>
  </div>
  )
}

export default Signin