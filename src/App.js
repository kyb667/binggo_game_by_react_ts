import { Main } from "./components/Main";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </div>
  );
}
