import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function SearchForm({ initialQuery = "", autoFocus = false }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setQuery(typeof initialQuery === "string" ? initialQuery : "");
  }, [initialQuery]);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const submit = async (event) => {
    event.preventDefault();
    const value = query.replace(/\s+/g, " ").trim();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await router.push(value ? `/search/?q=${encodeURIComponent(value)}` : "/search/");
    } finally {
      setIsSubmitting(false);
    }
  };

  const clear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={submit} role="search" className="search-form maranatha-search-form" noValidate>
      <label htmlFor="site-search" className="sr-only">
        Search Maranatha Wellbeing Support
      </label>
      <div className="d-flex align-items-center">
        <div className="position-relative flex-grow-1">
          <input
            ref={inputRef}
            id="site-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services, support, articles..."
            aria-label="Search Maranatha Wellbeing Support"
            autoComplete="off"
            spellCheck="false"
            enterKeyHint="search"
            className="form-control maranatha-search-control"
          />
          {query && (
            <button
              type="button"
              onClick={clear}
              className="position-absolute top-50 end-0 translate-middle-y me-3 border-0 bg-transparent text-muted"
              aria-label="Clear search"
              title="Clear search"
            >
              <i className="fas fa-times" aria-hidden="true" />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="maranatha-search-submit"
          aria-label="Search"
          disabled={isSubmitting}
        >
          <i className={isSubmitting ? "fas fa-spinner fa-spin" : "fas fa-search"} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
