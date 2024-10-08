"use client";
import React from 'react'
import ProjectCard from '../subfolder/ProjectCard';

const Projects = () => {
  return (
    <div id='projects'
    className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
        My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 cursor-pointer'>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
        <ProjectCard
          href='https://colab.research.google.com/drive/1pzttUVgHGww7U1U38mdW_NIfC1JaPpP6'
          src="/pulsepredict.jpeg"
          title="PulsePredict"
          description=" 'PulsePredict' is a predictive model that accurately predicts heart disease risk with 93.27% accuracy. It leverages data analysis and feature engineering techniques to enhance its performance."
        
        />
        <ProjectCard
          href=''
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          href=''
          src="/potfolio.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      </div>

    </div>
  )
}

export default Projects