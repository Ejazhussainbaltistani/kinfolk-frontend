import { useState } from "react";
import { DetailCards } from "../../common/DetailCards/DetailCards";
import { TempModal } from "../../common/TempModal/TempModal";
import { ReactComponent as IconEditCard } from "./../../../assets/icons/icon-edit-card.svg";

export function ExtraDetails() {
  const [details, setDetails] = useState([
    { icon: <IconEditCard />, title: "ejaz" },
    { icon: <IconEditCard />, title: "ejaz" },
    { icon: <IconEditCard />, title: "ejaz" },
    { icon: <IconEditCard />, title: "ejaz" },
  ]);
  return (
    <div className="extra-details m-1 wr-20">
      <TempModal
        modalId={"extra-detail-modal-id"}
        modalLabel={"extra-detail-modal-label"}
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <h1>Extra details</h1>
      </TempModal>
      <DetailCards editCardModalId={"extra-detail-modal-id"}>
        <div>
          <h1>Extra Details</h1>
          {details.map((detail) => {
            return (
              <div className="flex-box">
                <div className="px-2 py-1">{detail.icon}</div>
                <div className="px-2 py-1"> {detail.title}</div>
              </div>
            );
          })}
        </div>
      </DetailCards>
    </div>
  );
}
