import styled from "@emotion/styled";
import { mobile } from "./responsive";
import { Typography } from "@mui/material";

export const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	${mobile({ padding: "10px 0" })}
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

export const Langauge = styled.div`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
	border: 1px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

export const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`;

export const Center = styled.div`
	flex: 1;
	text-align: center;
`;

export const Logo = styled(Typography)`
    font-size: 1.6rem;
	font-weight: 600;
	${mobile({ fontSize: "20px", marginLeft: "5px" })}
    & > .logo {
        color: #f39509;
        border-bottom: 3px solid;
    }
`;

export const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center", marginRight: "10px" })}
`;

export const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
