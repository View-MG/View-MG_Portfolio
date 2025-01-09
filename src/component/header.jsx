function Header() {
    return (
        <div className='bg-black grid grid-cols-2 p-10 items-center'>
            <div className='text-3xl ml-16'>PORTFOLIO</div>
            <ul className='flex items-center'>

                <a href=""><li className='relative inline-block font-inherit text-[20px] no-underline mx-[3vw] 
                overflow-auto after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Home</li></a>

                <a href=""><li className='relative inline-block font-inherit text-[20px] no-underline mx-[3vw] 
                overflow-auto after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                after:bg-white after:transition-all after:duration-300 hover:after:w-full'>About Me</li></a>

                <a href=""><li className='relative inline-block font-inherit text-[20px] no-underline mx-[3vw] 
                overflow-auto after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                after:bg-white after:transition-all after:duration-300 hover:after:w-full'>My Project</li></a>

                <a href="" className='contact-button'><li className='relative cursor-pointer px-6 py-[10px] text-[20px] text-white font-semibold 
   border-2 border-[#66ccff] rounded-[34px] overflow-hidden transition-all 
   duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 active:scale-100 
     after:absolute after:inset-0 after:rounded-inherit after:bg-[#15acf7] 
   after:z-[-1] after:scale-0 after:transition-all after:duration-600 
   after:ease-[cubic-bezier(0.23,1,0.32,1)] hover:after:scale-[3] hover:text-[#212121] 
   shadow-[0_2px_4px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.3),0_6px_12px_rgba(21,172,247,0.5)]'>Contact</li></a>
            </ul>
        </div>
    )
  }
  
export default Header
  