import AboutHeaderImage from "../../components/AboutImageComp/AboutHeaderImage";
import TeamMember from "../../components/who_we_are_components/TeamMember";
import whoWeAreArr from "../../utils/whoWeAreArr";
import { useState, useEffect } from "react";
export default function WhoWeAre() {
  const [itemsPerRow, setItemsPerRow] = useState(1); // Default to 1 item per row for small screens
  const updateItemsPerRow = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerRow(3); // lg: 3 items per row
    } else if (width >= 640) {
      setItemsPerRow(2); // sm: 2 items per row
    } else {
      setItemsPerRow(1); // default: 1 item per row
    }
  };
  useEffect(() => {
    // Set the initial value
    updateItemsPerRow();

    // Listen for window resize
    window.addEventListener("resize", updateItemsPerRow);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", updateItemsPerRow);
    };
  }, []);
  return (
    <div>
      <AboutHeaderImage img_url="https://i-probono.com/wp-content/uploads/2023/08/d-1.jpg" />
      <section className="lg:px-[13rem] ">
        <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoWeAreArr.map((TeamMemberEl, i) => {
            const isInLastRow =
              i >=
              whoWeAreArr.length -
                (whoWeAreArr.length % itemsPerRow || itemsPerRow);
            console.log("isInLastRow", isInLastRow);
            return (
              <TeamMember
                key={i}
                name={TeamMemberEl.name}
                role={TeamMemberEl.role}
                img_url={TeamMemberEl.img_url}
                description={TeamMemberEl.description}
                isInLastRow={isInLastRow}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
