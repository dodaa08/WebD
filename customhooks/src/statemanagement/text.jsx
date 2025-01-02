import { Atom } from "../store/atom/counter";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Test = () => {
  return (
    <>
      <CounterComponent />
    </>
  );
};

function CounterComponent() {
  const count = useRecoilValue(Atom);
  const setCount = useSetRecoilState(Atom);

  return (
    <div className="flex justify-center py-10">
      <div className="flex flex-col gap-10">
        <div>
          <h1>{count}</h1>
        </div>
        <div>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>Inc</button>
        </div>
        <div>
          <button onClick={() => setCount((prevCount) => prevCount - 1)}>Dec</button>
        </div>
      </div>
    </div>
  );
}

export default Test;
