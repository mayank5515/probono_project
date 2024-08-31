export default function InnerBox({ img_url, innerText }) {
  return (
    <div className="border-2 border-yellow-400 flex justify-center items-center space-x-8">
      <img src={img_url} className="w-16 h-16 border-2 border-black " />
      <p className="text-xl text-black">{innerText}</p>
    </div>
  );
}
