import styled from "styled-components";


export const SectionStyled = styled.div`

    margin-top:2.5px;
    margin-left: 300px;
    box-sizing: border-box;
    height: 100%;
    padding: 10px 25px;
    width:100%;
    transition: 400ms margin-left;
    background-color: #FFFFFF;
    border-bottom: 1px solid rgb(0 0 0 / 8%);

    @media (max-width: 950px) {
        margin-left: 75px;
        margin-top:5px;
    }

    button{
        outline:none;
        border:1px solid #000;
        margin: 0.05rem 0.5rem 0.05rem 0;
        height: 2.1875rem;
        border-radius:4px;
        cursor:pointer;
        color: #0e0e0e;
        font-weight: 600;
        font-size: .875rem;
        padding:7px;
        align-items: center;
        padding-right:15px;
        padding-left:15px;
        background:#fff;
    }

    .jobs-sort{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
    }

    .randomize{
        margin-left:17em;
    }

    /* SEARCH JOBS TAB*/



    @media (max-width: 950px) {
        margin-top:1px;
        .randomize{
            display:none;
        }
        
    }


`