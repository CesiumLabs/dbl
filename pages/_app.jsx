import "tailwindcss/tailwind.css";
import Head from "next/head";

export default function Application({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Discord Bot List</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
