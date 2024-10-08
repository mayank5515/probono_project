export default function NewsInnerBox({ title, date, img_url, place }) {
  return (
    <div className="mb-2 mr-2">
      <div className="flex justify-center items-center lg:flex-col lg:items-start  lg:space-x-0  lg:px-0 space-x-8">
        <div className=" flex-col  justify-center items-center  p-2 w-auto lg:w-full ">
          <img
            src={img_url}
            className="w-[12rem] h-[12rem] border-2 md:w-[90%] md:h-[12rem] rounded-sm border-blue-500 overflow-hidden"
          />
          <div
            className="flex mt-1  p-1 lg:text-[12px] h-auto text-[11px]  space-x-1 text-blue-500 font-semibold 
        "
          >
            <p>{date}</p>

            <div className="border-[2px] rounded-md border-blue-500"></div>
            <p>{place}</p>
          </div>
        </div>
        {/* NOTE: THESE ARE GOING TO BE CLICKABLE LINKS (ANCHOR TAGS) THAT REDIRECT TO THAT SPECIFIC NEWS OR ARTICLE  */}
        <div className="w-[75%] p-1 lg:w-full">
          <p className="text-[1.5rem] lg:text-[18px] text-black font-semibold hover:cursor-pointer hover:text-gray-700">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
//IDK KYA PURANA LOGIC IG
// <div className="flex items-center justify-center border-2 border-blue-600">
//   <div className="border-2 border-black p-2 w-[35%]">
//     <img src={img_url} className="" />
//     <div className="mt-2 flex border-2 border-green-500 space-x-4 justify-start text-[14px] text-blue-500 font-semibold w-[80%]">
//       <p>{date}</p>
//       <div className="border-2 border-blue-500"></div>
//       <p>{place}</p>
//     </div>
//   </div>
//   <div>
//     <p className="text-black text-2xl font-[Raleway]">{title}</p>
//   </div>
// </div>
