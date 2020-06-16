import React from "react";
import styled from "styled-components";
import Timer from "./Components/Timer";

const SidebarContainer = styled.div`
    position: absolute;
    top: 3%;
    right: 3%;
    width: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 9rem;
    text-align: center;
`;

const RightSidebarContainer = (props) => {
    return (
        <SidebarContainer>
            <Timer
                isActive={props.isActive}
                setIsActive={props.setIsActive}
                currentNumber={props.currentNumber}
                setCurrentNumber={props.setCurrentNumber}
                resetTimer={props.resetTimer}
                setResetTimer={props.setResetTimer}
            />
            <Container>
                <h1>Score</h1>
                <div
                    style={{
                        color: `${props.currentNumber === 11 ? "blue" : "black"}`,
                        marginTop: "0.5rem",
                        fontSize: "4rem",
                        fontWeight: "500",
                    }}
                >
                    {props.points}
                </div>
            </Container>
            <Container>
                <h1 style={{ color: "#001f3f" }}>Round </h1>
                <div
                    style={{
                        marginTop: "0.5rem",
                        fontSize: "1.8rem",
                        fontWeight: "500",
                    }}
                >
                    {props.currentNumber === 11 || props.currentNumber === 0
                        ? "-"
                        : `${props.currentNumber} / 10`}
                </div>
            </Container>
        </SidebarContainer>
    );
};

export default RightSidebarContainer;
