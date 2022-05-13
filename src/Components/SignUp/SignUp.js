import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css';

const SignUp = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const notify = () => {
        toast("varification email sent")
    }

    //creating user with email and pass
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    //signing in with google
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    //react form
    const { register, handleSubmit, formState: { errors } } = useForm();
    //submit
    const onSubmit = async (data) => {
        notify();
        console.log(data.Email)
        createUserWithEmailAndPassword(data.Email, data.Password)


    };
    // console.log(errors.Email);



    //error handeling
    let errorElement;
    if (errors.Email) {
        errorElement = <div>
            <p className='text-danger'> please write a valid email</p>
        </div>
    }
    if (error || error1) {

        errorElement = <div>
            <p className='text-danger'> {error?.message}</p>
        </div>
    }

    //handle loading
    if (loading1) {
        return <Loading></Loading>
    }


    //handle google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle();
        console.log(user)
    }
    if (user || user1) {
        navigate(from, { replace: true })
    }
    return (
        <div className="container mt-5 ">

            <div className='d-flex flex-column align-items-center '>
                <h1>This is sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="sign-form mt-5">
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="mt-2" required />
                    <input type="password" placeholder="Password" {...register("Password", {})} className="mt-2" required />

                    <button type="submit" className="btn mt-2" >Sign Up</button>

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

                    <button className="btn mt-3" onClick={handleGoogleSignIn} >Google</button>
                    <br />

                </form>
            </div>


            <div> {
                errorElement
            }</div>
            <div className='App mt-5'>
                <p>Already Have An Account? <Link to='/login'>login</Link></p>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;