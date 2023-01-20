// Write your Character component here
import React from 'react';
import styled from "styled-components";

const StyledCharacterDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    align-item: center;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-top: 2%;
    padding-top: 1%;
    padding-bottom: 5%;
    width: 50%;
    background-color: rgba(143, 67, 33, 0.6);
    border: double;
    font-family: 'Space Grotesk', sans-serif;
    color: rgb(36, 27, 3);

    .data h3, .constants h3 {
        width: 100%;
        margin: 1 auto;
        padding: 2%;
    }

;`
