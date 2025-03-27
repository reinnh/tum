export const GreenButton = ({text,id,link}) => {
    return (
    <div className="container">
      <a href={link} id={id} className='bg-green-600 rounded-sm hover:opacity-75 cursor-pointer hover:shadow-3xl hover:shadow-gray-900 text-white px-3 py-2'>{text}</a>
     </div>
    
    )
}
export const BlueButton = ({text,id,onClick}) => {
    return (
    <div className="container">
      <button type='button'id={id} className='bg-green-400 text-white px-3 py-2 cursor-pointer' onClick={onClick}>{text}</button>
     </div>
    
    )
}