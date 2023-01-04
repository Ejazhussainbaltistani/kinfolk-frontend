import { ChangeEvent, useState } from "react";
import { DetailCards } from "../../DetailCards/DetailCards";
import { TempModal } from "../../TempModal/TempModal";

export function Interests() {
  const [data, setData] = useState(["ejaz", "jhhjjk", "Punjab", "new pagal"]);
  const [interests, setInterests] = useState(data);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    if (val.length > 0) {
      if (val[val.length - 1] === " ") {
        setData([...data, val]);
        e.currentTarget.value = "";
      }
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      const val = e.currentTarget.value;
      if (val.length > 0) {
        setData([...data, val]);
        e.currentTarget.value = "";
      }
    }
  };

  return (
    <div className="Interests wr-40 m-1">
      <TempModal
        modalId={"interests-modal-id"}
        modalLabel={"interests-modal-label"}
        onSave={() => {
          setInterests(data);
        }}
      >
        <div>
          <h1>Edit Work skills</h1>
          <p>I'm happy to share info on</p>
          <div className="border-square">
            {data.map((val) => {
              return (
                <button
                  onClick={() => setData(data.filter((d) => d !== val))}
                  className="btn btn-primary"
                >
                  {val + " "}&#10005;
                </button>
              );
            })}
            <input
              className="no-border"
              onChange={(e) => {
                changeValue(e);
              }}
              onKeyDown={handleKeyDown}
            ></input>
          </div>
        </div>
      </TempModal>
      <DetailCards editCardModalId={"interests-modal-id"}>
        <div>
          <p>Interests</p>
          {interests.map((data) => {
            return (
              <button type="button" className="btn btn-primary">
                {data}
              </button>
            );
          })}
        </div>
      </DetailCards>
    </div>
  );
}
