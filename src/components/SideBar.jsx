import React from 'react'

function SideBar() {
  return (
    <div className='absolute  sm:static right-0 sm:left-0 sm:flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-2 p-9 h-full rounded-md sm:p-0 bg-white sm:bg-inherit sm:w-full  md:flex-2'> 
      <div className="hidden  rounded-lg sm:flex flex-col  sm:w-full text-md bg-white  items-center justify-end p-4 ">
        <h2>Frontend Mentor</h2>
        <h4>Feedback Board</h4>
 </div>
      <div className="flex gap-1 flex-wrap  items-center justify-start border w-48 lg:text-xl bg-white sm:w-full rounded-lg p-3 sm:p-3 lg:p-6">
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>All</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Ux</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Ui</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Enhancement</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Bug</span>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit'>Feature</span>


 </div>
      <div className="flex justify-center flex-col border w-48
        bg-white rounded-lg sm:w-full p-5">
        <div className=" flex justify-between">
          <h4>Roadmap</h4>
          <a href="#">Views</a>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <p>Planned</p>
            <p>in-Progress</p>
            <p>Live</p>
          </div>
          <div>
            <p>2</p>
            <p>3</p>
            <p>1</p>
</div>
        </div>
 </div>
    </div>
  )
}

export default SideBar


