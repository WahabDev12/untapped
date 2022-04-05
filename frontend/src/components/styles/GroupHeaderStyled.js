import styled from "styled-components";

export const GroupHeaderStyled = styled.div`

    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:2rem;
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    margin-bottom:4rem;
    width:100%;

    .group-icon{
        height: 4rem;
        width: 4rem;
        padding: 0.125rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgb(0 0 0 / 16%);
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }
    
    .group-info{
        width:100%;
    }
    .group-icon > img{
        width:60px;
        height:60px;
    }

    .group-name{
        color:${({ bg }) => bg || 'rgb(146,96,255)'};
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 125%;
        display: block;
        margin-bottom:0.55rem;
    }   

    .members__privacy{
        font-size:13px;
        font-weight:400;
    }

    .banner{
        width: 508px;
        object-position: top;
        border-bottom-left-radius: 37.5rem;
        position: absolute;
        top: 0;
        right: 0;
        height:176px;
        max-height: 80%;
    }

    .group-description{
        margin-top: 0.75rem;
        color: #666;
        font-size: .75rem;
        font-weight: 400;
        line-height: 130%;
    }

    .desc-invite{
        display: flex;
        width:100%;
    }

    .invite{
        background-color: ${({ bg }) => bg || 'rgb(146,96,255)'};
        color: white;
        border:none;
        outline:none;
        padding:0.275rem;
        margin-top:1rem;
        height: 100%;
        max-height: 3rem;
        cursor: pointer;
        width: 250px;
        margin-left:10rem;
        border-radius:4px;
        font-size:14px;
        font-weight:bold;
    }

    
`