import React from 'react';
import styled from "styled-components";
import GotService from "../../../services/gotService";
import ItemDetails, { ItemField } from "../../itemDetails";
import { useParams } from "react-router";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
`
const gotService = new GotService();

const BookItem =()=>{
	const params = useParams();
	
	const itemDetails = (
		<>
			<ItemDetails 
				itemSelected = {params.id !== null} 
				loadItem={() => gotService.getBook(params.id)}
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
			<Link to ='..' relative="path" >
				<Button color="warning" outline style={{marginBottom:'2vh'}}>
					Go Back
				</Button>
			</Link>
		</>
	);

	return (
		<PageContainer>
			{itemDetails}
		</PageContainer>
	);
}



export default BookItem;