// A real dark map centred on Mumbai, India, built from map tiles.
// The pin marks the city centre only, the same city-level location the
// site already states in the footer. Nothing more precise is shown.
const ZOOM = 11;
const TILE = 256;
// Mumbai (19.076 N, 72.878 E) sits at pixel (154, 102) inside tile 1438/913.
const CENTER_PX = 154 + TILE;
const CENTER_PY = 102 + TILE;

const tiles = [];
for (let x = 1437; x <= 1440; x++) {
  for (let y = 912; y <= 914; y++) {
    tiles.push({ x, y });
  }
}

export default function LocationMap() {
  return (
    <div
      role="img"
      aria-label="Map of Mumbai, India"
      className="relative h-80 w-full overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] sm:h-[420px]"
    >
      <div
        aria-hidden="true"
        className="absolute"
        style={{
          width: TILE * 4,
          height: TILE * 3,
          left: `calc(50% - ${CENTER_PX}px)`,
          top: `calc(50% - ${CENTER_PY}px)`,
        }}
      >
        {tiles.map(({ x, y }) => (
          <img
            key={`${x}-${y}`}
            src={`https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/${ZOOM}/${y}/${x}`}
            alt=""
            width={TILE}
            height={TILE}
            loading="lazy"
            draggable={false}
            className="absolute"
            style={{ left: (x - 1437) * TILE, top: (y - 912) * TILE }}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className="absolute -inset-4 rounded-full border border-[#E11D2E]/60 motion-safe:animate-ping"
        />
        <span
          aria-hidden="true"
          className="absolute -inset-8 rounded-full border border-[#E11D2E]/30"
        />
        <span className="relative block h-3 w-3 rounded-full bg-[#E11D2E] ring-4 ring-[#F5F2ED]/20" />
      </div>
      <div className="absolute left-1/2 top-1/2 mt-8 -translate-x-1/2">
        <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[#262626] bg-[#0C0C0C] px-3 py-1.5 text-xs font-bold text-[#F5F2ED]">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#E11D2E]" />
          Mumbai, India
        </span>
      </div>
      <p className="absolute bottom-2 right-3 text-[10px] text-[#8A8A8A]/80">
        Map: Esri, HERE, Garmin, FAO, NOAA, USGS
      </p>
    </div>
  );
}
