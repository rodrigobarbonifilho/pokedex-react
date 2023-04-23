import { FaSearch } from "react-icons/fa";
import styled from "styled-components"

const StyledContainerSearch = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    width: 100vw;
    height: 120px;
    padding: 60px;
    background-color: #d9d9d9;

    .icon {
        font-size: 5em;
    }
`

const StyledInputSearch = styled.input`
    font-size: 1.5em;
    width: 100%;
    padding: 24px 16px;
    
    &:focus {
        outline: none;
    }
`


export default function Search() {
    return (
        <StyledContainerSearch>
            <FaSearch className="icon" />
            <StyledInputSearch placeholder="Insert here a Pokemon name or ID..." />
        </StyledContainerSearch>
    );
}