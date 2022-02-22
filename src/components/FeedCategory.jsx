import React from 'react'
import BoxWidget from './resuable/BoxWidget'


function FeedCategory() {
  const items = [
    { name: "All"},{name: "Ux" }, {name: "Ui"}, {name: "Feature" } , {name: "Bug" }, {name: "Enhancement" }
  ]

  const onItemSelect = (category) => {
    console.log(category.toLowerCase())
  }
  return (
    <div className='flex  gap-2 lg:gap-3 flex-wrap  items-center justify-start  p-4 lg:text-xl'>
      {items.map(item => <BoxWidget onClick={() => onItemSelect(item.name)} key={item.name} title={item.name} flex_dir='row'/>)}

    </div>
  )
}

export default FeedCategory