import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const helvetica = localFont({
  src: [{ path: "../assets/fonts/helvetica_neue/HelveticaNeueMedium.otf" }],
  variable: "--font-helvetica",
});



export { helvetica  };
