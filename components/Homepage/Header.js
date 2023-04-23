import styled from "styled-components";
import { FaBars } from "react-icons/fa"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100px;
    padding: 0 60px;
    background-color: #000;

    img {
        height: 90%;
    }

    nav > .icon {
        font-size: 3em;
        color: #fff;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <img src="/logo.svg" alt="Logo do Pokemon" />
            <nav>
                <FaBars className="icon" />
            </nav>
        </StyledHeader>
    );
}