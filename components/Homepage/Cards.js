import styled from "styled-components"

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100%;
    overflow: hidden;

    .Card {
        width: 30vw;
        height: 100%;
        background-color: #f4f4f4;
    }
`

export default function Cards() {
    return (
        <CardsContainer>
            <div className="Card"></div>
            <div className="Card"></div>
            <div className="Card"></div>
            <div className="Card"></div>
            <div className="Card"></div>
            <div className="Card"></div>
            <div className="Card"></div>
            <div className="Card"></div>
            <div className="Card"></div>
            <div className="Card"></div>
        </CardsContainer>
    )
}