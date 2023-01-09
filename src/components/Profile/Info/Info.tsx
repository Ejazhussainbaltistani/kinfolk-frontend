import { DetailCards } from "../../common/DetailCards/DetailCards";
import { TempModal } from "../../common/TempModal/TempModal";

export function Info() {
  return (
    <div className="info wr-40 m-1">
      <TempModal
        modalId={"Info-modal-id"}
        modalLabel={"Info-modal-label"}
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <h1>Happy Momement</h1>
      </TempModal>
      <DetailCards editCardModalId={"Info-modal-id"}>
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
