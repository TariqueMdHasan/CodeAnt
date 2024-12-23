import React from 'react';
import './Work.css';
import { GoDotFill } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";


const Data = [
  {id: 1, title: 'design-system', status: 'public', tags: 'React', storage: '7320 KB', date: 'Updated 1 days ago' },
  { id: 2, title: 'codeant-ci-app', status: 'private', tags: 'Javascript', storage: '5871 KB', date: 'Updated 2 days ago' },
  { id: 3, title: 'analyticcs-dashboard', status: 'Private', tags: 'Swift', storage: '4521 KB', date: 'Updated 5 days ago' },
  { id: 4, title: 'mobile-app', status: 'public', tags: 'Python', storage: '3096 KB', date: 'Updated 3 days ago' },
  { id: 5, title: 'e-commerce--platform', status: 'Private', tags: 'Java', storage: '1876 KB', date: 'Updated 6 days ago' },
  { id: 6, title: 'blog-website', status: 'Public', tags: 'HTML/CSS', storage: '6210 KB', date: 'Updated 4 days ago' },
  { id: 7, title: 'portfolio-website', status: 'Public', tags: 'React', storage: '5120 KB', date: 'Updated 3 days ago' },
  { id: 8, title: 'task-manager', status: 'Private', tags: 'Python', storage: '4012 KB', date: 'Updated 5 days ago' },
  { id: 9, title: 'weather-app', status: 'Public', tags: 'Javascript', storage: '6200 KB', date: 'Updated 2 days ago' },
  { id: 10, title: 'finance-dashboard', status: 'Private', tags: 'Java', storage: '4500 KB', date: 'Updated 1 day ago' },
  { id: 11, title: 'social-media-app', status: 'Public', tags: 'Swift', storage: '3892 KB', date: 'Updated 6 days ago' },
  { id: 12, title: 'e-commerce-site', status: 'Private', tags: 'React', storage: '7920 KB', date: 'Updated 8 days ago' },
  { id: 13, title: 'chat-application', status: 'Public', tags: 'Node.js', storage: '5301 KB', date: 'Updated 2 days ago' },
  { id: 14, title: 'photo-gallery', status: 'Private', tags: 'Vue', storage: '4720 KB', date: 'Updated 5 days ago' },
  { id: 15, title: 'inventory-system', status: 'Public', tags: 'C#', storage: '6800 KB', date: 'Updated 7 days ago' },
  { id: 16, title: 'game-engine', status: 'Private', tags: 'C++', storage: '10240 KB', date: 'Updated 3 days ago' },
  { id: 17, title: 'recipe-finder', status: 'Public', tags: 'Python', storage: '5128 KB', date: 'Updated 6 days ago' },
  { id: 18, title: 'music-player', status: 'Private', tags: 'Kotlin', storage: '7590 KB', date: 'Updated 4 days ago' },
  { id: 19, title: 'travel-booking', status: 'Public', tags: 'Javascript', storage: '4520 KB', date: 'Updated 9 days ago' },
  { id: 20, title: 'event-planner', status: 'Private', tags: 'PHP', storage: '3800 KB', date: 'Updated 2 days ago' },
  { id: 21, title: 'task-scheduler', status: 'Public', tags: 'Ruby', storage: '4900 KB', date: 'Updated 5 days ago' },
  { id: 22, title: 'news-aggregator', status: 'Public', tags: 'Go', storage: '6320 KB', date: 'Updated 7 days ago' },
  { id: 23, title: 'video-streaming', status: 'Private', tags: 'Java', storage: '9200 KB', date: 'Updated 1 day ago' },
  { id: 24, title: 'health-tracker', status: 'Public', tags: 'Flutter', storage: '7320 KB', date: 'Updated 8 days ago' },
  { id: 25, title: 'expense-manager', status: 'Private', tags: 'Swift', storage: '5820 KB', date: 'Updated 4 days ago' },
  { id: 26, title: 'online-editor', status: 'Public', tags: 'React', storage: '6500 KB', date: 'Updated 6 days ago' },
  { id: 27, title: 'language-translator', status: 'Private', tags: 'Python', storage: '8900 KB', date: 'Updated 3 days ago' },
  { id: 28, title: 'quiz-app', status: 'Public', tags: 'HTML/CSS', storage: '4320 KB', date: 'Updated 5 days ago' },
  { id: 29, title: 'crypto-tracker', status: 'Private', tags: 'Node.js', storage: '7120 KB', date: 'Updated 2 days ago' },
  { id: 30, title: 'forum-platform', status: 'Public', tags: 'PHP', storage: '3810 KB', date: 'Updated 9 days ago' },
  { id: 31, title: 'password-manager', status: 'Private', tags: 'Java', storage: '4820 KB', date: 'Updated 1 day ago' },
  { id: 32, title: 'restaurant-finder', status: 'Public', tags: 'Flutter', storage: '5320 KB', date: 'Updated 8 days ago' },
  { id: 33, title: 'file-uploader', status: 'Private', tags: 'Javascript', storage: '4720 KB', date: 'Updated 4 days ago' },
  { id: 34, title: 'messaging-app', status: 'Public', tags: 'React', storage: '8920 KB', date: 'Updated 6 days ago' },
  { id: 35, title: 'stock-market', status: 'Private', tags: 'Python', storage: '6230 KB', date: 'Updated 5 days ago' },
  { id: 36, title: 'todo-list', status: 'Public', tags: 'HTML/CSS', storage: '3210 KB', date: 'Updated 2 days ago' },
  { id: 37, title: 'blog-backend', status: 'Private', tags: 'Node.js', storage: '4100 KB', date: 'Updated 7 days ago' },
  { id: 38, title: 'AI-assistant', status: 'Public', tags: 'Python', storage: '9990 KB', date: 'Updated 1 day ago' },
  { id: 39, title: 'survey-app', status: 'Private', tags: 'Kotlin', storage: '5020 KB', date: 'Updated 4 days ago' },
  { id: 40, title: 'fitness-app', status: 'Public', tags: 'Flutter', storage: '6200 KB', date: 'Updated 6 days ago' },
  { id: 41, title: 'hotel-reservation', status: 'Private', tags: 'Java', storage: '8120 KB', date: 'Updated 2 days ago' },
  { id: 42, title: 'learning-platform', status: 'Public', tags: 'React', storage: '7210 KB', date: 'Updated 9 days ago' },
  { id: 43, title: 'notes-app', status: 'Private', tags: 'Javascript', storage: '4520 KB', date: 'Updated 3 days ago' },
  { id: 44, title: 'invoice-generator', status: 'Public', tags: 'Ruby', storage: '5310 KB', date: 'Updated 5 days ago' },
  { id: 45, title: 'cms-system', status: 'Private', tags: 'PHP', storage: '3810 KB', date: 'Updated 8 days ago' },
  { id: 46, title: 'recipe-app', status: 'Public', tags: 'Swift', storage: '4620 KB', date: 'Updated 1 day ago' },
  { id: 47, title: 'chat-bot', status: 'Private', tags: 'Python', storage: '7320 KB', date: 'Updated 4 days ago' },
  { id: 48, title: 'job-portal', status: 'Public', tags: 'Java', storage: '8520 KB', date: 'Updated 6 days ago' },
  { id: 49, title: 'course-scheduler', status: 'Private', tags: 'C#', storage: '6200 KB', date: 'Updated 5 days ago' },
  { id: 50, title: 'ticket-booking', status: 'Public', tags: 'Javascript', storage: '7920 KB', date: 'Updated 2 days ago' },
  { id: 51, title: 'currency-converter', status: 'Private', tags: 'React', storage: '5120 KB', date: 'Updated 7 days ago' },
  { id: 52, title: 'portfolio-tracker', status: 'Public', tags: 'Flutter', storage: '6780 KB', date: 'Updated 8 days ago' },
  { id: 53, title: 'game-library', status: 'Private', tags: 'C++', storage: '11200 KB', date: 'Updated 3 days ago' },
  { id: 54, title: 'live-chat', status: 'Public', tags: 'Node.js', storage: '4320 KB', date: 'Updated 6 days ago' },
  { id: 55, title: 'data-visualizer', status: 'Private', tags: 'Python', storage: '8200 KB', date: 'Updated 1 day ago' },
  { id: 56, title: 'blog-helper', status: 'Public', tags: 'HTML/CSS', storage: '5400 KB', date: 'Updated 3 days ago' },
];



function Work({ searchTerm }) {
    const filteredData = Data.filter(data => 
        data.title.toLowerCase().includes(searchTerm) || 
        data.tags.toLowerCase().includes(searchTerm) || 
        data.status.toLowerCase().includes(searchTerm)
    );

    return (
        <div className='Work'>
            {filteredData.map(data => (
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
            ))}
        </div>
    );
}

export default Work;
