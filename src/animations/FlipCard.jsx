function FlipCard() {
  return (
    <div className="flip-card-wrapper w-40 h-30">
      <div className="flip-card-inner">
        <div className="flip-card-face flip-card-front">
          <p className="font-heading text-white font-semibold">Front</p>
        </div>
        <div className="flip-card-face flip-card-back">
          <p className="font-heading text-white font-semibold">Back</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
