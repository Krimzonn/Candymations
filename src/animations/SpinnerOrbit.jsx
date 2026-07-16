function SpinnerOrbit() {
  return (
    <div className="spinner-orbit-wrapper">
      <div
        className="spinner-orbit-dot"
        style={{ "--orbit-delay": "0s" }}
      ></div>
      <div
        className="spinner-orbit-dot"
        style={{ "--orbit-delay": "-0.4s" }}
      ></div>

      <div
        className="spinner-orbit-dot"
        style={{ "--orbit-delay": "-0.8s" }}
      ></div>
    </div>
  );
}

export default SpinnerOrbit;
