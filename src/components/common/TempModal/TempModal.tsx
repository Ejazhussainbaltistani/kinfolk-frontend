import { ReactElement } from "react";
import "./TempModal.css"

interface TempModalProps {
  children: ReactElement;
  modalId: string;
  modalLabel: string;
  onSave: () => void;
}
export function TempModal({
  onSave,
  children,
  modalId,
  modalLabel,
}: TempModalProps) {
  return (
    <div className="temp-modal text-left">
      <div
        className="modal fade"
        id={modalId}
        tabIndex={-1}
        aria-labelledby={modalLabel}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ padding: "2rem" }}>
            {children}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Discard
              </button>
              <button
                onClick={onSave}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
