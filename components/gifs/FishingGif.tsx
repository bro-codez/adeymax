import React, { useRef } from "react";

export default function FishingGif() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="">
      
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="/lotter/fishing-bye-bye.json"
          style={{ width: "400px", height: "400px" }}
        ></lottie-player>
      
    </div>
  );
}