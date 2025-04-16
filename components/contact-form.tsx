"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function ContactForm() {
  useEffect(() => {
    // The script will run after the component mounts
    const script = document.createElement("script")
    script.innerHTML = `
    (function () {
      "use strict";
      /*
       * Form Validation
       */

      // Fetch all the forms we want to apply custom validation styles to
      const forms = document.querySelectorAll(".needs-validation");
      const result = document.getElementById("result");
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();

              form.querySelectorAll(":invalid")[0].focus();
            } else {
              /*
               * Form Submission using fetch()
               */

              const formData = new FormData(form);
              event.preventDefault();
              event.stopPropagation();
              const object = {};
              formData.forEach((value, key) => {
                object[key] = value;
              });
              const json = JSON.stringify(object);
              result.innerHTML = "Please wait...";

              fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: json
              })
                .then(async (response) => {
                  let json = await response.json();
                  if (response.status == 200) {
                    result.innerHTML = json.message;
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-green-500");
                  } else {
                    console.log(response);
                    result.innerHTML = json.message;
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-red-500");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  result.innerHTML = "Something went wrong!";
                })
                .then(function () {
                  form.reset();
                  form.classList.remove("was-validated");
                  setTimeout(() => {
                    result.style.display = "none";
                  }, 5000);
                });
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
    `
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Beta Access or a Personalized Demo</h2>
            <p className="text-lg text-gray-600">
              We're onboarding a select group of partners who want to shape the future of AI-assisted retail
              decision-making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <form className="needs-validation" noValidate>
                  <input type="hidden" name="access_key" value="3e67c187-39d1-4898-bb10-e2f391741198" />
                  <input type="hidden" name="subject" value="New Demo Request for RetailMax Pro" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                      <div className="invalid-feedback text-primary text-sm mt-1">Please provide your name.</div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                      <div className="invalid-feedback text-primary text-sm mt-1">
                        Please provide a valid email address.
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Your Company"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                      <div className="invalid-feedback text-primary text-sm mt-1">
                        Please provide your company name.
                      </div>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Role
                      </label>
                      <select
                        name="role"
                        id="role"
                        required
                        defaultValue=""
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="" disabled>
                          Select your role
                        </option>
                        <option value="Merchandising">Merchandising</option>
                        <option value="Category">Category</option>
                        <option value="Pricing/RGM">Pricing/RGM</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="invalid-feedback text-primary text-sm mt-1">Please select your role.</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      placeholder="Tell us about your specific needs or questions"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                    >
                      Request a Demo
                    </button>
                  </div>
                </form>

                <div id="result" className="mt-3 text-center text-gray-500"></div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

