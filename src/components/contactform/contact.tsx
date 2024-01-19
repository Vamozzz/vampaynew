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
          <div className="flex justify-between gap-2">
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

          <div className="flex justify-between gap-2">
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




// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// interface ApiResponse {
//   status: boolean;
//   message: string;
//   data: any;
// }

// const ContactForm: React.FC = () => {
//   const [name, setName] = useState("");
//   const [surname, setSurName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [message, setMessage] = useState("");
//   const [agreeTandC, setAgreeTandC] = useState(false);

//   // Validation state
//   const [errors, setErrors] = useState({
//     name: "",
//     surname: "",
//     email: "",
//     contact: "",
//     message: "",
//     agreeTandC: "",
//   });

//   const validateForm = () => {
//     const newErrors = {
//       name: name ? "" : "Name is required",
//       surname: surname ? "" : "Surname is required",
//       email: /\S+@\S+\.\S+/.test(email) ? "" : "Invalid email address",
//       contact: contact ? "" : "Contact number is required",
//       message: message ? "" : "Message is required",
//       agreeTandC: agreeTandC ? "" : "Please agree to the terms and conditions",
//     };

//     setErrors(newErrors);

//     return Object.values(newErrors).every((error) => error === "");
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Call API
//       const apiUrl = "https://api.vampay.in/Webapp/Contactus";
//       const apiData = {
//         firstName: name,
//         lastName: surname,
//         email,
//         contactNo: contact,
//         message,
//         agree_TandC: agreeTandC ? "Yes" : "No",
//       };

//       try {
//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(apiData),
//         });

//         const responseData: ApiResponse = await response.json();

//         if (responseData.status) {
//           // Handle success
//           console.log("API Response:", responseData.message);
//           // You may want to reset the form or perform other actions on success
//         } else {
//           // Handle API error
//           console.error("API Error:", responseData.message);
//         }
//       } catch (error) {
//         console.error("API Request Failed:", error.message);
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center">
//       {/* Image Section */}
//       <div className="md:w-1/2 order-1 md:order-1">
//         <Image
//           src="/contact.svg"
//           alt="Image"
//           className="w-full h-auto"
//           width={50}
//           height={50}
//         />
//       </div>

//       {/* Form Section */}
//       <div className="md:w-1/2 order-2 md:order-2 p-8 md:p-12">
//         <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
//           <div className="flex justify-between">
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.name && "border-red-500"}`}
//                 placeholder="First Name"
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//               />
//               {errors.name && <div className="text-red-500">{errors.name}</div>}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="surname" className="block text-sm font-medium text-gray-600">
//                 Surname
//               </label>
//               <input
//                 type="text"
//                 id="surname"
//                 name="surname"
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.surname && "border-red-500"}`}
//                 placeholder="Last Name"
//                 onChange={(e) => setSurName(e.target.value)}
//                 value={surname}
//               />
//               {errors.surname && <div className="text-red-500">{errors.surname}</div>}
//             </div>
//           </div> 

//           <div className="flex justify-between">
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.name && "border-red-500"}`}
//                 placeholder="First Name"
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//               />
//               {errors.name && <div className="text-red-500">{errors.name}</div>}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="surname" className="block text-sm font-medium text-gray-600">
//                 Surname
//               </label>
//               <input
//                 type="text"
//                 id="surname"
//                 name="surname"
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.surname && "border-red-500"}`}
//                 placeholder="Last Name"
//                 onChange={(e) => setSurName(e.target.value)}
//                 value={surname}
//               />
//               {errors.surname && <div className="text-red-500">{errors.surname}</div>}
//             </div>
//           </div>

//           {/* Repeat similar pattern for other input fields */}
//           {/* ... (unchanged code) */}

//           <button
//             type="submit"
//             className="bg-primaryPurple text-white px-4 py-2 rounded-md hover:bg-primaryPurple-100 focus:outline-none focus:ring focus:border-blue-300"
//             disabled={!agreeTandC}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

