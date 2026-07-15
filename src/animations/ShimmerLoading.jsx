function ShimmerLoading() {
  return (
    <div className="flex flex-col gap-3 w-48">
      <div className="h-4 rounded-full shimmer-block w-full"></div>
      <div className="h-4 rounded-full shimmer-block w-4/5"></div>
      <div className="h-4 rounded-full shimmer-block w-3/5"></div>
    </div>
  );
}

export default ShimmerLoading;
