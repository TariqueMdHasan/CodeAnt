import React from 'react'
import './Work.css'
import { GoDotFill } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";

const Data = [
  {
    id: 1,
    title: 'design-system',
    status: 'public',
    tags: 'React',
    storage: '7320 KB',
    date: 'Updated 1 days ago'
  },
  {
    id: 2,
    title: 'codeant-ci-app',
    status: 'private',
    tags: 'Javascript',
    storage: '5871 KB',
    date: 'Updated 2 days ago'
  },
  {
    id: 3,
    title: 'analyticcs-dashboard',
    status: 'Private',
    tags: 'Swift',
    storage: '4521 KB',
    date: 'Updated 5 days ago'
  },
  {
    id: 4,
    title: 'mobile-app',
    status: 'public',
    tags: 'Python',
    storage: '3096 KB',
    date: 'Updated 3 days ago'
  },
  {
    id: 5,
    title: 'e-commerce--platform',
    status: 'Private',
    tags: 'Java',
    storage: '1876 KB',
    date: 'Updated 6 days ago'
  },
  {
    id: 6,
    title: 'blog-website',
    status: 'Public',
    tags: 'HTML/CSS',
    storage: '6210 KB',
    date: 'Updated 4 days ago'
  },
  {
    id: 7,
    title: 'design-system',
    status: 'public',
    tags: 'React',
    storage: '7320 KB',
    date: 'Updated 1 days ago'
  },
  {
    id: 8,
    title: 'codeant-ci-app',
    status: 'private',
    tags: 'Javascript',
    storage: '5871 KB',
    date: 'Updated 2 days ago'
  },
  {
    id: 9,
    title: 'analyticcs-dashboard',
    status: 'Private',
    tags: 'Swift',
    storage: '4521 KB',
    date: 'Updated 5 days ago'
  },
  {
    id: 10,
    title: 'mobile-app',
    status: 'public',
    tags: 'Python',
    storage: '3096 KB',
    date: 'Updated 3 days ago'
  },
  {
    id: 11,
    title: 'e-commerce--platform',
    status: 'Private',
    tags: 'Java',
    storage: '1876 KB',
    date: 'Updated 6 days ago'
  },
  {
    id: 12,
    title: 'blog-website',
    status: 'Public',
    tags: 'HTML/CSS',
    storage: '6210 KB',
    date: 'Updated 4 days ago'
  }
]

function Work() {
  return (
    <div className='Work'>
      {
        Data.map((data) => {
          return (
            <div className='Work-container' key={data.id}>
              <div className='Work-header'>
                <h2>{data.title}</h2>
                <p>{data.status}</p>
              </div>
              <div className='Work-content'>
                <div className='work-content-child-1'>
                  <p>{data.tags}</p>
                  <GoDotFill />
                </div>
                <div className='work-content-child-2'>
                  <BsDatabase />
                  <p>{data.storage}</p>
                </div>
                <div className='work-content-child-3'>
                  <p>{data.date}</p>
                </div>
              </div>
            </div>
          )
    })}
    </div>
  )
}

export default Work



