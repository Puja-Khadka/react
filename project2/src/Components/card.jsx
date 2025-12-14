import React from 'react'

export default function Card({username}) {
  return (
   <div className="flex flex-col items-center p-7 rounded-2xl shadow-black shadow-lg w-64 gap-4 m-auto">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt src="https://images.pexels.com/photos/29707980/pexels-photo-29707980.jpeg?cs=srgb&dl=pexels-m-emre_celik-2054744248-29707980.jpg&fm=jpg&_gl=1*1d82rg4*_ga*NDkwMjIyNzQ1LjE3NjU3MDM2NDU.*_ga_8JE65Q40S6*czE3NjU3MDM2NDQkbzEkZzEkdDE3NjU3MDM2NjYkajM4JGwwJGgw" />
  </div>
  <div className="">
    <span className="font-bold">{username}</span><br/>
    <span>The Anti-Patterns</span>
    <span className="flex">
      <span >No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}
