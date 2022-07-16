import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { PostStyled } from './styles/Post.Styled';


const LoadSkeleton = () => {
    return (
        <>
        <PostStyled>
            <div className='post-wrapper'>
            <div className="post-box">
                    <div>
                        <Skeleton circle={true} height={50} width={50} />
                    </div>
                    <div className="name-and-content">
                            <Skeleton width={80} />
                    </div>
            </div>

            <div className='title-and-caption'>
                <Skeleton count={4} />
            </div>
           
            </div>

            <div className='post-wrapper'>
            <div className="post-box">
                    <div>
                        <Skeleton circle={true} height={50} width={50} />
                    </div>
                    <div className="name-and-content">
                            <Skeleton width={80} />
                    </div>
            </div>

            <div className='title-and-caption'>
                <Skeleton count={4} />
            </div>
           
            </div>


            <div className='post-wrapper'>
            <div className="post-box">
                    <div>
                        <Skeleton circle={true} height={50} width={50} />
                    </div>
                    <div className="name-and-content">
                            <Skeleton width={80} />
                    </div>
            </div>

            <div className='title-and-caption'>
                <Skeleton count={4} />
            </div>
           
            </div>

        </PostStyled>

        </>
      );
}
 
export default LoadSkeleton;