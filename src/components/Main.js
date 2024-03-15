import React from "react";

const Main = ({ children }) => {
    return (
        <body>
            <main id="main" role="main">
                {children}
            </main>
        </body>
    );
};

export default Main;