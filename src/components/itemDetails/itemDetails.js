import React from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
import useLoader, { loadStates } from "../../hooks/useLoader";

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

const ItemDetails =({itemSelected = false, loadItem = async () => {throw new Error('No item load methode provided')}, renderHeader,children})=>{
	const {loadState, error, content : item} = useLoader( itemSelected ? loadItem : null);
	const noItemSelected = !itemSelected  ? <View header = {'Select something...'}/> : null;
	const spinner = loadState === loadStates.loading && itemSelected ? <Spinner/> : null;
	
	const content = loadState === loadStates.successed ? 
				<View header={renderHeader(item)}>
					{children.map((child)=>{
						return React.cloneElement(child,{item})
					})}
				</View> : null;
	
	const errorMessage = loadState === loadStates.erorred ? <ErrorMessage message={error}/> : null;

	return (
		<DetailsContainer className="rounded">
			{noItemSelected}
			{spinner}
			{content}
			{errorMessage}
		</DetailsContainer>
	);
    
}

const ItemField = ({label, field, item}) => {
	const showContent = (content) =>{
		if(content && content !== '')
			return content;
		else
			return (<span style={{color:'gray'}}>{'<no info>'}</span>);
	}
	return(
		<ListItem>
			<ItemLabel className="term">{label} </ItemLabel>
			<ItemContent>{showContent(item[field])}</ItemContent>
		</ListItem>
	);
}

const View = ({header, children})=>{
	return (<>
				<DetailtsHeader>{header ?? '-'}</DetailtsHeader>
				<ListGroup flush>
					{children}
				</ListGroup>
			</>
	);
}

export {ItemField};
export default ItemDetails;