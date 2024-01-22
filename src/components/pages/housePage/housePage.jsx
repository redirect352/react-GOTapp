import React, {  useState } from 'react';
import styled from "styled-components";
import GotService from "../../../services/gotService";
import ItemList from "../../itemList";
import ItemDetails, { ItemField } from "../../itemDetails";
import RowBlock  from "../../rowBlock";

const PageContainer = styled.div`
`
const gotService = new GotService();
		
const HousePage =()=>{
	const [selectedHouse, changeHouseSelect] = useState(null);

	const housesList = (
		<ItemList 
			changeSelect = {changeHouseSelect}  
			selectedItem ={selectedHouse}
			getItems={ async () => gotService.getAllHouses()}
			renderItem  = {item => item.name}
			/>
	);
	const houseDetails = (
		<ItemDetails 
			itemSelected = {selectedHouse !== null} 
			loadItem={() => gotService.getHouse(selectedHouse)}
			renderHeader={item => item.name}
			>
			<ItemField 
				label={'Region'} 
				field={'region'}
				/>
			<ItemField 
				label={'Words'} 
				field={'words'}
				/>
			<ItemField 
				label={'Titles'} 
				field={'titles'}
				/>
			<ItemField 
				label={'Overlord'} 
				field={'overlord'}
				/>
			<ItemField 
				label={'AnsestralWearpons'} 
				field={'ansestralWearpons'}
				/>
		</ItemDetails>
	);

	return (
		<PageContainer>
			<RowBlock 
				left={housesList} 
				right={houseDetails}
				/>
		</PageContainer>
	);
}

export default HousePage;