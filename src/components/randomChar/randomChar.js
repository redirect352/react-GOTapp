import React, { useEffect, useRef, useState } from 'react';
import './randomChar.css';
import { Button } from "reactstrap";
import GotService from "../../services/gotService";
import PropTypes from 'prop-types';
import ItemDetails, { ItemField } from "../itemDetails";

const gotService = new GotService();

const RandomChar = ({interval = 2500}) => {
	const [charId, changeCharId] = useState(false);
	const timer = useRef(null);
	const onClick = ()=>{
		changeCharId(charId ?null : Math.floor(Math.random()*140+25));
	}
	useEffect (()=>{
			if(charId){
				timer.current = setTimeout(()=>changeCharId( Math.floor(Math.random()*140+25)), interval);
			}else{
				if(timer.current){
					clearTimeout(timer.current);
					timer.current = null;
				}
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	,[charId])

	const randomCharContent = charId ? <ItemDetails 
											itemSelected
											loadItem={() => gotService.getCharacter(charId)}
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
										</ItemDetails> : null;
	const randomButtonText = charId ? 'Скрыть':'Показать случайного персонажа'
	return(
		<>
			{randomCharContent}
			<Button color="primary" outline style={{marginBottom:'2vh'}} onClick={onClick}>
				{randomButtonText}
			</Button>
		</>
	)
}

RandomChar.propTypes = {
	interval : PropTypes.number,
};

export default RandomChar;
