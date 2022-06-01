import { Share, ThumbDown, ThumbUp } from '@mui/icons-material'
import React from 'react'
import RelatedVideo from './RelatedVideo'
import ReactPlayer from 'react-player'
import { RelatedData } from '../DummyData'
function VideoPlayer() {
  return (
    <div className=' h-screen flex-wrap sm:flex '>
        <div className=' bg-slate-200 basis-4/5 p-4'>
            <div className=' bg-slate-100 h-5/6'>
                <ReactPlayer width="100%" height="100%" url="//youtu.be/vv_0qXfBfA4"/>
            </div>
            <div className=' bg-slate-100 h-1/6 pl-3 '>
              <div className=' h-1/3 flex items-center'>
              <h1 className=' font-semibold text-xl'>The Champions: Season 6, Episode 3</h1>
              </div>
              <div className=' h-1/3 w-44 flex items-center justify-between'>
                  <span>1,875,358 views</span>
                  <span> 2022</span>
              </div>
              <div className=' h-1/3 w-28 flex items-center justify-evenly'>
                  <ThumbUp/>
                  <ThumbDown/>
                  <Share/>
              </div>
            </div>
        </div>
        <div className=' bg-slate-200 p-2 basis-1/5 overflow-hidden'>
            {RelatedData.map((data)=>(
                <RelatedVideo key={data.id} data={data}/>
            ))}
        </div>
    </div>
  )
}

export default VideoPlayer