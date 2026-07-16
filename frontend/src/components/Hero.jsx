import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_28%)]" />

      <Container>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="mb-4 font-semibold text-blue-600">
              CRM SOFTWARE
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">

              Grow Your Business

              <span className="text-blue-600">
                {" "}with CRMFlow
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-slate-300">

              Manage leads, automate workflows,
              track sales pipelines, and increase
              customer satisfaction from one place.

            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Button>

                Start Free Trial

              </Button>

              <Button
                className="border border-blue-600 bg-white text-blue-600 hover:bg-blue-50 dark:bg-slate-950 dark:text-blue-300 dark:hover:bg-slate-900"
              >
                Contact Sales
              </Button>

            </div>

          </div>

          <div>

            <div className="rounded-[2rem] border border-white/60 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_24px_80px_rgba(2,6,23,0.52)]">

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-2xl bg-blue-50 p-6 dark:bg-blue-950/40">

                  <h2 className="text-3xl font-bold">

                    1200+

                  </h2>

                  <p>

                    Active Companies

                  </p>

                </div>

                <div className="rounded-2xl bg-emerald-50 p-6 dark:bg-emerald-950/40">

                  <h2 className="text-3xl font-bold">

                    42%

                  </h2>

                  <p>

                    Revenue Growth

                  </p>

                </div>

                <div className="rounded-2xl bg-amber-50 p-6 dark:bg-amber-950/40">

                  <h2 className="text-3xl font-bold">

                    98%

                  </h2>

                  <p>

                    Customer Satisfaction

                  </p>

                </div>

                <div className="rounded-2xl bg-fuchsia-50 p-6 dark:bg-fuchsia-950/30">

                  <h2 className="text-3xl font-bold">

                    24/7

                  </h2>

                  <p>

                    Premium Support

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}
