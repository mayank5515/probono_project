export default function AboutHeaderImage({ img_url = "" }) {
  return (
    <div className="flex justify-center items-center w-full  bg-[#1573bc]">
      <img src={img_url} className="lg:h-[70vh] lg:w-[60vw]" />
    </div>
  );
}
