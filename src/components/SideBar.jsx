import React, { useEffect, useState } from 'react'
import FeedCategory from './FeedCategory'
import getCategories from './../services/fakeCategoriesService';

function SideBar({ mobileSidebar, selectedCategory, onSelectedCategory  }) {


  const [categories, setCategories] = useState([])

  useEffect(() => {
    const categories = [{name: 'All'}, ...getCategories()]
    setCategories(categories)
  }, [])
  
  // const categories = [
  //   { name: "All"},{name: "Ux" }, {name: "Ui"}, {name: "Feature" } , {name: "Bug" }, {name: "Enhancement" }
  // ]

  const handleCategorySelect = (category) => {
    onSelectedCategory(category)
  }
  return (
    <div className={` absolute  flex sm:transform-none sm:static right-0 sm:left-0  flex-col sm:flex-row md:flex-col gap-4 sm:gap-2 p-9 h-full rounded-sm sm:p-0 bg-light-white sm:bg-inherit sm:w-full  md:flex-2  ${!mobileSidebar  ? 'translate-x-72' : 'transform-none'} transition-all ease-linear delay-75 z-20`}> 
      <div className="hidden bg-radial text-white  rounded-lg sm:flex flex-col  sm:w-full bg-white  items-start justify-end p-4 text-clip ">
        <h1 className='text-base'>Frontend Mentor</h1>
        <h2 className='text-xs'>Feedback Board</h2>
 </div>
      <div className="w-48 bg-white sm:w-full rounded-lg ">
        <FeedCategory onItemSelect={handleCategorySelect} selectedItem={selectedCategory} items={ categories}/>
 </div>
      <div className="flex justify-center flex-col  w-48
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








