import React from "react";
import { Col, Row } from "reactstrap";

export default function RowBlock ({left, right}){
	return (
		<Row>
			<Col md='6'>
				{left}
			</Col>
			<Col md='6'>
				{right}
			</Col>
		</Row>
	);
}