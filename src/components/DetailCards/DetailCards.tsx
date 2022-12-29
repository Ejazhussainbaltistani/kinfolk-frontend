import { ReactElement } from "react";

import { ReactComponent as IconEditCard } from "../../assets/icons/icon-edit-card.svg";
import "./DetailCards.css";

interface DetailCardsProps {
  children: ReactElement;
  editCard: (a: string) => void;
}
export function DetailCards({ children, editCard }: DetailCardsProps) {
  return (
    <div>
      <div className="card px-4 py-3" style={{ width: "25rem" }}>
        <div className="flex-box">
          <div className="card-body">
            <p className="card-text">{children}</p>
          </div>
          <div className="dot">
            <IconEditCard />
          </div>
        </div>
      </div>
    </div>
  );
}
