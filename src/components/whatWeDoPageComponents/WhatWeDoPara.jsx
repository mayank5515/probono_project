export default function WhatWeDoPara({
  title = "title",
  children = "PARAGRAPH",
}) {
  return (
    <section className="  flex justify-center">
      <div className=" p-4 lg:w-[65vw] flex-col justify-center">
        <h1 className="text-black text-2xl font-semibold p-2">{title}</h1>
        <div className="space-y-2 p-2 flex-col items-center text-black text-[16px]">
          {children}
        </div>
      </div>
    </section>
  );
}
