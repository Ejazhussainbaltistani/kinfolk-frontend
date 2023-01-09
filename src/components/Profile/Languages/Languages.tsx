import { DetailCards } from "../../common/DetailCards/DetailCards";
import { TempModal } from "../../common/TempModal/TempModal";

const data = [
  { name: "urdu", description: "jsasd asdffjl asdfjlk asfjl" },
  { name: "english", description: "js asd asdf fjl asdfjlk asfjl" },
];

export function Languages() {
  return (
    <div className="languages m-1 wr-20">
      <TempModal
        modalId={"languages-modal-id"}
        modalLabel={"languages-modal-label"}
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <h1>Languages</h1>
      </TempModal>
      <DetailCards editCardModalId={"languages-modal-id"}>
        <div>
          <h1>Languages</h1>
          {data.map((data) => {
            return (
              <>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
              </>
            );
          })}
        </div>
      </DetailCards>
    </div>
  );
}
