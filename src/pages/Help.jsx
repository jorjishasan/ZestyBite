import { useState } from "react";
import {
  FaSearch,
  FaEnvelope,
  FaPhone,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { faqs } from "../utils/faqData";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-4xl p-8 text-gray-800">
      <div className="mb-16">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full rounded-lg border p-3 pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="rounded-lg border">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                className="flex w-full items-center justify-between p-4 text-left font-semibold hover:bg-gray-50"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-md sm:text-lg">{faq.question}</span>
                {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFaqIndex === index && (
                <p className="bg-gray-50 p-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
        <div className="mb-2 flex items-center">
          <FaEnvelope className="mr-2" />
          <span>speak.jorjis@gmail.com</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="mr-2" />
          <span>01601-335228</span>
        </div>
      </div>
    </div>
  );
};

export default Help;
