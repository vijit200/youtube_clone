import React from 'react'

function LeftMenuItems(props) {
  return (
    <div className={"text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " + props.className} onClick={props.action}>
      <span className='text-xl mr-5'>{props.icon}</span> {props.text}
    </div>
  )
}

export default LeftMenuItems
