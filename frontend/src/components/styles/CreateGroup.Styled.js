import styled from "styled-components";

export const CreateGroupStyled = styled.div`

    max-height: 100vh;
    margin: auto 0;
    padding: 2.45rem;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;


    .group-alert{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 125%;
        font-family: 'Cambon Demi', 'Comic Sans';
        font-weight: 600;
        font-size: 2rem;
        color: #0e0e0e; 
    }

    .main-div{
        font-size: 1em;
        background-color: #fff;
        padding: 0;
        margin:0px;
        padding: 1.75rem;
        box-sizing: border-box;
        box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
        border:none;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        display: block;
    }

    .primary_div{
        display: flex;

    }

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

    .group-description{
        margin-top: 0.75rem;
        color: #666;
        font-size: .75rem;
        font-weight: 400;
        line-height: 130%;
    }

    .desc-invite{
        display: flex;
        justify-content: space-between;
        width:100%;
        max-width: 100%;
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
        width: 200px;
        margin-left:5rem;
        border-radius:4px;
        font-size:14px;
        font-weight:bold;
    }


    /* INPUT FIELDS*/

    .fields{
        margin-top:3rem;
        display:block;

    }

    label{
        font-weight: 600;
        font-size: 14px;
    }

    .field{
        height: 3rem;
        display: block;
        line-height: 1.375rem;
        margin-top: 10px;
        padding: .1em .875rem .1em;
        position: relative;
        width: 80%;
        font-size: 1rem;
        outline:none;
        border:2px solid rgb(0 0 0 / 5%);
        border-radius: 6px;
        margin-bottom:10px;
    }

    .field:focus{
        border:1.5px solid blue; 
    }

    #c_desc{
        height:100px;
        width: 625px;
        resize: none;
        padding:10px;
    }

    .c_photo{
        border:2.5px dotted #a6a6a6;
    }
    .c_icon{
        border:2.5px dotted #a6a6a6;    
    }

    .photo-upload{
        padding-top:5px;
        color: #666;
        font-size: 1.125rem;
        margin: 0;
        box-sizing: border-box;
        background: #fff;
        position: relative;
        width: 85%;
        border-radius: 4px;
        margin-bottom: 1.25rem;
        z-index: 2;
        height: 3.5rem;
        border: 1px dashed #dadada;

    }

    .photo-upload:hover{
        border: 1px dashed blue;

    }

    .field-label{
        color: #666;
        font-size: 1.125rem;
        margin: 0;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: .5rem;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        position: relative;
        z-index: 10;
    }

    .icon{
        color: #666;
        font-size: 1.125rem;
        cursor: pointer;
        margin: 0;
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #f2f2f2;
        height: 2rem;
        width: 2rem;
        margin-right: .5rem;
    }

    .title{
        cursor: pointer;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 130%;
        font-weight: 600;
        font-size: .85rem;
        color: #666;
    }

    .file-input{
        -webkit-font-smoothing: antialiased;
        -webkit-box-direction: normal;
        display: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .slot{
        color: #666;
        font-size: 1.125rem;
        margin: 0;
        box-sizing: border-box;
        background: #fff;
        border-radius: .3125rem;
        position: relative;
        width: 100%;
        margin-top:10px;
    }
    
    .color-field{
        color: #666;
        font-size: 1.125rem;
        margin:10px 0;
        padding: 5px;
        box-sizing: border-box;
        background: #fff;
        border-radius: .3125rem;
        margin-bottom: .8125rem;
        position: relative;
        width: 86%;
        border:2px solid rgb(0 0 0 / 5%);
    }
    
    .color-input{
        -webkit-appearance: none;
        border: none;
        width: 32px;
        height: 32px;
        margin-top:5px;
        margin-left:3px;
    }

    .color-input::-webkit-color-swatch-wrapper{
        padding: 0;
    }

    input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 4px; 
    }

    select{
        outline:none;
        border:none;
        width:85.5%;
        border-radius: 5px;
        cursor: pointer;
        padding:0 0.75rem;
        height:55px;
        font-size: 14px;
        background-color: #fefefe;
        border:2px solid rgb(0 0 0 / 5%);
    }

    select:hover{
        border:1px solid blue;
    }

    .select{
        margin-top:5px;
        margin-bottom:10px;

    }   

    .checkbox-label{
        font-size:1rem;
        color: #666;
        font-weight: 400;
    }

    .link-to{
        color:#0e0e0e;  
        text-decoration: underline;
    }
    .checkbox-input{
        height: 17px;
        width: 17px;
        border-radius: 2px;
    }

    .terms-text{
        margin-left: 5px;
    }

    .checkbox-wrapper{
        margin-top:2rem;
    }

    .create-wrapper{
        margin-top:1.5rem;

    }
    .create-btn{
        outline:none;
        border:none;
        padding:10px;
        width:87%;
        height:45px;
        background-color: #c9f270;
        font-size:0.95rem;
        font-weight: 600;
        border-radius: 4px;
        cursor:pointer;
    }

    .create-btn:hover{
        background-color: #bce95b;
    }


`