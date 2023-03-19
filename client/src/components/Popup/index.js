import "./Popup.scss";

const Popup = ({ title, action, color, onDialog }) => {
  return (
    <div className="popup_container">
      <div className="popup_content">
        <h3 className="popup_title">{title}</h3>
        <div className="popup_actions">
          <button style={{backgroundColor: `${color}`}} className="btn btn-handle" onClick={() => onDialog(true)}>{action}</button>
          <button className="btn btn-cancel" onClick={() => onDialog(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
