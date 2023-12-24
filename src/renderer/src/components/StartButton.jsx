import { useEffect } from "react";

function StartButton(){







useEffect(() => {
  let startTime;

  const handleKeyDown = (event) => {
    startTime = performance.now();
  };

  const handleKeyUp = (event) => {
    const duration = (performance.now() - startTime)/(60);
    const keystrokeData = { key: event.key, duration };
    window.key.saveKeystrokeData(keystrokeData);
  };

  // Attach event listeners to the document
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  // Cleanup function to remove event listeners
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);
  };
}, []);


  return (
    <>
    <h1> HEllo World</h1>
    <p>native theme

    </p>
    <button >toggle dark mode</button>
    <button >reset to system theeme</button>
    </>
  )
}

export default StartButton