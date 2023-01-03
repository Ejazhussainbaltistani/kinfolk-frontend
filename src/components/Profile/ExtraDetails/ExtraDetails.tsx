import { DetailCards } from "../../DetailCards/DetailCards";
import { TempModal } from "../../TempModal/TempModal";
import { ReactComponent as IconEditCard } from "./../../../assets/icons/icon-edit-card.svg";

export function ExtraDetails() {
  return (
    <div style={{ marginLeft: "2rem" }}>
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
          <div className="flex-box">
            <div>
              <IconEditCard />
            </div>
            <div> jklsd sdaf</div>
          </div>
          <div className="flex-box">
            <div>
              <IconEditCard />
            </div>
            <div> jklsd sdaf</div>
          </div>
          <div className="flex-box">
            <div>
              <IconEditCard />
            </div>
            <div> jklsd sdaf</div>
          </div>
          <div className="flex-box">
            <div>
              <IconEditCard />
            </div>
            <div> jklsd sdaf</div>
          </div>
        </div>
      </DetailCards>
    </div>
  );
}
