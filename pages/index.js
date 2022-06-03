import Head from "next/head";
import { Layout, Typography, Space } from "antd";

import { Navbar, Footer, Main } from "../components";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Cryptoverse</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Main />
            {/* <Footer /> */}
        </div>
    );
}
