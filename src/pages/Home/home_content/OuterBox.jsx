export default function OuterBox({ title = "Title", children }) {
  return (
    <div className=" p-2  w-auto flex-col my-2">
      <h1 className="text-black tracking-wide text-3xl font-semibold text-center lg:-translate-x-2 my-2 mb-4">
        {title}
      </h1>
      {children}
    </div>
  );
}
