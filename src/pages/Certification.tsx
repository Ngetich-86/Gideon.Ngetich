import CertData from "../components/CertData";

const Certification = () => {
  return (
    <>
   <h1 className='text-xl md:text-4xl font-bold text-center'>Badges & Certifications</h1>
<p className='text-center text-lg md:text-2xl p-5 text-[#1e90ff]'>Click to view my verified achievement</p>

<div className='flex flex-col md:flex-row p-5 md:flex-wrap justify-center items-center h-fit gap-4 md:gap-12 md:pt-24 pb-10 text-text-light'>
  {CertData.map((certification) => {
    return (
      <a
        key={certification.id}
        href={certification.link} 
        target="_blank" 
        rel="noopener noreferrer" // Security precaution for links opening in a new tab
        className='flex flex-col justify-center items-center pt-8 shadow-lg w-full md:w-[25%] gap-5 cursor-pointer transform transition duration-300 hover:-translate-y-1 rounded-lg mx-2'
      >
        <div className="w-[30%] flex justify-center items-center">
          <img src={certification.icon} alt={certification.name} className='rounded-lg' />
        </div>
        <div className='text-xl leading-8 p-4'>
          <h3 className='flex items-center justify-center mb-8'>
            <b>{certification.name}</b>
          </h3>
        </div>
      </a>
    );
  })}
</div>
    </>
  )
}

export default Certification