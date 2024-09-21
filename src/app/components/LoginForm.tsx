"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
// import { useLocale } from 'next-intl';
import { DecodedToken, SIGN_IN, SIGN_UP, USER } from "@/Constants";
import { useMutation, useQuery } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/client';
import jwt from 'jsonwebtoken';
import { useGlobalState } from "../context/GlobalState";
import Cookies from "js-cookie";


function LoginForm() {
    const router = useRouter();
    //const locale = useLocale();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const [operation, setOperation] = useState('signin');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorBadCredentials, setErrorBadCredentials] = useState('');
    const [errorUserNotFound, setErrorUserNotFound] = useState('');


    const nameQuery = operation === 'signin' ? SIGN_IN : SIGN_UP;

    const [auth, { data: dataAuth, loading, error }] = useMutation(nameQuery, {
        onError: (error) => {
            if (error.message === 'Email/Password do not match') {
                setErrorBadCredentials('Bad credentials!');
                setErrorUserNotFound('');
            }
            if (error.message === 'User not found') {
                setErrorUserNotFound('El usuario no existe');
                setErrorBadCredentials('');
            }
        },
    });


    useEffect(() => {
        let tmpToken;

        if (dataAuth) {

            if (operation === 'signin') {
                tmpToken = dataAuth.signin.token;
            } else {
                tmpToken = dataAuth.signup.token;
            }


            const decodedToken = jwt.decode(tmpToken) as DecodedToken;

            const isAdmin = decodedToken?.roles.includes('admin')

            Cookies.set('token', tmpToken, { path: '/', secure: false, });


            if (isAdmin) {
                // cookies.set('token', tmpToken, { path: '/admin', secure: false, });
                router.push('/admin'); // Redirige al panel de admin
            } else {
                // cookies.set('token', tmpToken, { path: '/dashboard', secure: false, });
                router.push('/dashboard'); // Redirige al dashboard
            }
        }
    }, [dataAuth]);


    // validation
    const validateForm = () => {
        let isValid = true;

        if (!email.trim()) {
            setErrorEmail('El email es requerido');
            setErrorBadCredentials('');
            isValid = false;
        } else {
            setErrorEmail('');
        }

        if (!password.trim()) {
            setErrorPassword('La contraseña es requerida');
            setErrorBadCredentials('');
            isValid = false;
        } else {
            setErrorPassword('');
        }

        if (operation === 'signup') {
            if (!username.trim()) {
                setErrorUsername('El nombre es requerido');
                setErrorBadCredentials('');
                isValid = false;
            } else {
                setErrorUsername('');
            }
        }

        return isValid;
    };

    function handleSubmit(e: { target: any; preventDefault: () => void }) {
        e.preventDefault();

        const formJsonSignin = {
            email,
            password,
        };

        const formJsonSignup = {
            email,
            username,
            password,
        };

        if (validateForm()) {
            operation === 'signin'
                ? auth({
                    variables: {
                        signinInput: {
                            ...formJsonSignin,
                        },
                    },
                })
                : auth({
                    variables: {
                        signupInput: {
                            ...formJsonSignup,
                        },
                    },
                });
        }
    }

    return (
        <div>
            <section className="bg-black">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                    />
                                    {errorEmail && <p className="p-2 text-sm font-bold text-red-600">{errorEmail}</p>}
                                    {errorUserNotFound && (
                                        <p className="p-2 text-sm font-bold text-red-600">{errorUserNotFound}</p>
                                    )}
                                </div>

                                {operation === 'signup' && (
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            type="username"
                                            name="username"
                                            id="username"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                        />
                                        {errorUsername && <p className="p-2 text-sm font-bold text-red-600">{errorUsername}</p>}
                                        {errorUserNotFound && (
                                            <p className="p-2 text-sm font-bold text-red-600">{errorUserNotFound}</p>
                                        )}
                                    </div>
                                )}



                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {errorPassword && <p className="p-2 text-sm font-bold text-red-600">{errorPassword}</p>}

                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text-gray-500 dark:text-gray-300"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                {operation === 'signin' && (
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Sign in
                                    </button>
                                )}

                                {operation === 'signup' && (
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Create
                                    </button>
                                )}

                                {operation !== 'signup' && (
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet?{" "}
                                        <a
                                            href="#"
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            onClick={() => setOperation('signup')}
                                        >
                                            Sign up
                                        </a>
                                    </p>
                                )}

                                {operation === 'signup' && (
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        I have an account{" "}
                                        <a
                                            href="#"
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            onClick={() => setOperation('signin')}
                                        >
                                            Sign in
                                        </a>
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default LoginForm;
