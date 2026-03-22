import TypingText from "./TypingText";

function Loader() {
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-[#0f172a]   z-50">
    //    <div className="w-12 h-12 border-4 border-sky-400 border-t-transparent rounded-full animate-spin">
    //    </div>
    //    </div>
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400 font-mono">
        &gt;{" "}
        <TypingText text=" Site may sleep on free hosting — if it’s slow, just refresh 🔄" />
      </h2>
    </div>
    // <div className="text-4xl font-bold text-center mb-12 text-green-400 font-mono">
    //   <p>Site may sleep on free hosting — if it’s slow, just refresh 🔄</p>
    // </div>
  );
}

export default Loader;
