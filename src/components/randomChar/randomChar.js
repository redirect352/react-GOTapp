import React from 'react';
import './randomChar.css';
import styled from "styled-components";
import { ListGroup, ListGroupItem } from "reactstrap";

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

const RandomChar = () => {
	return (
		<RandomBlock className="rounded">
			<RandomBlockHeader>Random Character: John</RandomBlockHeader>
			<ListGroup flush>
				<ListItem>
					<ItemLabel className="term">Gender </ItemLabel>
					<ItemContent>male</ItemContent>
				</ListItem>
				<ListItem>
					<ItemLabel className="term">Born </ItemLabel>
					<ItemContent>11.03.1039</ItemContent>
				</ListItem>
				<ListItem>
					<ItemLabel className="term">Died </ItemLabel>
					<ItemContent>13.09.1089</ItemContent>
				</ListItem>
				<ListItem>
					<ItemLabel className="term">Culture </ItemLabel>
					<ItemContent>Anarchy</ItemContent>
				</ListItem>
			</ListGroup>
		</RandomBlock>
	);
}

export default RandomChar;
