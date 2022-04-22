import arrayToTree from 'array-to-tree'
import Comment from './Comment'


function Comments({ comments }) {
  

  const nextedComments =  arrayToTree(comments, {
    parentProperty: 'parentId',
    customID: '_id',
    childrenProperty: 'replies'
 })

  return (
    <div className='px-2 py-1  lg:px-6 lg:py-3 bg-white rounded-md sm:flex flex flex-col  justify-start gap-3 lg:gap-6 '>
      <p className='text-xl '>{comments.length} Comment</p>
      {nextedComments.map(comment => (
          <Comment  key={comment._id}  comment={comment} />
      ))}
      </div>
  )
}

export default Comments