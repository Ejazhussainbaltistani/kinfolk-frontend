import { useState } from "react";
import { DetailCards } from "../../common/DetailCards/DetailCards";
import { TempModal } from "../../common/TempModal/TempModal";
import TextField from "../../common/Textfield/TextField";
import { ReactComponent as IconEditCard } from "./../../../assets/icons/icon-edit-card.svg";

export function WorkStyle() {
  const [workStyles, setWorkStyles] = useState([
    {
      Question: "how old are you solutions...",
      answer: "kjlasf sdljkfljkas asdljkjlksdfljk asfjljklfsdjlk",
      icon: <IconEditCard />,
    },
    {
      Question: "how old sadfas sdfadsdd adsfasd are you",
      answer: "kidss",
      icon: <IconEditCard />,
    },
    {
      Question: "how old sadfas sdfads  d adsfasd are you",
      answer: "kidssd",

      icon: <IconEditCard />,
    },
  ]);
  const [editWorkStyles, setEditWorkStyles] = useState(workStyles);
  return (
    <div className="work-style wr-30">
      <TempModal
        modalId={"work-style-modal-id"}
        modalLabel={"work-style-modal-label"}
        onSave={function (): void {
          setWorkStyles(editWorkStyles);
        }}
      >
        <div>
          <h3>Edit Work Styles</h3>
          {editWorkStyles.map((works) => {
            return (
              <div className="flex-box">
                <div style={{ padding: "1rem" }}>{works.icon}</div>
                <div style={{ padding: "1rem" }}>
                  <h5>{works.Question}</h5>
                  <TextField
                    name={""}
                    placeholder={""}
                    onChange={function (val: string): void {
                      setEditWorkStyles((current) =>
                        current.map((obj) => {
                          if (obj.Question === works.Question) {
                            return { ...obj, answer: val };
                          }
                          return obj;
                        })
                      );
                    }}
                    value={works.answer}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </TempModal>
      <DetailCards editCardModalId={"work-style-modal-id"}>
        <div>
          <h3>Work Styles</h3>
          {workStyles.map((works) => {
            return (
              <div className="flex-box">
                <div style={{ padding: "1rem" }}>{works.icon}</div>
                <div style={{ padding: "1rem" }}>
                  <h5>{works.Question}</h5>
                  <p>{works.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </DetailCards>
    </div>
  );
}
