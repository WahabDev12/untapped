import { ModalStyled } from "./styles/Modal.Styled";
import { useSelector,useDispatch } from "react-redux";
import { createPost } from "../actions/postAction";
import { useState,useEffect } from 'react';
import { queryAllGroups } from '../actions/groupActions';
import { TailSpin } from "react-loader-spinner";


const Modal = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [group, setGroup] = useState("")
    const [isFailed,setIsFailed]  = useState(null)
    const [success, setIsSuccess] = useState(null)
    const [isPosting, setIsPosting] = useState(false)

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const groupList = useSelector((state) => state.groupList)
    const { loading, error, groups } = groupList


    useEffect(()=> {
        dispatch(queryAllGroups())
        setIsPosting(false)
    },[])
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        if(description === "" || title === "" || group === ""){
            setIsFailed("All fields required. Please fill the form")
            setIsPosting(false)
        }
        else{
            dispatch(createPost(title, description, group))
            setIsSuccess("Post successful")
            setIsPosting(true)
        }

    }  

    return ( 

        <ModalStyled>
        <form required onSubmit={handleSubmit}>
           <div className="modal" id="modal-one" aria-hidden="true">
                <div className="modal-dialog">

                    <div className="modal-header">
                    {
                        isFailed && 
                            <div className="error-wrapper"> 
                                <span className="error">
                                    {isFailed}
                                </span>
                            </div>
                    }

                    {
                        success && 
                            <div className="error-wrapper success"> 
                                <span className="error">
                                    {success}
                                </span>
                            </div>
                    }

                        <div className="dropdown">

                            <span className="user-post-name">
                            <img alt="avatar" 
                                 className="avatar"
                                 src={userInfo.profilePicture} 
                            />
                            <a href={userInfo._id}>
                                {userInfo.firstName} {userInfo.lastName} 
                            </a>

                            </span>
                            <span className="to">to</span>
                            <select
                               required
                               value = {group} 
                               onChange={(e) => {setGroup(e.target.value)}}
                            >
                                <option > Select community</option>

                                {
                                    groups ? groups.map((group)=> {
                                       return  <option key={group._id} value={group.name}>
                                         {group.name} </option>
                                    }) : 

                                    <option disabled >Loading groups...</option>
                                }

                            </select>

                        </div>
                        <a href="#close" className="btn-close" aria-hidden="true">×</a>
                    </div>

                        <div className="modal-body">
                            <input className="title" 
                                type="text" 
                                placeholder= "Create a title" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />  

                            <br></br>
                            <textarea className="caption"
                                    placeholder="Add a description or link (optional)"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}   
                            >
                            </textarea>  

                        </div>
                        <div className="modal-footer"> 
                            {
                                !isPosting ? 

                                <button href="#close" className="post-btn" >
                                        Post
                                </button>
                                :
                                <button disabled  className="post-btn" href="#close">
                                    <TailSpin width={20} height={20} ariaLabel="loading-indicator" />
                                </button>
                            
                            }
                            
                        </div>
                </div>  
                
            </div>
        </form>
        </ModalStyled>
     );
}
 
export default Modal;