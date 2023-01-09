import { DetailCards } from "../../common/DetailCards/DetailCards";
import { TempModal } from "../../common/TempModal/TempModal";

export function HappyMoment() {
  return (
    <div className="happy-moment m-1 wr-40">
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
