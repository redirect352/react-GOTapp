import React from 'react';
import './itemList.css';
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

const ListGroupPointer = styled(ListGroup)`
 	cursor: pointer;
`

const   ItemList = () => {
	return (
		<ListGroupPointer >
			<ListGroupItem>
				John Snow
			</ListGroupItem>
			<ListGroupItem>
				Brandon Stark
			</ListGroupItem>
			<ListGroupItem>
				Geremy
			</ListGroupItem>
		</ListGroupPointer >
	);
};
export default ItemList;