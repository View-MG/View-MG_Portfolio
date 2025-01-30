function Main(){
    const Introduce = 'Hi! I\'m View 🏞️';
    return(
        <div className='grid grid-cols-2 justify-items-center py-8 bg-black'>
            <div className='mb-28 '>
                <h1 className='text-6xl py-12'>{Introduce}</h1>
                <div className='font-bold text-2xl py-5'>Computer Engineering And Digital Technology <br /> At Chulalongkorn University</div>
                <p className='text-xl whitespace-pre-line pb-44'>

                Welcome to my portfolio. <br />
                Here, you will find details about myself, my interests, <br /> 
                my work in both frontend and backend web development, <br />
                as well as various methods to reach out to me.</p>
            </div>
            <div>
            <div className="flex justify-center items-center h-[60vh]">
                    <div className="w-[20rem] h-[20rem] bg-white rounded-full">
                        <img src="picture/profile.jpg" alt="Profile" className="w-[24rem] rounded-full border-4 border-blue-500 shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main