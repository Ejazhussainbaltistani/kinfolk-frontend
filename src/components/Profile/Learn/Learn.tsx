import { DetailCards } from "../../common/DetailCards/DetailCards";
import { TempModal } from "../../common/TempModal/TempModal";

const data = ["ejaz", "Lohari", "Punjab", "new pagal"];

export function Learn() {
  return (
    <div className="learn wr-30 m-1">
      <TempModal
        modalId={"learn-modal-id"}
        modalLabel={"learn-modal-label"}
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <h1>Learn More ON</h1>
      </TempModal>
      <DetailCards editCardModalId={"learn-modal-id"}>
        <div>
          <p>I'm looking o learn more on....</p>
          {data.map((data) => {
            return (
              <button type="button" className="btn btn-outline-primary">
                {data}
              </button>
            );
          })}
        </div>
      </DetailCards>
    </div>
  );
}
