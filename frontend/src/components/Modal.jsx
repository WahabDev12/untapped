import { ModalStyled } from "./styles/Modal.Styled";
import { useSelector,useDispatch } from "react-redux";
import { createPost } from "../actions/postAction";
import { useState,useEffect } from 'react';
import { queryAllGroups } from '../actions/groupActions';


const Modal = () => {

    const [title, setTitle] = useState("new test")
    const [description, setDescription] = useState("this is a new test")
    const [group, setGroup] = useState("Jack Group")
    const [image, setImage] = useState("")


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()


    const groupList = useSelector((state) => state.groupList)
    const { loading, error, groups } = groupList

    useEffect(()=> {
        dispatch(queryAllGroups())
    },[])
    

    const handleSubmit = (e) => {   
        e.preventDefault()
        dispatch(createPost(title, description, group, image))
        console.log(dispatch(createPost(title, description, group, image)))
    }  

    return ( 

        <ModalStyled>
           <div className="modal" id="modal-one" aria-hidden="true">
                <div className="modal-dialog">

                    <div className="modal-header">
                        <div className="dropdown">

                            <span className="user-post-name">
                            <img alt="avatar" 
                                 className="avatar"
                                 src={userInfo.profilePicture} 
                            />
                               <a href={userInfo._id}> {userInfo.firstName} {userInfo.lastName} </a>

                            </span>
                            <span className="to">to</span>
                            <select
                               value = {group} 
                               onChange={(e) => {setGroup(e.target.value)}}
                            >
                                <option> Select community</option>

                                {
                                    groups ? groups.map((group)=> {
                                       return  <option key={group._id}>
                                           {group.group_icon} {group.name} </option>
                                    }) : 

                                    <option>Loading...</option>
                                }

                            </select>

                        </div>
                        <a href="#close" className="btn-close" aria-hidden="true">×</a>
                    </div>

                    <form onSubmit = {handleSubmit} >
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
                            <a href="#close">
                                <button type="submit" className="post-btn">
                                    Post    
                                </button>
                            </a> 
                        </div>
                    </form>
                </div>  
          </div>
        </ModalStyled>
     );
}
 
export default Modal;