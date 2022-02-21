import React from 'react'
import BoxWidget from './resuable/BoxWidget'


function FeedCategory() {
  const categories = [
    { name: "All"},{name: "Ux" }, {name: "Ui"}, {name: "Feature" } , {name: "Bug" }, {name: "Enhancement" }
  ]

  const onSelectCategory = (category) => {
    console.log(category.toLowerCase())
  }
  return (
    <div className='flex  gap-2 lg:gap-3 flex-wrap  items-center justify-start  p-4 lg:text-xl'>
      {categories.map(category => <BoxWidget onClick={() => onSelectCategory(category.name)} key={category.name} title={category.name} flex_dir='row'/>)}

    </div>
  )
}

export default FeedCategory