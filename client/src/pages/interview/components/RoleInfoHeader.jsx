
const RoleInfoHeader = ({
    role, 
    topicsToFocus,
    experience,
    questions,
    lastUpdated,

}) => {
  return <div className='bg-gradient-to-r from-[#F08090] to-[#FFC1A1] relative'>
    <div className='container mx-auto px-10 md:px-0'>
        <div className='h-[200px] flex flex-col px-10 justify-center relative z-10'>
            <div className='flex items-start'>
                <div className='flex-grow'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <h2 className='text-2xl text-white font-medium'>{role}</h2>
                            <p className='text-sm text-medium text-white mt-1'>{topicsToFocus}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-3 mt-4'>
                <div className='text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full'>
                    Experience: {experience} {experience == 1 ? "Year" : "Years"}
                </div>

                <div className='text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full'>
                    {questions} Q&A
                </div>

                <div className='text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full'>
                    Last Updated: {lastUpdated}
                </div>
            </div>
        </div>

    </div>
  </div>
};

export default RoleInfoHeader