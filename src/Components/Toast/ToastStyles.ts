import styled, { keyframes } from "styled-components";
import { FlexBox } from "../../styledComponents";

// Fade-in and slide-down animation
const fadeIn = keyframes`
    from {
        transform: translateY(-100px);
    }
    to {
        transform: translateY(0);
    }
`;

// Fade-out and collapse animation
const fadeOut = keyframes`
    0% {
        transform: translateY(0);
        height: auto;
        padding: 8px 20px 8px 16px;
        margin-bottom: 6px;
    }
    100% {
        transform: translateY(-100px);
        height: 0;
        padding: 0 20px 0 16px;
        margin-bottom: 0;
        opacity: 0;
    }
`;


export const ToastsContainer = styled.div`
    position: fixed;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    gap: 6px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
`;

export const ToastContainer = styled(FlexBox)`
    background: white;
    padding: 8px 20px 8px 16px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    animation: ${fadeIn} 0.3s ease-out;

    &.fade-out {
        animation: ${fadeOut} 0.3s ease-out forwards;
    }

    svg {
        fill: rgb(53, 151, 89);
        stroke: rgb(53, 151, 89);
    }
`;
