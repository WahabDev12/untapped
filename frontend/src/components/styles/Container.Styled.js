import styled from "styled-components";

export const ContainerStyled = styled.div`

    
    margin-top:1.2em;
    margin-left:20.5em;
    box-sizing: border-box;
    height: 100vh;
    width:73.5%;
    padding: 10px 25px;
    border: 1px solid #dadada;
    border-radius: 5px;
    overflow-y: hidden;

    
    .job-container{
        display:grid;
        grid-gap: 0.9375rem;
        grid-template: auto/repeat(3, 1fr) [end];
        justify-items: stretch;
        margin-top:1.2rem;
        align-items: stretch;
    }

    p{
        font-size: .8125rem;
        line-height: 1.125rem;
        text-transform: uppercase;
        color: #666;
        font-weight: 500;
        margin-top:0.5rem;
    }

    .job{
        width:86%;
        height:fit-content;
        border: 1px solid #dadada;
        padding: 0.9375rem;
        border-radius:5px;

    }


`