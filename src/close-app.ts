setTimeout(() => {
  const myListener = (): void => {
    window.close();
  };
  document.addEventListener("mousemove", myListener, false);
  document.addEventListener("keydown", myListener, false);
}, 1000);
