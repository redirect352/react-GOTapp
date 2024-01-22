import React, {  useState } from 'react';
import styled from "styled-components";
import GotService from "../../../services/gotService";
import ItemList from "../../itemList";
import ItemDetails, { ItemField } from "../../itemDetails";
import RowBlock  from "../../rowBlock";

const PageContainer = styled.div`
`
const gotService = new GotService();

const BookPage =()=>{
	const [selectedBook, changeBookSelect] = useState(null);

	const charsList = (
		<ItemList 
			changeSelect = {changeBookSelect}  
			selectedItem ={selectedBook}
			getItems={ async () => gotService.getAllBooks()}
			renderItem  = {item => item.name}
			/>
	);
	const charDetails = (
		<ItemDetails 
			itemSelected = {selectedBook !== null} 
			loadItem={() => gotService.getBook(selectedBook)}
			renderHeader={item => item.name}
			>
			<ItemField 
				label={'Number of pages'} 
				field={'numberOfPages'}
				/>
			<ItemField 
				label={'Publisher'} 
				field={'publisher'}
				/>
			<ItemField 
				label={'Released'} 
				field={'released'}
				/>
		</ItemDetails>
	);

	return (
		<PageContainer>
			<RowBlock 
				left={charsList} 
				right={charDetails}
				/>
		</PageContainer>
	);
}



export default BookPage;