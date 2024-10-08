// IMG URL , TESTIMONIAL , NAME , PROFILE
export default function Testimonial({
  index,
  img_url,
  testimonial,
  name,
  profile,
}) {
  // console.log("FROM TESTIMONIALS", index);
  return (
    <>
      <div className={`p-2 h-full flex flex-col items-center`}>
        {/* PROFILE IMAGE CIRCLE */}
        <div className="border-2 border-gray-500 rounded-full p-1">
          <img
            src={img_url}
            className="h-[5rem] w-[5rem] border-1  rounded-full overflow-hidden"
          />
        </div>
        {/* PROFILE IMAGE CIRCLE */}
        {/* --------------------- */}
        {/* OUTER BOX FOR TESTIMONIAL AND NAME AND PROFILE */}
        <div className="flex-col items-center mt-2">
          {/* TESTIMONIAL */}
          <div className=" px-6 text-center ">
            <p className="text-black italic">{testimonial}</p>
          </div>
          {/* TESTIMONIAL */}
          {/* NAME , PROFILE */}
          <div className="flex flex-col items-center py-2">
            {/* FIX: need to reconfigure tailwind or something so that i can add font styles */}
            <h3 className="text-blue-500 font-semibold text-[18px] font-sans">
              {name}
            </h3>
            <p className="text-black font-bold text-[14px] mt-1 text-center">
              {profile}
            </p>
          </div>
          {/* NAME , PROFILE*/}
        </div>
        {/* OUTER BOX FOR TESTIMONIAL AND NAME AND PROFILE */}
      </div>
    </>
  );
}
