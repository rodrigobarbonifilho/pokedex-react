import { CSSReset } from "../styles/CSSReset";

export default function App({ Component, pageProps }) {
    return (
        <>
            <CSSReset />
            <Component {...pageProps} />
        </>
    );
}