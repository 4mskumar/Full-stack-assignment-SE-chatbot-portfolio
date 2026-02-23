import React from 'react'
import { Button } from '../ui/button'

const ProjectCard = ({ val }) => {
  // console.log(val);
  
  return (
    <div className="projectCard cursor-pointer h-[45vh] flex flex-col items-start">
      <div className="w-full relative overflow-hidden h-full">
        <img
          src={val.imageUrl}
          className="w-full duration-300 transition-all ease-in-out hover:shadow-2xl hover:scale-110 h-full object-cover"
          alt=""
        />
        <h1 className='text-black z-50 text-2xl font-bold absolute -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2'>{val.status}</h1>
      </div>
      <div className="mt-3 flex items-center justify-between px-2 w-full">
        <div>
          <h1 className="text-xl font-inter tracking-tighter font-semibold">{val.title}</h1>
          <h1 className="text-lg font-roboto text-zinc-700 tracking-tighter">{val.type}</h1>
        </div>
        <div>
          <a href={val.projectUrl} target="_blank" className='z-[2000000]'>
            <Button variant='outline' className={`text-black z-[200000] bg-transparent border-black ${val.status === 'In Progress' ? 'bg-black text-white' : ''}` }>
              {val.status === 'In Progress' ? 'In progress' : 'View Project'}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
