export const GreenButton = ({text,id,onClick}) => {
    return (
    <div className="container">
      <button type='button'id={id} className='bg-green-800 rounded-sm hover:opacity-75 cursor-pointer hover:shadow-3xl text-white px-3 py-2' onClick={onClick}>{text}</button>
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