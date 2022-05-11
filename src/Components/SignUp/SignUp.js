import React from 'react';
import { useForm } from "react-hook-form";
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="container mt-5">
            <h1>This is sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="password" placeholder="Password" {...register("Password", {})} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default SignUp;