export default function NewsInnerBox({ title, date, img_url, place }) {
  return (
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
    <div className="border-4 border-yellow-400  mb-2 ">
      <div className="border-4 border-green-500 flex justify-center items-center lg:flex-col lg:items-start  lg:space-x-0  lg:px-0 space-x-8">
        <div className="border-4 flex-col  justify-center items-center border-red-500 p-2 w-auto lg:w-full ">
          <img
            src={img_url}
            className="w-[10rem] h-[10rem] border-2 lg:w-[90%] lg:h-[12rem] border-black"
          />
          <div
            className="flex mt-1 border-2 text-[12px]  border-green-500  space-x-1 text-blue-500 font-semibold 
        "
          >
            <p>{date}</p>

            <div className="border-2 border-blue-500"></div>
            <p>{place}</p>
          </div>
        </div>
        {/* NOTE: THESE ARE GOING TO BE CLICKABLE LINKS (ANCHOR TAGS) THAT REDIRECT TO THAT SPECIFIC NEWS OR ARTICLE  */}
        <div className="w-[75%] p-1 border-2 border-purple-500 lg:w-full">
          <p className="text-[1.5rem] lg:text-[18px] text-black font-semibold hover:cursor-pointer hover:text-gray-700">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
