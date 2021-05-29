import FirebaseLogin from '../components/FirebaseLogin'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Wrapper from "../components/Wrapper"
const auth = () => {
    return (
        <>
            <Wrapper title="Login">
                <h1 className={styles.title}>
                    Welcome to the <a href="/">Image Manager!</a>
                </h1>
                <p className={styles.description}>
                    <Link href="/login"><a>Sign in to get started</a></Link>
                </p>
                <FirebaseLogin/>
            </Wrapper>
        </>
    )
}

export default auth
