import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { PostStyled } from './styles/Post.Styled';


const LoadingSkeleton = () => {
    return (
        <>
        <PostStyled>
            <div className='post-wrapper'>
            <div className="post-box">
                    <div>
                        <Skeleton circle={true} height={30} width={30} />
                    </div>
                    <div className="name-and-content">
                            <Skeleton width={80} />
                    </div>
            </div>

            <div className='title-and-caption'>
                <Skeleton count={3} />
            </div>
           
            </div>

        </PostStyled>

        </>
      );
}
 
export default LoadingSkeleton;