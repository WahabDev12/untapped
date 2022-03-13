import styled from "styled-components";

export const ContainerStyled = styled.div`

    
    margin-top:1.2em;
    margin-left:20.5em;
    box-sizing: border-box;
    height: fit-content;
    width:73.5%;
    padding: 10px 25px;
    padding-bottom:35px;
    border: 1px solid #dadada;
    border-radius: 5px;
    overflow-y: hidden;

    
    .job-container{
        display:grid;
        grid-gap: 0.9375rem;
        grid-template: auto/repeat(3, 1fr);
        margin-top:1.2rem;
        
    }

    .alert{
        font-size: 0.8125rem;
        line-height: 1.125rem;
        text-transform: uppercase;
        color: #666;
        font-weight: 500;
        margin-top:0.5rem;
    }

    .job{
        width:91%;
        height:fit-content;
        border: 1px solid #dadada;
        padding: 0.9375rem;
        border-radius:5px;
        cursor: pointer;

    }

    .job-poster{
        margin-top:1rem;
        width:6.5rem;
        height:6.5rem;
    }

    .company-name{
        line-height: 1.375rem;
        font-weight: 500;
        margin-bottom: 0.3125rem;
        word-wrap: break-word;
    }

    .c-name{
        font-size: .875rem;
        line-height: 1rem;
        font-weight: 400;
        color: #0e0e0e;
        margin-top:10px;
        color: #0e0e0e;
        word-wrap: break-word;
    
    }

    .applicant-count{
        float:right;
        font-size: .75rem;
        color: #a6a6a6;

    }

    .location{
        font-weight:400;
        font-size:0.8rem;
        margin-top:10px;
        line-height: 1rem;
    }

    .job-stat{
        font-size: .75rem;
        color: #666;
        line-height: 1rem;
        font-weight:400;
    }

    .save-apply{
        margin-top:2.5rem;
        border-top: 1px solid #dadada;
        padding-top:0.75rem;
        display: flex;
        justify-content: space-between;

    }

    .save-apply > button{
        padding:10px;
        padding-left:15px;
        padding-right:15px;
        cursor: pointer;
        outline:none;
        background-color: #fff;
        border:1px solid #0e0e0e;
        border-radius:5px;
        font-size: 0.875rem;
        font-weight: 500;
    }

    .job:hover{
        box-shadow: 0px 2px 8px rgb(0 0 0 / 8%);
    }

    @media (max-width: 950px) {
        .job-container{
            max-width: 100%;
            display:block;

        }

        .job{
            margin-top:1rem;
        }
        width:78%;
        margin-left:6em;
    }


`