import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                        <a href="https://www.youtube.com/@priyanathbhukta4956" target="_blank" rel="noopener noreferrer">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <FaYoutube />
                                <span className="text-[15px] ml-[6px]">Youtube</span>
                            </p>
                         </a>

                        <a href="https://github.com/priyanathbhukta/" target="_blank" rel="noopener noreferrer">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxGithubLogo />
                                <span className="text-[15px] ml-[6px]">Github</span>
                            </p>
                        </a>

                        <a href="https://discord.com/channels/697749088858406963/697749088858406966" target="_blank" rel="noopener noreferrer">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxDiscordLogo />
                                <span className="text-[15px] ml-[6px]">Discord</span>
                            </p>
                        </a>

                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://www.instagram.com/priyanathbhukta/" target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>    
                        </p>
                    </a>
                    <a href="https://x.com/PriyanathB90947" target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>    
                        </p>
                    </a>
                    <a href="https://www.linkedin.com/in/priyanath-bhukta/" target="_blank" rel="noopener noreferrer"></a>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <a href="#about-me"
                    className="flex flex-row items-center my-[15px] cursor-pointer">
                      <p>
                        <span className="text-[15px] ml-[6px]">Learning about me</span> 
                      </p>
                           
                    </a>
                    <a href="mailto: priyanathbhukta@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer">
                    <p>
                        <span className="text-[15px] ml-[6px]">priyanathbhukta@gmail.com</span>    
                    </p>
                    </a>
                    
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; BioML Dev 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer