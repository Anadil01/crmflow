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
    <section className="py-16 border-y bg-white">
      <Container>
        <p className="text-center text-gray-500 font-medium mb-8">
          Trusted by 5,000+ businesses worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {companies.map((company) => (
            <div
              key={company}
              className="text-xl font-bold text-gray-400 hover:text-blue-600 transition"
            >
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}