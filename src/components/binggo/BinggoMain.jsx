import { useLocation, Navigate } from "react-router-dom";
import { BinggoGrid } from "./BinggoGrid";

export const BinggoMain = () => {
  const location = useLocation();

  return (
    <>
      {location.state && location.state.type ? (
        <BinggoGrid />
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};
