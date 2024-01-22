import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
	background-color: red;
	padding: 2vh;
	font-size: larger;
	margin-bottom: 40px;
	color: white;
`

export default function ErrorMessage ({message}){
	return((
		<ErrorContainer>
		{message}
		</ErrorContainer>
	))
}	