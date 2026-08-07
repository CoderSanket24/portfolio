import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './AgroassistDiagram.module.css';

/**
 * AgroassistDiagram
 * Effect #1 — the signature animation moment.
 * Hand-crafted SVG of the Agroassist system architecture.
 * Paths draw themselves in via stroke-dashoffset animation
 * when scrolled into view (IntersectionObserver).
 * Respects prefers-reduced-motion (shows full diagram immediately).
 *
 * Architecture:
 *   [Farmer Device / React UI]
 *          ↓
 *   [Spring Boot REST API]
 *       ↙         ↘
 * [MySQL DB]   [Python CNN Service]
 *       ↘         ↙
 *   [DiagnosisEvent Record]
 */
export default function AgroassistDiagram() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const prefersReduced = useReducedMotion();
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('[data-draw]');

    paths.forEach((path) => {
      const length = path.getTotalLength ? path.getTotalLength() : 200;
      path.style.strokeDasharray = length;

      if (prefersReduced || isIntersecting) {
        // Show immediately — no animation
        path.style.strokeDashoffset = '0';
        path.style.transition = 'none';
      } else {
        // Hidden initially
        path.style.strokeDashoffset = length;
        path.style.transition = 'none';
      }
    });
  }, [isIntersecting, prefersReduced]);

  // Trigger draw-in when intersecting (and not reduced-motion)
  useEffect(() => {
    if (!svgRef.current || !isIntersecting || prefersReduced) return;
    const paths = svgRef.current.querySelectorAll('[data-draw]');

    paths.forEach((path, i) => {
      const length = path.getTotalLength ? path.getTotalLength() : 200;
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      // Stagger each path by 200ms
      setTimeout(() => {
        path.style.transition = `stroke-dashoffset 0.7s cubic-bezier(0.4, 0, 0.2, 1)`;
        path.style.strokeDashoffset = '0';
      }, i * 200);
    });
  }, [isIntersecting, prefersReduced]);

  return (
    <figure
      ref={ref}
      className={styles.figure}
      aria-label="Agroassist system architecture diagram showing data flow from farmer device through Spring Boot API to MySQL database and CNN model, converging at the DiagnosisEvent record"
      role="img"
    >
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox="0 0 700 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* ── Grid background dots ──────────────────────────── */}
        {[...Array(7)].map((_, col) =>
          [...Array(5)].map((_, row) => (
            <circle
              key={`${col}-${row}`}
              cx={50 + col * 100}
              cy={30 + row * 90}
              r="1.5"
              fill="var(--steel)"
              opacity="0.15"
            />
          ))
        )}

        {/* ══ NODES ═══════════════════════════════════════════ */}

        {/* Node 1: Farmer Device / React UI — top center */}
        <g data-node="frontend">
          <rect x="230" y="20" width="240" height="58" fill="var(--surface)" stroke="var(--steel)" strokeWidth="1.2" rx="2"/>
          <text x="350" y="44" textAnchor="middle" fontFamily="var(--font-head)" fontSize="12" fontWeight="600" fill="var(--ink)">Farmer Device</text>
          <text x="350" y="62" textAnchor="middle" fontFamily="var(--font-head)" fontSize="10" fill="var(--steel)">React UI · image upload · result display</text>
        </g>

        {/* Node 2: Spring Boot REST API — center */}
        <g data-node="api">
          <rect x="210" y="160" width="280" height="58" fill="var(--surface)" stroke="var(--copper)" strokeWidth="1.5" rx="2"/>
          <text x="350" y="184" textAnchor="middle" fontFamily="var(--font-head)" fontSize="12" fontWeight="600" fill="var(--ink)">Spring Boot REST API</text>
          <text x="350" y="202" textAnchor="middle" fontFamily="var(--font-head)" fontSize="10" fill="var(--steel)">CRUD · /diagnose · auth · response mapping</text>
        </g>

        {/* Node 3: MySQL Database — bottom left */}
        <g data-node="db">
          <rect x="60" y="310" width="220" height="78" fill="var(--surface)" stroke="var(--steel)" strokeWidth="1.2" rx="2"/>
          <text x="170" y="334" textAnchor="middle" fontFamily="var(--font-head)" fontSize="12" fontWeight="600" fill="var(--ink)">MySQL Database</text>
          <text x="170" y="352" textAnchor="middle" fontFamily="var(--font-head)" fontSize="10" fill="var(--steel)">Farmer · Field · CropRecord</text>
          <text x="170" y="368" textAnchor="middle" fontFamily="var(--font-head)" fontSize="10" fill="var(--steel)">DiagnosisEvent (normalised schema)</text>
        </g>

        {/* Node 4: Python CNN Service — bottom right */}
        <g data-node="ml">
          <rect x="420" y="310" width="220" height="78" fill="var(--surface)" stroke="var(--steel)" strokeWidth="1.2" rx="2"/>
          <text x="530" y="334" textAnchor="middle" fontFamily="var(--font-head)" fontSize="12" fontWeight="600" fill="var(--ink)">Python CNN Service</text>
          <text x="530" y="352" textAnchor="middle" fontFamily="var(--font-head)" fontSize="10" fill="var(--steel)">Flask · TF/Keras · image classification</text>
          <text x="530" y="368" textAnchor="middle" fontFamily="var(--font-head)" fontSize="10" fill="var(--steel)">94% accuracy · compressed export</text>
        </g>

        {/* ══ CONNECTIONS (animated paths) ═════════════════════ */}

        {/* Frontend → Spring Boot API */}
        <path
          data-draw
          d="M 350 78 L 350 160"
          stroke="var(--steel)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Arrow head */}
        <polygon points="344,155 350,168 356,155" fill="var(--steel)" opacity="0.7"/>

        {/* Spring Boot → MySQL */}
        <path
          data-draw
          d="M 280 218 Q 200 260 170 310"
          stroke="var(--steel)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <polygon points="165,303 170,316 176,303" fill="var(--steel)" opacity="0.7"/>

        {/* Spring Boot → CNN Service */}
        <path
          data-draw
          d="M 420 218 Q 500 260 530 310"
          stroke="var(--steel)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <polygon points="524,303 530,316 536,303" fill="var(--steel)" opacity="0.7"/>

        {/* MySQL → DiagnosisEvent write-back (dashed) */}
        <path
          data-draw
          d="M 280 349 Q 320 390 350 380 Q 380 370 420 349"
          stroke="var(--copper)"
          strokeWidth="1.2"
          strokeDasharray="6 3"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* ── Labels on connections ───────────────────────────── */}
        <text x="362" y="122" fontFamily="var(--font-hand)" fontSize="11" fill="var(--steel)" transform="rotate(-90, 362, 122)">HTTP POST</text>
        <text x="200" y="268" fontFamily="var(--font-hand)" fontSize="11" fill="var(--steel)" transform="rotate(-45, 200, 268)">JDBC write</text>
        <text x="476" y="265" fontFamily="var(--font-hand)" fontSize="11" fill="var(--steel)" transform="rotate(45, 476, 265)">HTTP call</text>
        <text x="350" y="398" textAnchor="middle" fontFamily="var(--font-hand)" fontSize="11" fill="var(--copper)" opacity="0.8">result persisted → DiagnosisEvent</text>
      </svg>

      <figcaption className={styles.caption}>
        <span className="annotation">
          fig. 1 — Agroassist data flow: normalised MySQL schema as the foundation;
          ML model as a downstream service, not the product core.
        </span>
      </figcaption>
    </figure>
  );
}
