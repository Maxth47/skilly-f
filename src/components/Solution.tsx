const categories = [
  "Logos",
  "Landing Pages",
  "Websites",
  "Digital Products",
  "Pitch Decks",
  "Mobile Apps",
  "Email Design",
  "Product Design",
  "Social Media",
];

export function Solution() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">Solution</p>
        </div>
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-medium tracking-[-0.05em] text-[rgb(var(--text))] sm:text-5xl md:text-6xl">
          All your <span className="font-serif italic">design </span>needs.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[rgb(var(--text-muted))]">
          Running a successful business means more than just a website. That&apos;s why we cover all your design
          needs, so you don&apos;t have to go anywhere else.
        </p>

        <ul className="mt-14 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <li key={cat}>
              <span className="inline-block rounded-full border border-white/10 bg-[rgb(var(--bg-card))] px-5 py-2.5 text-sm font-medium text-[rgb(var(--text))]">
                # {cat}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
