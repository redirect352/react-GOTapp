import React from 'react';
import { Container } from 'reactstrap';
import Header from '../header';
import CharacterPage from "../pages/characterPage";
import BookPage from "../pages/bookPage";
import HousePage from "../pages/housePage";

const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <CharacterPage/>
				<BookPage/>
				<HousePage/>
            </Container>
        </>
    );
};

export default App;