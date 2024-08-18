import Footer_Box from "./footer_box/Footer_Box";
export default function Footer() {
  const PagesArr = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "about",
      title: "About Us",
    },
    {
      path: "contact",
      title: "Contact Us",
    },
    {
      path: "blogs",
      title: "Blog",
    },
  ];
  const QuestionsArr = [
    {
      path: "#",
      title: "FAQS",
    },
    {
      path: "#",
      title: "More Info",
    },
  ];
  return (
    <div className="h-min-[15vh] w-full border border-black p-6 bg-slate-950 text-white flex  flex-col lg:flex-row justify-center">
      <Footer_Box title="Pages" linksArr={PagesArr} />
      <Footer_Box title="Got Questions ? " linksArr={QuestionsArr} />
    </div>
  );
}
