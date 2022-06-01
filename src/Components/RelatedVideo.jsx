import React from 'react'
import ReactPlayer from 'react-player'

function RelatedVideo({data}) {
  return (
    <div className=' flex mb-1'>
        <div className=' w-2/5 h-28 '>
        <ReactPlayer width="100%" height="100%"url={data.videourl}/>
        </div>
        <div className=' bg-slate-50 w-3/5 h-28 p-1'>
            <h1 className=' h-1/3 font-medium'>{data.title}</h1>
            <h1 className=' h-1/3'>.</h1>
            <div className=' h-1/3 flex justify-between'>
                <span>{data.views}</span>
                <span>{data.year}</span>
            </div>
        </div>
    </div>
  )
}

export default RelatedVideo