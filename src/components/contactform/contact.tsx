"use client";
import { BorderColor } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import React, {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";

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

interface FunctionalityProps {
  externalStyle?: React.CSSProperties;
  commentForm?: boolean;
}

const ContactForm: React.FC<FunctionalityProps> = ({
  externalStyle,
  commentForm,
}) => {
  const [isContactFormData, setContactFormData] = useState(true);
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

  useEffect(() => {
    if (commentForm) {
      setContactFormData(false);
    }
  }, [commentForm]);

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
    e.preventDefault();

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


  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center "
      style={externalStyle}
    >
      {isContactFormData ? (
        <div className="md:w-1/2 order-1 md:order-1">
          <Image
            src="/contact.svg"
            alt="Image"
            className="w-full h-auto"
            width={50}
            height={50}
          />
        </div>
      ) : null}

      <div
        className={`md:w-1/2 order-2 md:order-2 p-8 md:p-12 ${
          isContactFormData ? "" : "md:w-full md:px-48"
        }`}
      >
        {msgDelievered ? (
          <div className="flex justify-center items-center my-3">
            <p className="features_card_header mr-2">{msgDelievered}</p>
            <Image
              src={"/CheckMark.svg"}
              alt="CheckMark"
              height={20}
              width={20}
            />
          </div>
        ) : (
          <>
            <div className="flex justify-center lg:justify-start items-center my-3">
              <p className="features_title">
                {isContactFormData
                  ? "Connect With Our Team"
                  : "Write a comment"}
              </p>
            </div>
            {isContactFormData ? (
              <div className="flex justify-center lg:justify-start items-center my-3">
                <p className="features_card_content">
                  Our sales team always active to support you. Any kind of
                  questions about to our product they can answer to you.
                </p>
              </div>
            ) : null}
          </>
        )}
        {/* max-w-md */}
        <form className=" mx-auto" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            <div className="mb-4 w-full">
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
                className="mt-1 p-2 w-full border rounded-md focus:border-primaryPurple outline-none"
                placeholder="First Name"
                onChange={handleChange}
                value={formData?.firstName}
              />
            </div>

            <div className="mb-4 w-full">
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
                className="mt-1 p-2 w-full border rounded-md focus:border-primaryPurple outline-none"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData?.lastName}
              />
            </div>
          </div>

          <div className="flex justify-between gap-4 ">
            <div className="mb-4 w-full">
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
                className="mt-1 p-2 w-full border rounded-md focus:border-primaryPurple outline-none"
                placeholder="Email Address"
                onChange={handleChange}
                value={formData?.email}
              />
            </div>

            <div className="mb-4 w-full">
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
                className="mt-1 p-2 w-full border rounded-md focus:border-primaryPurple outline-none"
                placeholder="Contact Number"
                onChange={handleChange}
                value={formData?.contactNo}
              />
            </div>
          </div>
          {isContactFormData ? (
            <FormControl
              fullWidth
              className="mb-2 hover:border-primaryPurple focus:border focus:border-primaryPurple bg-white outline-none"
            >
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
                // onFocus={(e) => (e.target.style.borderColor = "red")}
              >
                <MenuItem value={"Select"}>Select</MenuItem>
                <MenuItem value={"Sales"}>Sales</MenuItem>
                <MenuItem value={"Support"}>Support</MenuItem>
                <MenuItem value={"fraud Related"}>Fraud Related</MenuItem>
                <MenuItem value={"Refunds"}>Refunds</MenuItem>
              </Select>
              {/* <InputLabel
                htmlFor="role"
                id="demo-simple-select-label"
                style={{ outline: "none" }}
              >
                Inquiry
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="role"
                name="role"
                value={formData.role}
                label="Inquiry"
                onChange={handleSelectChange}
                style={{
                  outline: "none",
                  borderColor: "transparent",
                  focus: "border-primaryPurple",
                }}
              >
                <MenuItem value={"Select"}>Select</MenuItem>
                <MenuItem value={"Sales"}>Sales</MenuItem>
                <MenuItem value={"Support"}>Support</MenuItem>
                <MenuItem value={"fraud Related"}>Fraud Related</MenuItem>
                <MenuItem value={"Refunds"}>Refunds</MenuItem>
              </Select> */}
            </FormControl>
          ) : null}
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
              className="mt-1 p-2 w-full border rounded-md focus:border focus:border-primaryPurple"
              placeholder="Your Message"
              onChange={handleTextareaChange}
              value={formData?.message}
              style={{ outline: "none" }}
              // onFocus={{BorderColor:"purple"}}
            ></textarea>
          </div>
          <label
            htmlFor="agree"
            className="block text-sm font-medium text-red-600"
          >
            {formErrors.isagree}
          </label>
          <div className="mb-4">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="agree"
                className="mr-2 mt-1"
                onChange={(e) => {
                  setAgree(e.target.checked);
                }}
              />
              <span className="text-sm text-gray-600">
                {isContactFormData
                  ? "I agree that Vampay may contact me at the email address or phone number above."
                  : "Save my name, email, and website in this browser for the next time I comment."}
              </span>
            </label>
          </div>

          <button
            type="submit"
            // disabled={!agree}
            className="bg-primaryPurple text-white px-4 py-2 my-2 rounded-md hover:bg-primaryPurple-100 focus:outline-none focus:ring focus:border-blue-300"
          >
            {isContactFormData ? "Submit" : "Post Comment "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
