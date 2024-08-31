export default function InnerBox({ img_url, innerText }) {
  return (
    <div className="px-1  mb-2 flex justify-center items-center lg:flex-col lg:text-center lg:space-x-0 lg:py-6 lg:px-0 space-x-8">
      <img src={img_url} className="w-20 h-20 " />
      <div className="w-[75%] p-1 ">
        <p className="text-[16px] text-black">{innerText}</p>
      </div>
    </div>
  );
}
