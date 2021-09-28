import React, { useRef } from 'react'
import { auth } from '../firebase';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import '../styles/SignIn.css'
const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef2 = useRef(null);
    const passwordRef2 = useRef(null);
    const signUp = async e => {
        e.preventDefault();
        await createUserWithEmailAndPassword(
            auth,
            emailRef2.current.value,
            passwordRef2.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    const signIn = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="signin">
            <form action="">
                <h1>Sign in</h1>
                <input ref={emailRef} type="email" placeholder="Colocá tu email"/>
                <input ref={passwordRef} type="password" placeholder="Colocá tu contraseña"/>
                <button onClick={signIn}>Entrar a mi sesión</button>
                <br />
                <h1 className="titulo">Sign Up</h1>
                <h6>No estas registrado? Hacelo acá</h6>
                <input ref={emailRef2} type="email" placeholder="Colocá tu email"/>
                <input ref={passwordRef2} type="password" placeholder="Colocá tu contraseña"/>
                <p className="p">(Mínimo 6 caracteres)</p>
                <button onClick={signUp}>Registrarme</button>
            </form>
        </div>
    )
}

export default Signin