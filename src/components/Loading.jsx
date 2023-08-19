import "../styles/Loading.css";
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  return (
    <div className="loading">
      <ClipLoader size={150} color="#97d789" aria-label="Loading..." />
    </div>
  );
}

export default Loading;
