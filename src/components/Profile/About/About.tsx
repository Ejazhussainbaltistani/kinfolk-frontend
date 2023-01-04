import { useState } from "react";
import TextField from "../../common/Textfield/TextField";
import { DetailCards } from "../../DetailCards/DetailCards";
import { TempModal } from "../../TempModal/TempModal";

export function About() {
  const [about, setAbout] = useState(
    "Ejaz hussaf jdsaf ljadsjklfsjlkf dafjasd jklfasjk ldf sdajf wjoifw ei0f masdf dsfio asdfj kls,mvdsosd fsds fsdlj kfasd;jkl fadsfjka dsf kljasf joasdf adsfasdl f"
  );
  const [value, setValue] = useState(about);

  const onSave = () => {
    setAbout(value);
  };
  return (
    <div className="About m-1 wr-40">
      <TempModal
        modalId={"about-modal-id"}
        modalLabel={"about-modal-label"}
        onSave={onSave}
      >
        <div>
          <h3>Edit About</h3>
          <p>I'm most happy when</p>
          <TextField
            name={"about"}
            placeholder={""}
            onChange={setValue}
            value={value}
          />
        </div>
      </TempModal>
      <DetailCards editCardModalId={"about-modal-id"}>
        <div>
          <h1>About &lt;firstName&gt;</h1>
          <p>{about}</p>
        </div>
      </DetailCards>
    </div>
  );
}
