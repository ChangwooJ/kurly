import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Banner from "../components/Banner";
import MainPage from "../components/MainPage";

const Home = () => {
    return(
        <>
            <Banner/>
            <Main>
                <MainPage></MainPage>
            </Main>
            <Footer/>
        </>
    );
};

export default Home;