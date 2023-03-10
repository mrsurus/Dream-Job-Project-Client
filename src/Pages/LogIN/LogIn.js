import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const LogIn = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const { signIn,googleLogin } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        setLoginError('')
        signIn(data.email, data.password)
            .then(res => {
                console.log(res.user)
                navigate(from, { replace: true })

            })

            .catch(err => setLoginError(err.message))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='h-[600px]  flex justify-center items-center  '>
            <div className='w-96 shadow-2xl p-7' >
                <h2 className='text-4xl font-semibold text-center'>Log In</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full my-5">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: 'Email is required' })}
                            type="email" placeholder="Email" className="input input-bordered w-full " />
                        {errors.email && <p role='alert' className='text-red-500'>Email is required</p>}
                    </div>

                    <div className="form-control w-full mb-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'password at lest 6 charecter' } })}
                            type="password" placeholder="Password" className="input input-bordered w-full " />
                        {errors.password && <p role='alert' className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <input className='btn w-full' defaultValue='logIn' type='Submit' />
                    {loginError && <p className='text-red-500'>{loginError}</p>}
                    <p className='text-center my-3'>New to Doctor's Portal? <Link className='text-success' to='/signup'>Sign Up</Link> </p>
                </form>
                <button onClick={ handleGoogleLogin} className='btn btn-success w-full'>SIGN IN WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default LogIn;