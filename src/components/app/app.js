import React from 'react';
import { Container } from 'reactstrap';
import Header from '../header';
import CharacterPage from "../pages/characterPage";
import BookPage from "../pages/bookPage";
import HousePage from "../pages/housePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.css';
import BookItem from "../pages/booksItem";

const App = () => {
    return (
        <Router>
			<div className="app">
				<Container>
					<Header />
				</Container>
				<Container>
					<Routes>
						<Route path="/characters" element={<CharacterPage/>}/>
						<Route path="/houses" element={<HousePage/>}/>
						<Route path="/books" element={<BookPage/>}/>
						<Route path="/books/:id"  Component={BookItem}/>
					</Routes>
				</Container>
			</div>
        </Router>
    );
};

export default App;