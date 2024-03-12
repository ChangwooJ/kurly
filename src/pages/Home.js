import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Banner from "../components/Banner";
const Home = () => {
    return(
        <>
            <Header/>
            <Main>
                <Banner/>
            </Main>
            <Footer/>
        </>
    );
};

export default Home;