import { SetStateAction } from "react";
import TextField from "../common/Textfield/TextField";
import { DetailCards } from "../DetailCards/DetailCards";
import { TempModal } from "../TempModal/TempModal";
import { ReactComponent as IconEditCard } from "./../../assets/icons/icon-edit-card.svg";

export function WorkStyle() {
  return (
    <div style={{ marginLeft: "2rem" }}>
      <TempModal
        modalId={"work-style-modal-id"}
        modalLabel={"work-style-modal-label"}
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <div>
          <h2>Work Style</h2>
          <p>kljsdfkj dsalkfs sadlkfsalf sdaflkasf lksadf </p>
          <TextField
            name={"lsdaklkjl kjasjkldklj kdsaklasklj"}
            placeholder={""}
            onChange={function (e: SetStateAction<string>): void {
              throw new Error("Function not implemented.");
            }}
            value={""}
          ></TextField>
          <p>kljsdfkj dsalkfs sadlkfsalf sdaflkasf lksadf </p>
          <TextField
            name={"lsdaklkjl kjasjkldklj kdsaklasklj"}
            placeholder={""}
            onChange={function (e: SetStateAction<string>): void {
              throw new Error("Function not implemented.");
            }}
            value={""}
          ></TextField>
          <p>kljsdfkj dsalkfs sadlkfsalf sdaflkasf lksadf </p>
          <TextField
            name={"lsdaklkjl kjasjkldklj kdsaklasklj"}
            placeholder={""}
            onChange={function (e: SetStateAction<string>): void {
              throw new Error("Function not implemented.");
            }}
            value={""}
          ></TextField>
        </div>
      </TempModal>
      <DetailCards editCardModalId={"work-style-modal-id"}>
        <div>
          <h1>Work Styles</h1>
          <div className="flex-box">
            <div style={{ padding: "1rem" }}>
              <IconEditCard />
            </div>
            <div style={{ padding: "1rem" }}>
              <h5>slkjadf sdajkf sdkljf sdalkjf asdkflj</h5>
              <p>jklasdf sakfldj fasklj asdkjl fsakljsfakl dsjfsaljkfs</p>
            </div>
          </div>
          <div className="flex-box">
            <div style={{ padding: "1rem" }}>
              <IconEditCard />
            </div>
            <div style={{ padding: "1rem" }}>
              {" "}
              <h5>slkjadf sdajkf sdkljf sdalkjf asdkflj</h5>
              <p>jklasdf sakfldj fasklj asdkjl fsakljsfakl dsjfsaljkfs</p>
            </div>
          </div>
          <div className="flex-box">
            <div style={{ padding: "1rem" }}>
              <IconEditCard />
            </div>
            <div style={{ padding: "1rem" }}>
              {" "}
              <h5>slkjadf sdajkf sdkljf sdalkjf asdkflj</h5>
              <p>jklasdf sakfldj fasklj asdkjl fsakljsfakl dsjfsaljkfs</p>
            </div>
          </div>
          <div className="flex-box">
            <div style={{ padding: "1rem" }}>
              <IconEditCard />
            </div>
            <div style={{ padding: "1rem" }}>
              {" "}
              <h5>slkjadf sdajkf sdkljf sdalkjf asdkflj</h5>
              <p>jklasdf sakfldj fasklj asdkjl fsakljsfakl dsjfsaljkfs</p>
            </div>
          </div>
        </div>
      </DetailCards>
    </div>
  );
}
