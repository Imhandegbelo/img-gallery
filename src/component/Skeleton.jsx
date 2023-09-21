export default function Skeleton() {
  return (
    <div className="shadow rounded-md max-w-sm w-full" draggable>
      <div className="animate-pulse flex flex-col gap-4">
        <div className="bg-slate-200 h-[20rem] w-full"></div>
        <div className="flex-1 px-4 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
