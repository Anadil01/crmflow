import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaGithub,
  } from "react-icons/fa";
  
  import Container from "../ui/Container";
  
  export default function Footer() {
    return (
      <footer className="border-t border-slate-800 bg-slate-950 text-gray-300">
        <Container className="py-16">
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
  
            {/* Company */}
  
            <div>
  
              <h2 className="text-3xl font-bold text-white">
                CRMFlow
              </h2>
  
              <p className="mt-5 leading-7">
                CRMFlow helps businesses manage leads,
                automate workflows, and grow customer
                relationships with an intuitive CRM platform.
              </p>
  
            </div>
  
            {/* Product */}
  
            <div>
  
              <h3 className="text-xl font-semibold text-white mb-5">
                Product
              </h3>
  
              <ul className="space-y-3">
  
                <li>
                  <a
                    href="#features"
                    className="transition hover:text-white"
                  >
                    Features
                  </a>
                </li>
  
                <li>
                  <a
                    href="#pricing"
                    className="transition hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
  
                <li>
                  <a
                    href="#testimonials"
                    className="transition hover:text-white"
                  >
                    Testimonials
                  </a>
                </li>
  
              </ul>
  
            </div>
  
            {/* Company */}
  
            <div>
  
              <h3 className="text-xl font-semibold text-white mb-5">
                Company
              </h3>
  
              <ul className="space-y-3">
  
                <li>
                  <a href="#" className="transition hover:text-white">
                    About
                  </a>
                </li>
  
                <li>
                  <a href="#" className="transition hover:text-white">
                    Careers
                  </a>
                </li>
  
                <li>
                  <a href="#" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
  
              </ul>
  
            </div>
  
            {/* Contact */}
  
            <div>
  
              <h3 className="text-xl font-semibold text-white mb-5">
                Contact
              </h3>
  
              <p>Email</p>
  
              <p className="mb-4">
                sales@crmflow.com
              </p>
  
              <p>Phone</p>
  
              <p>
                +91 9876543210
              </p>
  
              <div className="flex gap-5 mt-8 text-2xl">
  
                <a href="#" className="transition hover:text-white">
                  <FaFacebook />
                </a>

                <a href="#" className="transition hover:text-white">
                  <FaTwitter />
                </a>

                <a href="#" className="transition hover:text-white">
                  <FaLinkedin />
                </a>

                <a href="#" className="transition hover:text-white">
                  <FaGithub />
                </a>
  
              </div>
  
            </div>
  
          </div>
  
          <hr className="my-10 border-gray-700" />
  
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
  
            <p>
              © {new Date().getFullYear()} CRMFlow.
              All rights reserved.
            </p>
  
            <div className="flex gap-6">
  
              <a href="#">
                Privacy Policy
              </a>
  
              <a href="#">
                Terms of Service
              </a>
  
            </div>
  
          </div>
  
        </Container>
      </footer>
    );
  }
