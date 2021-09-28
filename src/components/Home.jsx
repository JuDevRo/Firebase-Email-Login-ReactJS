import React from 'react'
import { auth } from '../firebase'
import {signOut} from 'firebase/auth'

const Home = () => {
    return (
        <div>
            <h1>Welcome home</h1>
            <p><button onClick={() => signOut(auth).then(() => {console.log("Saliste con exito")}).catch((error) => {console.log(error)}) }>Sign out</button></p>
        </div>
    )
}

export default Home