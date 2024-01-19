import React, { useEffect, useState } from 'react';
import './randomChar.css';
import styled from "styled-components";
import { Button, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import GotService from "../../services/gotService";
import ErrorMessage from "../errorMessage";

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`

const RandomBlockHeader = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`
const ListItem = styled(ListGroupItem)`
	display : flex ; 
	justify-content: space-between;
`
const ItemLabel = styled.span`
	font-size : bold;
`
const ItemContent = styled.span`
`

const defaultCharacterData = {
	name : null,
	gender : null,
	born : null,
	died : null,
	culture : null,
};

const gotService = new GotService();
const loadStates = {loading : 'loading', successed : 'successed', erorred : 'errored'}


const RandomChar = () => {
	const [charId, changeCharId] = useState(false);
	const onClick = ()=>{
		changeCharId(charId ?null : Math.floor(Math.random()*140+25))
	}
	const randomCharContent = charId ? <RandomCharBlock id = {charId}/> : null;
	const randomButtonText = charId ? 'Скрыть':'Показать случайного персонажа'

	return(
		<>
			{randomCharContent}
			<Button color="primary" outline style={{marginBottom:'2vh'}} onClick={onClick}>
				{randomButtonText}
			</Button>
		</>
	)
}

const RandomCharBlock = ({id}) => {
	const [characterData, updateCharactedData] = useState(defaultCharacterData);
	const [loadState, changeLoadState] = useState(loadStates.loading); 
	const [error, setError] = useState(null);

	const onCharacterLoaded = (character) => {
		updateCharactedData({...character})
		changeLoadState(loadStates.successed);
	};
	const onError = (error) => {
		console.error(error);
		setError(error.message);
		changeLoadState(loadStates.erorred);
	}

	useEffect(()=>{
		gotService.getCharacter(id)
		.then(onCharacterLoaded)
		.catch(onError);
	},[id])

	console.log(loadState);

	if(loadState === loadStates.loading){
		return (
			<RandomBlock className="rounded">
				<div style={{textAlign:'center'}}>
					<Spinner />
				</div>
			</RandomBlock>
		)
	}else if (loadState === loadStates.successed){
		return (
			<RandomBlock className="rounded">
				<View characterData={characterData}/>
			</RandomBlock>
		)
	}else {
		console.log(3);
		return(
			<RandomBlock className="rounded">
				<ErrorMessage message={error}/>
			</RandomBlock>
		)
	}
}

const View = ({characterData})=>{
	return (<>
				<RandomBlockHeader>Random Character: {characterData.name ?? '-'}</RandomBlockHeader>
				<ListGroup flush>
					<ListItem>
						<ItemLabel className="term">Gender </ItemLabel>
						<ItemContent>{characterData.gender ?? '-'}</ItemContent>
					</ListItem>
					<ListItem>
						<ItemLabel className="term">Born </ItemLabel>
						<ItemContent>{characterData.born ?? '-'}</ItemContent>
					</ListItem>
					<ListItem>
						<ItemLabel className="term">Died </ItemLabel>
						<ItemContent>{characterData.died ?? '-'}</ItemContent>
					</ListItem>
					<ListItem>
						<ItemLabel className="term">Culture </ItemLabel>
						<ItemContent>{characterData.culture ?? '-'}</ItemContent>
					</ListItem>
				</ListGroup>
			</>
	);
}

export default RandomChar;
