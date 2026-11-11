// A real interactive map centred on Mumbai, India, built with Leaflet.
// Drag to pan, scroll or pinch to zoom in and out, all the way from the
// world view down to the streets and lanes. The pin is a real marker
// stuck to the city centre (19.076 N, 72.878 E), the same city-level
// location the site already states in the footer, so it moves with the
// map instead of sitting fixed on the screen. Nothing more precise is
// shown. Tiles are the Esri dark style, so the map stays on brand.
"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const MUMBAI = [19.076, 72.8777];

export default function LocationMap() {
  const mapRef = useRef(null);
  const holderRef = useRef(null);

  useEffect(() => {
    if (!holderRef.current || mapRef.current) return undefined;
    let map = null;
    let cancelled = false;

    (async () => {
      const leaflet = await import("leaflet");
      const L = leaflet.default || leaflet;
      if (cancelled || !holderRef.current) return;
      const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      map = L.map(holderRef.current, {
        center: MUMBAI,
        zoom: 11,
        minZoom: 3,
        maxZoom: 16,
        zoomControl: true,
        attributionControl: true,
        scrollWheelZoom: true,
        zoomAnimation: !reduceMotion,
        fadeAnimation: !reduceMotion,
      });
      map.attributionControl.setPrefix(false);
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        { attribution: "Esri, HERE, Garmin, FAO, NOAA, USGS", maxZoom: 16 }
      ).addTo(map);
      L.marker(MUMBAI, {
        icon: L.divIcon({
          className: "map-pin",
          html: '<span class="map-pin-ring"></span><span class="map-pin-dot"></span><span class="map-pin-label">Mumbai, India</span>',
          iconSize: [120, 60],
          iconAnchor: [60, 6],
        }),
      }).addTo(map);
      mapRef.current = map;
    })();

    return () => {
      cancelled = true;
      if (map) {
        map.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      role="application"
      aria-label="Interactive map of Mumbai, India. Drag to pan, use the plus and minus buttons or scroll to zoom."
      className="relative h-80 w-full overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] sm:h-[420px]"
    >
      <div ref={holderRef} className="h-full w-full" />
    </div>
  );
}
