export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/40 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">Armstrong</span>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a className="transition-colors hover:text-foreground" href="#vision">
              Vision
            </a>
            <a className="transition-colors hover:text-foreground" href="#product">
              Product
            </a>
            <a className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-24 px-6 py-24">
        <section className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-xl flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Launching soon
            </span>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Building mission-critical software for ambitious teams.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Armstrong is a product engineering studio focused on delivering durable, scalable web platforms.
              This project scaffold is ready for the first sprint—no starter-kit clutter, just clean foundations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background shadow transition-transform hover:-translate-y-0.5"
                href="#contact"
              >
                Start a project
              </a>
              <a
                className="rounded-full border border-border px-6 py-2 text-sm font-medium transition-colors hover:bg-card"
                href="#product"
              >
                Explore the roadmap
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <div className="grid w-full max-w-sm gap-3 rounded-2xl border border-dashed border-border bg-card/30 p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Project checklist</p>
              <ul className="grid gap-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  Define the MVP scope
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" aria-hidden />
                  Align the product roadmap
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                  Establish feedback loops
                </li>
              </ul>
              <p className="text-xs italic">
                Everything you need to start building lives here. Replace this checklist with real milestones as your product takes shape.
              </p>
            </div>
          </div>
        </section>

        <section id="vision" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="text-muted-foreground">
            Armstrong exists to turn complex ideas into resilient software. This baseline app ships with sensible defaults, modern tooling, and a clean component library so you can focus on shipping features instead of deleting boilerplate.
          </p>
        </section>

        <section id="product" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Product Foundation</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card/50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tech stack</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Next.js 14, React Server Components, Tailwind CSS, and shadcn/ui primitives. Everything configured and production ready.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Design system</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Utility-first styling with thoughtful defaults. Swap in your brand tokens and extend the component library as you grow.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Developer experience</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                TypeScript-first setup, linting, and formatting built in. Ready for CI, preview deployments, and collaborative workflows.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-4 rounded-2xl border border-border bg-card/40 p-6">
          <h2 className="text-2xl font-semibold">Let&apos;s build together</h2>
          <p className="text-muted-foreground">
            Replace this call-to-action with your preferred contact form or onboarding flow. For now, it&apos;s a simple prompt to align the team and kick off execution.
          </p>
          <a
            className="w-fit rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background shadow transition-transform hover:-translate-y-0.5"
            href="mailto:hello@armstrong.studio"
          >
            hello@armstrong.studio
          </a>
        </section>
      </main>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Armstrong Studio. All rights reserved.</p>
          <p>Made with intention, ready for iteration.</p>
        </div>
      </footer>
    </div>
  );
}
