import { ReactElement } from "react";

import { ReactComponent as IconEditCard } from "../../assets/icons/icon-edit-card.svg";
import "./DetailCards.css";

interface DetailCardsProps {
  children: ReactElement;
  editCardModalId: string;
}
export function DetailCards({ children, editCardModalId }: DetailCardsProps) {
  return (
    <div className="card">
      <div className="card px-4 py-3" style={{ width: "25rem" }}>
        <div className="flex-box">
          <div className="card-body">
            <p className="card-text">{children}</p>
          </div>
          <div>
            <button
              type="button"
              className="edit-button"
              data-bs-toggle="modal"
              data-bs-target={"#" + editCardModalId}
            >
              <IconEditCard />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
