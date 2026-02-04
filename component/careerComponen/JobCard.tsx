"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/dist/client/link";

interface JobCardProps {
  title: string;
  meta: string;
  active?: boolean;
  slug: string;
}

const JobCard = ({ title, meta, active, slug }: JobCardProps) => {
    const encodedTitle = encodeURIComponent(title);

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px", 
  });

  return (
    <motion.div
      ref={ref}
      style={{
        clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className={`job-card ${active ? "active" : ""}`}>
      <div className="job-info">
        <h3>{title}</h3>
        <p>{meta}</p>
      </div>

      <Link
        href={`/careers/${slug}?position=${encodedTitle}`}
        className="apply-link">
        Apply Now →
      </Link>
    </motion.div>
  );
};

export default JobCard;
