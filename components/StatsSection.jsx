"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";

function Counter({ to, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      // easeOutExpo para un remate suave
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(eased * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 1969, suffix: "", label: "Año de fundación", isYear: true },
  { to: 8, suffix: "", label: "Modalidades técnicas" },
  { to: 4, suffix: "", label: "Sedes en Ibagué" },
  { to: 55, suffix: "+", label: "Años formando técnicos" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="font-display text-3xl font-extrabold text-inem-amber sm:text-4xl">
              {s.isYear ? (
                <Counter to={s.to} duration={1.8} />
              ) : (
                <Counter to={s.to} suffix={s.suffix} />
              )}
            </div>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
