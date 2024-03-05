import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
    return(
        <>
            <Header/>
            <Main>
                <SectionTitle/>
            </Main>
            <Footer/>
        </>
    );
};

export default Home;