import { CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#284A0B",
};

const Loading = () => {
  return (
    <div className="sweet-loading flex justify-center items-center fixed top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.5)] z-50">
      <PropagateLoader
        color={"#284A0B"}
        loading={true}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
