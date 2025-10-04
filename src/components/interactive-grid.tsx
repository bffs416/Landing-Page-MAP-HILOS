'use client';

const InteractiveGrid = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="group relative border border-primary/10 transition-colors hover:bg-primary/5"
        >
          <div className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 opacity-50 transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:scale-125 group-hover:opacity-100 group-hover:shadow-[0_0_20px_5px] group-hover:shadow-primary/50" />
        </div>
      ))}
    </div>
  );
};

export default InteractiveGrid;
