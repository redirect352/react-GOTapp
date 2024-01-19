import React, { useEffect, useState } from 'react';
import './charDetails.css';
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";
import GotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

const DetailsContainer = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
`

const DetailtsHeader = styled.h4`
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

const loadStates = {loading : 'loading', successed : 'successed', erorred : 'errored'}
const gotService = new GotService();

const defaultCharacterData = {
	name : null,
	gender : null,
	born : null,
	died : null,
	culture : null,
};

const CharDetails =({id})=>{
	const [character, updateCharacter] = useState(defaultCharacterData);
	const [loadState, changeLoadState] = useState(loadStates.loading); 
	const [error, setError] = useState(null);
	
	const onCharacterLoaded = (loadedCharacter) => {
		updateCharacter(loadedCharacter)
		changeLoadState(loadStates.successed);
	};
	const onError = (error) => {
		console.error(error);
		setError(error.message);
		changeLoadState(loadStates.erorred);
	}

	useEffect(()=>{
		if(id){
			gotService.getCharacter(id)
			.then(onCharacterLoaded)
			.catch(onError);
		}
	},[id]);

	const spinner = loadState === loadStates.loading ? <Spinner/> : null;
	const content = loadState === loadStates.successed ?<View {...character}/> : null;
	const errorMessage = loadState === loadStates.erorred ? <ErrorMessage message={error}/> : null;

	return (
		<DetailsContainer className="rounded">
			{spinner}
			{content}
			{errorMessage}
		</DetailsContainer>
	);
    
}

const View = ({name, gender, born, died, culture})=>{
	const showContent = (content) =>{
		if(content && content !== '')
			return content;
		else
			return 'no info';

	}

	return (<>
				<DetailtsHeader>{name ?? '-'}</DetailtsHeader>
				<ListGroup flush>
					<ListItem>
						<ItemLabel className="term">Gender </ItemLabel>
						<ItemContent>{showContent(gender)}</ItemContent>
					</ListItem>
					<ListItem>
						<ItemLabel className="term">Born </ItemLabel>
						<ItemContent>{showContent(born)}</ItemContent>
					</ListItem>
					<ListItem>
						<ItemLabel className="term">Died </ItemLabel>
						<ItemContent>{showContent(died)}</ItemContent>
					</ListItem>
					<ListItem>
						<ItemLabel className="term">Culture </ItemLabel>
						<ItemContent>{showContent(culture)}</ItemContent>
					</ListItem>
				</ListGroup>
			</>
	);
}

export default CharDetails;