import { useState } from "react";
import { ReactComponent as IconEditCard } from "./../../../assets/icons/icon-edit-card.svg";

import "./WorkPreferences.css";

import RangeInput from "../../common/RangeInput/RangeInput";
import { DetailCards } from "../../DetailCards/DetailCards";
import { TempModal } from "../../TempModal/TempModal";

export interface PreferenceProp {
  Question: string;
  option1: string;
  option2: string;
  icon: SVGRectElement;
  value: string;
}

export function WorkPreferences() {
  const [preferences, setPreferences] = useState([
    {
      Question: "how old are you",
      option1: "kid",
      option2: "Old",
      value: "2",
      icon: <IconEditCard />,
    },
    {
      Question: "how old sadfas sdfadsdd adsfasd are you",
      option1: "kidss",
      option2: "Oldsdfsd",
      value: "2",
      icon: <IconEditCard />,
    },
    {
      Question: "how old sadfas sdfads  d adsfasd are you",
      option1: "kidssd",
      option2: "Oldsdfsd",
      value: "2",
      icon: <IconEditCard />,
    },
  ]);
  const [editPreferences, setEditPreferences] = useState(preferences);

  return (
    <div className="WorkPreferences wr-30 m-1">
      <TempModal
        modalId={"work-preferences-modal-id"}
        modalLabel={"work-preferences-modal-label"}
        onSave={function (): void {
          setPreferences(editPreferences);
        }}
      >
        <div>
          <h3>Work Preferences</h3>
          {editPreferences.map((preference) => {
            return (
              <div className="flex-box">
                <div className="m-1">{preference.icon}</div>
                <div className="m-1" style={{ width: "100%" }}>
                  <h4>{preference.Question}</h4>
                  <div
                    className="flex-box"
                    style={{ justifyContent: "space-between" }}
                  >
                    <p className="self-right">{preference.option1}</p>
                    <p className="self-left">{preference.option2}</p>
                  </div>
                  <RangeInput
                    value={preference.value}
                    label={""}
                    onChange={(val: string) => {
                      setEditPreferences((current) =>
                        current.map((obj) => {
                          if (obj.Question === preference.Question) {
                            return { ...obj, value: val };
                          }
                          return obj;
                        })
                      );
                    }}
                    enable={true}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </TempModal>
      <DetailCards editCardModalId={"work-preferences-modal-id"}>
        <div>
          <h3>Work Preferences</h3>
          {preferences.map((preference) => {
            return (
              <div className="flex-box">
                <div className="m-1">{preference.icon}</div>
                <div className="m-1" style={{ width: "100%" }}>
                  <h4>{preference.Question}</h4>
                  <div
                    className="flex-box"
                    style={{ justifyContent: "space-between" }}
                  >
                    <p>{preference.option1}</p>
                    <p>{preference.option2}</p>
                  </div>
                  <RangeInput
                    value={preference.value}
                    label={""}
                    onChange={function (val: string): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </DetailCards>
    </div>
  );
}
