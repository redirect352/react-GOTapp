import React, {  useState } from 'react';
import styled from "styled-components";
import GotService from "../../../services/gotService";
import ItemList from "../../itemList";
import { useNavigate } from "react-router";

const PageContainer = styled.div`
`
const gotService = new GotService();

const BookPage =()=>{
	const [selectedBook] = useState(null);
	const navigate = useNavigate();
	const booksList = (
		<ItemList 
			changeSelect = {(id) =>navigate(`./${id}`)}  
			selectedItem ={selectedBook}
			getItems={ async () => gotService.getAllBooks()}
			renderItem  = {item => item.name}
			/>
	);

	return (
		<PageContainer>
			{booksList} 
		</PageContainer>
	);
}



export default BookPage;