
import {AiOutlineHome} from 'react-icons/ai'
import {BsArrowRightCircle} from 'react-icons/bs'
export default function Subtitle({firstTitle,secondTitle}) {
 return (
 <div className="w-full z-10 h-[60px] bg-red-700 flex justify-center items-center sticky top-0">
    <div className="w-full max-w-7xl flex items-center text-white">
        {/* home icon */}
        <div className='px-4 flex items-center border-r-[1px] border-red-600 h-full'>
            <AiOutlineHome size='20' />
        </div>
        {/* 메인타이틀 */}
        <div className='w-52 px-4 flex items-center justify-between border-r-[1px] border-red-600 h-full'>
            <h2>{firstTitle}</h2>
            <div><BsArrowRightCircle size='20'/></div>
        </div>
        {/* 서브타이틀 */}
        <div className='w-52 px-4 flex items-center justify-between '>
            <h2>{secondTitle}</h2>
            <div><BsArrowRightCircle size='20'/></div>
        </div>
    </div>
 </div>
 )
}