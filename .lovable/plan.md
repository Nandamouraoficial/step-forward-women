

## Fix INP Regression (340ms → under 280ms)

The `requestAnimationFrame` wrapper added in the last fix delays observer setup by a frame but more critically, the `requestIdleCallback` in `handleCTAClick` (line 73-77) defers tracking work to idle time, which can paradoxically delay paint if the browser treats the callback scheduling as pending work.

### Changes

**`src/pages/Index.tsx`**

1. **Remove `requestAnimationFrame` wrapper** around IntersectionObserver setup (lines 41-54). Set up observers directly in `useEffect` — the refs are available after mount, so rAF is unnecessary. Keep the null checks and try-catch.

2. **Replace `requestIdleCallback` with `setTimeout(fire, 0)`** in `handleCTAClick` (lines 73-77). `requestIdleCallback` can hold up INP measurement because the browser may consider pending idle callbacks as work. A simple `setTimeout(fire, 0)` yields to the renderer immediately, letting the next paint happen first.

3. **Remove the `cancelAnimationFrame` cleanup** (line 58) since rAF is no longer used. Remove the `cancelled` flag (line 17) as well.

These changes reduce main-thread blocking during user interactions while keeping scroll tracking and the sentinelRef fix intact.

