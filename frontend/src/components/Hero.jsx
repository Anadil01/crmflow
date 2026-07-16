import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="py-24">

      <Container>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-blue-600 font-semibold mb-4">
              CRM SOFTWARE
            </p>

            <h1 className="text-5xl font-bold leading-tight">

              Grow Your Business

              <span className="text-blue-600">
                {" "}with CRMFlow
              </span>

            </h1>

            <p className="text-gray-600 mt-6 text-lg">

              Manage leads, automate workflows,
              track sales pipelines, and increase
              customer satisfaction from one place.

            </p>

            <div className="flex gap-4 mt-8">

              <Button>

                Start Free Trial

              </Button>

              <Button
                className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
              >
                Contact Sales
              </Button>

            </div>

          </div>

          <div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-blue-50 p-6 rounded-xl">

                  <h2 className="text-3xl font-bold">

                    1200+

                  </h2>

                  <p>

                    Active Companies

                  </p>

                </div>

                <div className="bg-green-50 p-6 rounded-xl">

                  <h2 className="text-3xl font-bold">

                    42%

                  </h2>

                  <p>

                    Revenue Growth

                  </p>

                </div>

                <div className="bg-orange-50 p-6 rounded-xl">

                  <h2 className="text-3xl font-bold">

                    98%

                  </h2>

                  <p>

                    Customer Satisfaction

                  </p>

                </div>

                <div className="bg-purple-50 p-6 rounded-xl">

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