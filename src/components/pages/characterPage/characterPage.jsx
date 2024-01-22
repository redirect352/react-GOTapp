import React, {  useState } from 'react';
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import GotService from "../../../services/gotService";
import RandomChar from "../../randomChar";
import ItemList from "../../itemList";
import ItemDetails, { ItemField } from "../../itemDetails";
import RowBlock  from "../../rowBlock";

const PageContainer = styled.div`
`
const gotService = new GotService();

const CharacterPage =()=>{
	const [selectedCharacter, changeCharSelect] = useState(null);

	const charsList = (
		<ItemList 
			changeSelect = {changeCharSelect}  
			selectedItem ={selectedCharacter}
			getItems={ async () => gotService.getAllCharacters()}
			renderItem  = {item => item.name}
			/>
	);
	const charDetails = (
		<ItemDetails 
			itemSelected = {selectedCharacter!==null} 
			loadItem={() => gotService.getCharacter(selectedCharacter)}
			renderHeader={item => item.name}
			>
			<ItemField 
				label={'Gender'} 
				field={'gender'}
				/>
			<ItemField 
				label={'Born'} 
				field={'born'}
				/>
			<ItemField 
				label={'Died'} 
				field={'died'}
				/>
			<ItemField 
				label={'Culture'} 
				field={'culture'}
				/>
		</ItemDetails>
	);

	return (
		<PageContainer>
			<Row>
				<Col lg={{size: 5, offset: 0}}>
					<RandomChar/>
				</Col>
			</Row>
			<RowBlock 
				left={charsList} 
				right={charDetails}
				/>
		</PageContainer>
	);
}



export default CharacterPage;