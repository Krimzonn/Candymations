function RippleReveal() {
  return (
    <div className="relative w-50 h-50 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-cc-lilac/20 flex items-center justify-center">
        <p className="font-body text-cc-muted text-sm">Hidden</p>
      </div>
      <div className="absolute inset-0 bg-cc-pink flex items-center justify-center ripple-reveal-anim">
        <p className="font-heading text-white font-semibold">Revealed!</p>
      </div>
    </div>
  );
}

export default RippleReveal;
