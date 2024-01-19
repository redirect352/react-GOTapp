import React, { useEffect, useState } from 'react';
import './itemList.css';
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import styled from "styled-components";
import ErrorMessage from "../errorMessage";
import GotService from "../../services/gotService";

const ListGroupPointer = styled(ListGroup)`
 	cursor: pointer;
	margin-bottom: 2vh;
`

const loadStates = {loading : 'loading', successed : 'successed', erorred : 'errored'};
const gotService = new GotService();
const ItemList = ({changeSelect, selectedCharacter}) => {
	const [characters, updateCharacters] = useState([]);
	const [loadState, changeLoadState] = useState(loadStates.loading); 
	const [error, setError] = useState(null);

	const onCharactersLoaded = (loadedCharacters) => {
		updateCharacters(loadedCharacters)
		changeLoadState(loadStates.successed);
	};
	const onError = (error) => {
		console.error(error);
		setError(error.message);
		changeLoadState(loadStates.erorred);
	}

	useEffect(()=>{
		if(loadState === loadStates.loading){
			gotService.getAllCharacters()
			.then(onCharactersLoaded)
			.catch(onError);
		}
	}, [loadState])
	const spinner = loadState === loadStates.loading ? <Spinner/> : null;
	const content = loadState === loadStates.successed ?<View chars={characters} selectedChar = {selectedCharacter} changeSelect = {changeSelect}/> : null;
	const errorMessage = loadState === loadStates.erorred ? <ErrorMessage message={error}/> : null;

	return (
		<>
			{spinner}
			{content}
			{errorMessage}
		</>
	);
};

const View = ({chars,selectedChar, changeSelect}) =>{
	const onNameClicked = (e) =>{
		changeSelect(+e.target.id); 
	}

	return (
		<ListGroupPointer >
			{
			chars.map((char) => (
				<ListGroupItem 	id = {char.id}
								key={char.id} 
								active = {selectedChar === char.id} 
								onClick={onNameClicked}>
									{char.name}
				</ListGroupItem>
				)
			)
			}
		</ListGroupPointer >
	);
};


export default ItemList;