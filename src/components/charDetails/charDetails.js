import React from 'react';
import './charDetails.css';
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

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

const CharDetails =()=>{
	return (
		<DetailsContainer className="rounded">
			<DetailtsHeader>John Show</DetailtsHeader>
			<ListGroup flush>
				<ListItem>
					<ItemLabel>Gender</ItemLabel>
					<ItemContent>male</ItemContent>
				</ListItem>
				<ListItem>
					<ItemLabel>Born</ItemLabel>
					<ItemContent>1783</ItemContent>
				</ListItem>
				<ListItem>
					<ItemLabel>Died</ItemLabel>
					<ItemContent>1820</ItemContent>
				</ListItem>
				<ListItem>
					<ItemLabel>Culture</ItemLabel>
					<ItemContent>First</ItemContent>
				</ListItem>
			</ListGroup>
		</DetailsContainer>
	);
    
}
export default CharDetails;