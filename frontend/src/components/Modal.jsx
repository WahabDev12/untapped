import { ModalStyled } from "./styles/Modal.Styled";
import { useSelector,useDispatch } from "react-redux";
import { createPost } from "../actions/postAction";
import { useState,useEffect } from 'react';
import { queryAllGroups } from '../actions/groupActions';
import { TailSpin } from "react-loader-spinner";
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';


const Modal = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [group, setGroup] = useState("")
    const [isPosting, setIsPosting] = useState(false)
    const [isPosted, setIsPosted] = useState(isPosting)

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
            setIsPosting(false)

            // Show user notification
            toast.error("All fields required", {
                position: toast.POSITION.BOTTOM_LEFT,
                autoClose:2000,
                theme: "colored"
            });  
        }
        else{
            dispatch(createPost(title, description, group))
            setIsPosting(true)
            if(setIsPosting){
                setIsPosted(false)
            }
            setIsPosted(true)
            // Show user notification   
            toast.success("Post added successfully", {
                position: toast.POSITION.BOTTOM_LEFT, 
                autoClose:4000,
                theme: "colored"
            });  
            window.location.reload("/app/home")

        }

    }  

    return ( 

        <ModalStyled>
        <form required onSubmit={handleSubmit}>
           <div className={isPosted === true ? "close" : "modal"}
                id="modal-one" aria-hidden="true"
            >
                <div className="modal-dialog">

                    <div className="modal-header">

                        <div className="dropdown">

                            <span className="user-post-name">
                            <img alt="avatar" 
                                 className="avatar"
                                 src={userInfo.profilePicture} 
                            />
                            <a href={`/app/profile/${userInfo._id}`}>
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
                                    !loading ? groups.map((group)=> {
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
                            <div className="editor">
                                <div className="slot">
                                    <label className="field-label">
                                        <span className="icon">
                                            <ion-icon name="image-outline"></ion-icon>    
                                        </span>
                                        <input className="file-input" type="file" hidden="hidden" accept="image/*" />
                                    </label>

                                </div>

                                <label className="field-label">
                                    <span className="icon-link">
                                        <Icon icon="akar-icons:link-chain" />
                                    </span>
                                </label>


                        </div>

                            {
                                !isPosting ? 

                                <button  className="post-btn" >
                                        Post
                                </button>
                                :
                                <button disabled  className="post-btn" >
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