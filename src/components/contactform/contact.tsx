"use client";
import Image from "next/image";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/2 order-1 md:order-1">
        <Image
          src="/contact.svg"
          alt="Image"
          className="w-full h-auto"
          width={50}
          height={50}
        />
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 order-2 md:order-2 p-8 md:p-12">
        <form className="max-w-md mx-auto">
          <div className="flex justify-between">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="First Name"
                onChange={(e) => {
                  console.log(e.target.value);

                  setName(e.target.value);
                }}
                value={name}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-600"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Last Name"
                onChange={(e) => {
                  console.log(e.target.value);
                  setSurName(e.target.value);
                }}
                value={surname}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Email Address"
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-600"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Contact Number"
                onChange={(e) => {
                  console.log(e.target.value);
                  setContact(e.target.value);
                }}
                value={contact}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Message"
              onChange={(e) => {
                console.log(e.target.value);
                setMessage(e.target.value);
              }}
              value={message}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">
                I agree that Vampay may contact me at the email address or phone
                number above.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-primaryPurple text-white px-4 py-2 rounded-md hover:bg-primaryPurple-100 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
