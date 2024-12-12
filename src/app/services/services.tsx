// import emailjs from "emailjs-com";
// import { toast } from "react-toastify";

// export const sendEmail = async (form: any) => {
//   try {
//     const res = await emailjs.sendForm(
//       "service_mvq43kf",
//       "template_25ybnov",
//       form,
//       "Nw7AxfQ-a0XQdVmy0"
//     );
//     toast.success("Your Message sent successfully!");
//     return res;
//   } catch (err) {
//     console.error(err);
//     toast.error("Failed to send email. Please try again.");
//     throw err;
//   }
// };
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const sendEmail = async (formData: any) => {
  try {
    const emailParams = {
      name: formData.name,
      phone: formData.phone,
      cv: formData.cv, // Attach the base64 file here
    };

    const res = await emailjs.send(
      "service_mvq43kf", // Your EmailJS service ID
      "template_25ybnov", // Your EmailJS template ID
      emailParams, // Send the parameters directly
      "Nw7AxfQ-a0XQdVmy0" // Your EmailJS user ID
    );

    toast.success("Your message has been sent successfully!");
    return res;
  } catch (err) {
    console.error("Failed to send email", err);
    toast.error("Failed to send email. Please try again.");
    throw err;
  }
};
