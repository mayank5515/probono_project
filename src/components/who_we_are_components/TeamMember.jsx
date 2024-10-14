export default function TeamMember({
  img_url,
  name,
  role,
  description,
  isInLastRow,
}) {
  return (
    <div
      className={` ${
        !isInLastRow ? " border-b-2 border-gray-300" : ""
      } space-y-1 p-1`}
    >
      <h1 className="text-black text-[16px] font-semibold">{name}</h1>
      <p className="text-gray-600 text-[12px] italic ">{role}</p>
      <div className="mb-2 flex  p-2 space-x-2 h-auto ">
        <img
          src={img_url}
          className="h-[4rem] w-[4rem]   border-none rounded-md "
        />
        <p className="text-[12px]  leading-4 text-wrap   tracking-tight text-black">
          {description}
        </p>
      </div>
    </div>
  );
}
