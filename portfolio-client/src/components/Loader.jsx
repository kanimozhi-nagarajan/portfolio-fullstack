function Loader() {
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-[#0f172a]   z-50">
    //    <div className="w-12 h-12 border-4 border-sky-400 border-t-transparent rounded-full animate-spin">
    //   <p>
    //     Since this site use vercel for free hosting , longtime in activity might
    //     make sight unresponsive , please be patient ! Thank you
    //   </p>
    //    </div>
    //    </div>
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400 font-mono">
        &gt;{" "}
        <TypingText
          text=" Since this site use vercel for free hosting , longtime in activity might
        make sight unresponsive , please be patient ! Thank you"
        />
      </h2>
    </div>
  );
}

export default Loader;
