// Decorative, fixed page background: soft aurora blobs + a faded grid.
const Background = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-coral/15 blur-[120px] animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute -bottom-48 left-1/4 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px] animate-aurora"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
};

export default Background;
