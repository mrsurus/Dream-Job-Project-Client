import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const { createUser } = useContext(AuthContext)

    const handleSignup = data => {

        createUser(data.email, data.password)
            .then(res => console.log(res.user))
            .catch(err => console.log(err))
    }

    return (
        <div className='my-16   flex justify-center items-center  '>
            <div className='w-96  shadow-2xl p-7' >
                <h2 className='text-4xl font-semibold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full my-5">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", { required: 'Name is required' })}
                            type="text" placeholder="Name" className="input input-bordered w-full " />
                        {errors.name && <p role='alert' className='text-red-500'>Name is required</p>}
                    </div>
                    <div className="form-control w-full my-5">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: 'Email is required' })}
                            type="email" placeholder="Email" className="input input-bordered w-full " />
                        {errors.email && <p role='alert' className='text-red-500'>Email is required</p>}
                    </div>

                    <div className="form-control w-full mb-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password",
                            { required: 'Password is required', minLength: { value: 6, message: 'password at lest 6 charecter' } })}
                            type="password" placeholder="Password" className="input input-bordered w-full " />
                        {errors.password && <p role='alert' className='text-red-500'>{errors.password?.message}</p>}

                    </div>

                    <input className='btn w-full' defaultValue='SignUp' type='Submit' />
                    <p className='text-center my-3'>Already have an account? <Link className='text-success' to='/login'>LogIn</Link> </p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>SIGN IN WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;