import { Modal } from "rsuite";
import toClass from "../../helpers/toClass";
import "rsuite/dist/rsuite.min.css";

const UIModal = ({
  size,
  children,
  isOpen,
  onHide,
  header = false,
  isTransparent,
  margin,
  padding,
  backdrop,
  overflow,
  className = "",
  headerTitle = "",
}: any) => {
  let customClassName = isTransparent
    ? "transparent-modal"
    : margin == "p0"
    ? "p0-modal"
    : "";
  if (className) customClassName = className + " " + customClassName;
  if (padding) customClassName += padding === "p0" ? " pad0-modal" : "";
  return (
    <Modal
      className={toClass([customClassName])}
      overflow={overflow}
      size={size}
      open={isOpen}
      onClose={onHide}
      backdrop={backdrop}
    >
      {header && (
        <Modal.Header>
          <div>
            <p className="text-3xl font-medium text-black">{headerTitle}</p>
          </div>
        </Modal.Header>
      )}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default UIModal;
