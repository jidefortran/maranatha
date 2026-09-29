import React from "react";
import SearchForm from "./search-form";

export default function SearchBox({ initialQuery = "" }) {
  return (
    <section className="container py-5" aria-labelledby="search-heading">
      <div className="mx-auto maranatha-search-shell" style={{ maxWidth: 900 }}>
        <div className="position-relative" style={{ zIndex: 1 }}>
          <span className="search-result-meta">
            <i className="fas fa-search" aria-hidden="true" /> Site search
          </span>
          <h2 id="search-heading" className="mb-2">Find support and information</h2>
          <p className="mb-4 text-muted">
            Search Maranatha services, support information, pages and blog articles.
          </p>
          <SearchForm initialQuery={initialQuery} />
        </div>
      </div>
    </section>
  );
}
