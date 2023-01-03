import { DetailCards } from "../../DetailCards/DetailCards";
import { TempModal } from "../../TempModal/TempModal";

export function HappyMoment() {
  return (
    <div style={{ marginLeft: "2rem" }}>
      <TempModal
        modalId={"happy-moment-modal-id"}
        modalLabel={"happy-moment-modal-label"}
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <h1>Happy Momement</h1>
      </TempModal>
      <DetailCards editCardModalId={"happy-moment-modal-id"}>
        <div>
          <h1>I'm most happy when...</h1>
          <p>
            ljk dsf jkls fsad jlfka sdaf jlksad fjsa sdal jkfasljkf sdf afljks
            adfj adf asdfasd jf asdlkjf asdjlkf fjas flk;jadsf jasdo fwheuf uas
          </p>
        </div>
      </DetailCards>
    </div>
  );
}
