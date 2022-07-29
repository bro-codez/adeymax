import React, { useRef } from "react";

export default function BannerGif() {
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
          src="https://assets4.lottiefiles.com/packages/lf20_gb5bmwlm.json"
          style={{ width: "400px", height: "400px" }}
        ></lottie-player>
      
    </div>
  );
}