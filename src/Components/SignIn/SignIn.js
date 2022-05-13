

import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    //signIn with email and pass
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //password reset email
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );
    //react form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data.Email)
        signInWithEmailAndPassword(data.Email, data.Password)
    };
    console.log(errors.Email);

    //signing in with google
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    //error handeling
    let errorElement;
    if (errors.Email) {
        errorElement = <div>
            <p className='text-danger'> please write a valid email</p>
        </div>
    }
    if (error || error1 || error2) {
        console.log(error?.messege || error2?.message || error1?.massege)
        errorElement = <div>
            <p className='text-danger'> {error?.message}</p>
        </div>
    }
    //handle loading
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user || user1) {
        navigate(from, { replace: true })
    }

    //handle google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle();
        console.log(user)
    }
    //getting email
    const handleEmail = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    //handle reset

    const handleReset = async () => {
        console.log(email)

        await sendPasswordResetEmail(email);
        toast("reset password email send")

    }


    return (
        <div className="container mt-5 ">

            <div className='d-flex flex-column align-items-center '>
                <h1>This is sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="sign-form mt-5">
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="mt-2" required onBlur={handleEmail} />
                    <input type="password" placeholder="Password" {...register("Password", {})} className="mt-2" required />

                    <button type="submit" className="btn mt-2" >Sign In</button>

                    <div className="row mt-3">
                        <div className="col-4">
                            <hr />
                        </div>
                        <div className="col-4">
                            <p> google</p>
                        </div>
                        <div className="col-4">
                            <hr />
                        </div>
                    </div>

                    <button className="btn mt-3" onClick={handleGoogleSignIn}>Google</button>
                    <br />

                </form>
                <button className='btn mt-3'
                    onClick={handleReset}
                >
                    Reset password
                </button>
            </div>


            <div> {
                errorElement
            }</div>
            <div className='App mt-5'>
                <p>Wanna sign up? <Link to='/signup'>Sign Up</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default SignIn;