import React from 'react';
import './itemList.css';
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import styled from "styled-components";
import ErrorMessage from "../errorMessage";
import useLoader, { loadStates } from "../../hooks/useLoader";

const ListGroupPointer = styled(ListGroup)`
 	cursor: pointer;
	margin-bottom: 2vh;
`
const ItemList = ({changeSelect, selectedItem, getItems = async () => {throw(new Error('Error. No Data provided'));}, renderItem}) => {
	const {loadState, error, content : items} = useLoader(getItems);
	const spinner = loadState === loadStates.loading ? <Spinner/> : null;
	const content = loadState === loadStates.successed ?
														<View 
															items = {items} 
															selectedItem = {selectedItem} 
															changeSelect = {changeSelect}
															renderItem ={renderItem}
															/> : null;
	const errorMessage = loadState === loadStates.erorred ? <ErrorMessage message={error}/> : null;

	return (
		<>
			{spinner}
			{content}
			{errorMessage}
		</>
	);
};

const View = ({items, selectedItem, changeSelect, renderItem = () => 'error. No header func provided'}) =>{
	const onNameClicked = (e) =>{
		changeSelect(+e.target.id); 
	}

	return (
		<ListGroupPointer >
			{
			items.map((item) =>  {
				if(!item.id)
					throw new Error('Error. Item must contain "id" field')
				return(
					<ListGroupItem 	id = {item.id}
									key={item.id} 
									active = {selectedItem === item.id} 
									onClick={onNameClicked}>
										{renderItem(item)}
					</ListGroupItem>
				)}
			)
			}
		</ListGroupPointer >
	);
};

export default ItemList;