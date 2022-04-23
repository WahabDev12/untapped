import styled from "styled-components";

export const OneTabStyled = styled.div`

    display: flex;
    align-items: center;
    position:relative;
    cursor:pointer;

    &:hover{
        background-color:#FEF9FA;
        border-left:2.5px solid black;
    }

    .icon{
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: #5f5f5f;
    }

    span{
        padding: 0px 7px;
        font-family:"Inter",sans-serif ;
        font-size: 14px;
        text-transform: capitalize;
    }

    .avatar{
        border-radius:100px;
        width:40px;
        height:40px;
    }

    .communities-tab{
        display:flex;
        padding: 15px 2px;
        justify-content: center;
        align-items:center ;
        margin-left:8px;
        
    }

    .communities-tab > p{
        letter-spacing:1px;
        font-size:0.85rem;
        font-family:'Poppins',sans-serif ;
        font-weight:400;
        color:#0e0e0e;
        line-height:150% ;
        
    }

    .join-btn{
        outline:none;
        width:70px;
        padding:6px;
        border:1px solid #a6a6a6;
        border-radius:100px;
        margin-left:3rem;
        font-family:'Inter',sans-serif ;
        cursor: pointer;
        background-color:#fafafa;
        font-weight:400;
    }


    @media (max-width: 950px) {
        span{
            display:none ;
        }

        .spacer{
            height:10px;
        }
        .communities-tab{
            display:none;
        }
        .search-communities{
            display:none ;
        }
    }

`