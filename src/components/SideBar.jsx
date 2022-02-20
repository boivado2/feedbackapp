import React from 'react'
import BoxWidget from './resuable/BoxWidget'

function SideBar({ mobileSidebar }) {
  console.log(mobileSidebar)
  return (
    <div className={` absolute flex sm:transform-none sm:static right-0 sm:left-0  flex-col sm:flex-row md:flex-col gap-4 sm:gap-2 p-9 h-full rounded-md sm:p-0 bg-white sm:bg-inherit sm:w-full  md:flex-2  ${!mobileSidebar  ? 'translate-x-72' : 'transform-none'} transition-all ease-linear delay-75 `}> 
      <div className="hidden bg-radial text-white  rounded-lg sm:flex flex-col  sm:w-full bg-white  items-start justify-end p-4 text-clip ">
        <h1 className='text-base'>Frontend Mentor</h1>
        <h2 className='text-xs'>Feedback Board</h2>
 </div>
      <div className="flex gap-1 flex-wrap  items-center justify-start border w-48 lg:text-xl bg-white sm:w-full rounded-lg p-3">
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>All</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Ux</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Ui</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Enhancement</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Bug</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Feature</span>
        <BoxWidget title={'Me'} iconName={'arrowUp'} flex_dir="row" />


 </div>
      <div className="flex justify-center flex-col border w-48
        bg-white rounded-lg sm:w-full p-3">
        <div className=" flex justify-between mt-3 mb-3">
          <h4 className='mr-4'>Roadmap</h4>
          <a href="#">Views</a>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <p>Planned</p>
            <p className='my-2'>in-Progress</p>
            <p>Live</p>
          </div>
          <div>
            <p>2</p>
            <p className='my-2'>3</p>
            <p>1</p>
</div>
        </div>
 </div>
    </div>
  )
}

export default SideBar








