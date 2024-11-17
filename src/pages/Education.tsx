

const Education = () => {
  return (
    <div id="education" className="flex flex-col h-fit pb-8 px-4 md:px-8 text-text-light">
            <h1 className="text-xl md:text-4xl font-bold  text-center">📚Education 👨🏻‍🎓</h1>

            <div className="flex flex-col md:flex-row justify-center items-center h-fit gap-4 md:gap-8 xl:gap-30 md:pt-[3.5rem] pb-8 text-text-light relative">
                <div className="bg-gray-800 rounded-lg p-4 mt-4 w-full md:w-[40%] cursor-pointer transform transition duration-300 hover:-translate-y-3 ">
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://official-portfolio-eight.vercel.app/assets/kyulogo-TcbfTP1o.jpg" alt=" Logo" className="w-20 h-20 rounded-lg" />
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <h2 className="text-2xl font-bold text-[#00bfff]">Kirinyaga University</h2>
                        <p className="text-lg text-text-light text-center w-full md:w-3/4">
                            Bachelors in Software Engineering <span className='text-sm'>2021-2025</span>
                        </p>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 mt-4 w-full md:w-[40%] cursor-pointer transform transition duration-300 hover:-translate-y-3">
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://official-portfolio-eight.vercel.app/assets/kabianga-CX0px7vh.jpg" alt="Laboret Logo" className="w-20 h-20 rounded-lg" />
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <h2 className="text-2xl font-bold text-[#00bfff] text-center">Kabianga High School</h2>
                        <p className="text-lg text-text-light w-full mw-3/4d: text-center">
                            Kenya Certificate of Secondary Education <span className='text-sm'>2017-2020</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Education