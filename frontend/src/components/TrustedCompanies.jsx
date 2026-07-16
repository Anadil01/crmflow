import Container from "../ui/Container";

const companies = [
  "Google",
  "Microsoft",
  "Slack",
  "Spotify",
  "Adobe",
  "Netflix",
];

export default function TrustedCompanies() {
  return (
    <section className="border-y border-slate-200/80 bg-white/70 py-16 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
      <Container>
        <p className="mb-8 text-center font-medium text-gray-500 dark:text-slate-400">
          Trusted by 5,000+ businesses worldwide
        </p>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="text-xl font-bold tracking-wide text-slate-400 transition hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-300"
            >
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
