"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, ReactNode, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  message: string;
  agree_TandC: "Yes";
  role?: "Sales" | "Support" | "Fraud related" | "Refund" | "Select";
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  contactNo?: string;
  message?: string;
  isagree?: string;
}

const ContactForm: React.FC = () => {
  const [agree, setAgree] = useState(false);
  const [msgDelievered, setMsgDelievered] = useState("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    message: "",
    agree_TandC: "Yes",
    role: "Select",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSelectChange = (
    event: SelectChangeEvent<
      "Support" | "Fraud related" | "Refund" | "Select" | "Sales"
    >,
    child: ReactNode
  ) => {
    // console.log(event.target, "event.target");

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validationForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid Email is Required ";
      isValid = false;
    }

    const contactRegex = /^\d{10}$/;
    if (!formData.contactNo.trim() || !contactRegex.test(formData.contactNo)) {
      newErrors.contactNo = "Enter valid contact";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is Required ";
      isValid = false;
    }

    if (!agree) {
      newErrors.isagree = "Kindly agree for further action";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    // console.log(e, "eeeerrrrrrrrrrrrreee");
    e.preventDefault();
    // console.log(formData, "formdata");

    if (validationForm()) {
      try {
        const response = await fetch("https://api.vampay.in/Webapp/Contactus", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        // console.log(data, "response data");
        if (data.status == true) {
          setMsgDelievered(data.message);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contactNo: "",
            message: "",
            agree_TandC: "Yes",
            role: "Select",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  // console.log(formData, "======><><><>", formErrors);
  // console.log(agree,"agree");

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
        <div className="flex justify-center items-center my-3">
          <p className="features_card_header">{msgDelievered}</p>
        </div>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-2">
            <div className="mb-4">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-red-600"
              >
                {formErrors.firstName}
              </label>
              <input
                type="text"
                id="FirstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md focus:border-purple-500"
                placeholder="First Name"
                onChange={handleChange}
                value={formData?.firstName}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-red-600"
              >
                {formErrors.lastName}
              </label>
              <input
                type="text"
                id="LastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-md focus:border-purple-500"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData?.lastName}
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="mb-4">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-red-600"
              >
                {formErrors.email}
              </label>

              <input
                type="Email"
                id="Email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:border-purple-500"
                placeholder="Email Address"
                onChange={handleChange}
                value={formData?.email}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="ContactNo"
                className="block text-sm font-medium text-red-600"
              >
                {formErrors.contactNo}
              </label>
              <input
                type="text"
                id="ContactNo"
                name="contactNo"
                className="mt-1 p-2 w-full border rounded-md focus:border-purple-500"
                placeholder="Contact Number"
                onChange={handleChange}
                value={formData?.contactNo}
              />
            </div>
          </div>
          <FormControl fullWidth className="mb-2 focus:border-purple-500">
            <InputLabel htmlFor="role" id="demo-simple-select-label">
              Inquiry
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="role"
              name="role"
              value={formData.role}
              label="Inquiry"
              onChange={handleSelectChange}
              // onChange={handleChange}
              className="focus:border-purple-500"
            >
              <MenuItem value={"Select"}>Select</MenuItem>
              <MenuItem value={"Sales"}>Sales</MenuItem>
              <MenuItem value={"Support"}>Support</MenuItem>
              <MenuItem value={"fraud Related"}>Fraud Related</MenuItem>
              <MenuItem value={"Refunds"}>Refunds</MenuItem>
            </Select>
          </FormControl>
          <div className="mb-4">
            <label
              htmlFor="Message"
              className="block text-sm font-medium text-red-600"
            >
              {formErrors.message}
            </label>
            <textarea
              id="Message"
              name="message"
              rows={4}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Message"
              onChange={handleTextareaChange}
              value={formData?.message}
            ></textarea>
          </div>
          <label
            htmlFor="agree"
            className="block text-sm font-medium text-red-600"
          >
            {formErrors.isagree}
          </label>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                className="mr-2"
                onChange={(e) => {
                  setAgree(e.target.checked);
                }}
              />
              <span className="text-sm text-gray-600">
                I agree that Vampay may contact me at the email address or phone
                number above.
              </span>
            </label>
          </div>

          <button
            type="submit"
            // disabled={!agree}
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
