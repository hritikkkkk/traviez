import { ChevronLeft,ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <img
                src="https://www.traviez.com/logo.svg"
                alt="Traviez Logo"
                width={150}
                height={50}
              />
            </Link>
            <div className="flex gap-4 mb-6 ">
            <Link href="#" className="p-1">
                <img
                  src="https://www.svgrepo.com/show/452123/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="p-1">
                <img
                  src="https://www.svgrepo.com/show/448234/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="p-1">
                <img
                  src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="p-1">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="p-1">
                <img
                  src="https://www.svgrepo.com/show/13671/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#FF5733] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-[#FF5733] hover:underline"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-[#FF5733] hover:underline"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#FF5733] hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/travster"
                  className="hover:text-[#FF5733] hover:underline"
                >
                  Travster
                </Link>
              </li>
              <li>
                <Link
                  href="/local"
                  className="hover:text-[#FF5733] hover:underline"
                >
                  Local
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe our newsletter to get our latest update & news
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-black border border-gray-700 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-[#FF5733]"
              />
              <button className="bg-[#FF5733] rounded-r-md p-2">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              ***traviez doesn't believe in spamming
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-sm text-gray-400">
          <p>
            Copyright © 2023 Traviez Private Limited. All rights reserved. |
            Terms & Conditions | Refund Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
