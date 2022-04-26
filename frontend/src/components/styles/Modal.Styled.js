import styled from "styled-components";


export const ModalStyled = styled.section`


    .modal:before {
        content: "";
        display: none;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
    }

    .modal:target:before {
        display: block;
    }

    .modal:target .modal-dialog {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0);
        top: 20%;
    }

    .modal-dialog {
        background: #fefefe;
        border-radius: 8px;
        margin-left: -200px;
        position: fixed;
        left: 40%;
        top: -100%;
        z-index: 11;
        height:48%;
        max-height:100%;
        width: 47em;
        max-width: 100%;
        -webkit-transform: translate(0, -500%);
        -ms-transform: translate(0, -500%);
        transform: translate(0, -500%);
        transition: transform 0.4s ease-out;
        
    }

    .adjust{
        height:57%;
    }

    .modal-body {
        padding-left: 30px;
    }

    .modal-header,
    .modal-footer {
        padding: 20px 20px;
    }

    .modal-header{
        padding-bottom:10px;
    }

    .modal-header h2 {
        font-size: 20px;
    }

    .modal-footer {
        text-align: right;
    }

    /*ADDED TO STOP SCROLLING TO TOP*/
    .close {
        display: none;
    }

    .dropdown{
        display:flex;
        align-items: center;
        padding:10px;
    }
    
    select{
        outline:none;
        border:none;
        width:180px;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 15px;
        padding:0 0.75rem;
        height:40px;
        font-size: 14px;
        background-color: #fefefe;
        border:1px solid #dadada;
        color:#666;
    }

   .to{
       margin-left:20px;
   }

   .user-post-name{
        outline:none;
        border:none;
        max-width: fit-content;
        width:200px;
        border-radius: 5px;
        cursor: pointer;
        padding:10px 10px;
        height:19px;
        display: flex;
        align-items: center;
        background-color: #fefefe;
        border:1px solid #dadada;
   }

   .user-post-name > a{
       padding-left:2px;
       cursor: pointer;
       color:#666;
       text-transform: capitalize;
   }

   .avatar{
       border-radius: 1000px;
       width:35px;
       height:35px;
   }

   .title{
       outline: none;
       border: none;
       color:#666;
       font-weight: 400;
       font-size:1.125rem;
       height: auto ;
       background: transparent;
       color:#0e0e0e;
       width:100%;
       line-height: 1.375rem;
   }

   .caption{
       outline: none;
       width:100%;
       max-width:100%;
       border: none;
       max-height:100%;
       resize: none;
       overflow-y: scroll;
       word-wrap: break-word;
       padding: 0.625rem 0 1.20rem 0;
       
   }

    textarea::-webkit-scrollbar {
        width: 0.5em;
        border-radius: 1rem;
        background-color: #5F70CF;
        height:100%;
    }
 
    textarea::-webkit-scrollbar-track {
        border-radius: 1000px;
        height:100%;

    }
    
 
   
   .post-btn{
       padding:10px 40px 10px 40px;
       height: 2.5rem;
       outline:none;
       border:none;
       color:#0e0e0e;
       font-size:15px;
       background-color: #c9f270;
       border-radius: 8px;
       text-decoration: none;
       white-space: normal;
       cursor: pointer;
   }

   .btn-close{
        right: 1.5rem;
        top: 1.5rem;
        width:2.25rem;
        height:2.30rem;
        box-shadow: 0 2px 8px rgb(0 0 0 / 16%);
        border-radius: 50%;
        text-align: center;
        font-size: 28px;
        background-color:#fff;
   }

   .error-wrapper{
     width:400px;
     margin:auto;
     display: none;
     justify-content: center;
     font-weight:500;
     font-size:16px;
     padding:10px;
     margin-bottom:1rem;
     line-height: 1.5rem;
     border-radius: 4px;;
  }

  .success {
      display:flex;
      background-color: #c2f1c2;
  }

  .failure{
      display: flex;
      background-color:#FCD7D4;
  }




  .error > a{
    text-decoration: underline;
    font-weight:600;
  }

    @media (max-width: 950px) {
        .modal-dialog{
            width:30em;
            left:50%;
    }

    .btn-close{
        top:0.5rem;
        right:0.5rem;
        width:1.5rem;
        height:1.6rem;
        font-size:21px;
    }

    .modal-dialog{
        
        height:51%;
    }

    }




`