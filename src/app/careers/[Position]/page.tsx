"use client";

import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import "./apply.css";

export default function CareerApplyPage() {
  const { slug } = useParams<{ slug: string }>();
  const [resumeName, setResumeName] = useState("");

  const position = useMemo(() => {
    if (!slug) return "";
    return slugToTitle(slug);
  }, [slug]);

  return (
    <main className="career">
      <header className="career__header">
        <h1 className="career__title">
          Apply for <span>{position}</span>
        </h1>
        <p className="career__subtitle">
          Please fill out the form below to submit your application.
        </p>
      </header>

      <section className="career__card">
        <form className="career__form">
          <div className="form-field">
            <label className="form-field__label">Position</label>
            <input
              className="form-field__input"
              type="text"
              value={position}
              readOnly
            />
          </div>

          <div className="form-section">
            <h2 className="form-section__title">Personal Information</h2>

            <div className="form-section__grid">
              <div className="form-field">
                <label className="form-field__label">First Name *</label>
                <input className="form-field__input" required />
              </div>

              <div className="form-field">
                <label className="form-field__label">Last Name *</label>
                <input className="form-field__input" required />
              </div>

              <div className="form-field">
                <label className="form-field__label">Email *</label>
                <input type="email" className="form-field__input" required />
              </div>

              <div className="form-field">
                <label className="form-field__label">Phone *</label>
                <input className="form-field__input" required />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section__title">Resume / CV</h2>

            <label className="resume-upload">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResumeName(e.target.files?.[0]?.name || "")}
                required
              />

              <div className="resume-upload__content">
                <div className="resume-upload__icon">☁️</div>
                <div className="resume-upload__text">
                  {resumeName || "Click to upload your resume"}
                </div>
                <div className="resume-upload__meta">PDF, DOC, DOCX only</div>
              </div>
            </label>
          </div>

          <button className="form-submit" type="submit">
            Submit Application
          </button>
        </form>
      </section>
    </main>
  );
}

/* 🔑 Slug → Human-readable title */
function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
