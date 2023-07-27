import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    // Daftar domain email yang diperbolehkan
    const allowedDomains = [
      "gmail.com",
      "ymail.com",
      "yahoo.com",
      "co.id",
      "hotmail.com",
      "outlook.com",
      "gdrive-id.com",
    ];

    // Ekspresi reguler untuk memeriksa apakah email sesuai dengan domain yang diperbolehkan
    const regex = new RegExp(`@(${allowedDomains.join("|")})$`, "i");
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErrMsg("All fields are required!");

      // Add the class "input-error" to empty inputs
      formRef.current.querySelectorAll("input, textarea").forEach((element) => {
        if (!element.value.trim()) {
          element.classList.add("input-error");
        } else {
          element.classList.remove("input-error");
        }
      });

      // Show error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Field Kosong",
        text: "Mohon isi semua field!",
      });

      return;
    }

    if (!emailValidation(form.email)) {
      setErrMsg("Email tidak Valid!");

      // Add the class "input-error" to invalid email input
      formRef.current
        .querySelector('input[name="email"]')
        .classList.add("input-error");

      // Show error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Email tidak valid!",
        text: "Masukan Email yang benar!",
        allowOutsideClick: false,
      });

      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_aglrv1e",
        "template_of4y0w8",
        {
          from_name: form.name,
          to_name: "Fayzil Napu",
          from_email: form.email,
          to_email: "fayzil.napu@gmail.com",
          message: form.message,
        },
        "ESvoA7ckNCg_EWegq"
      )
      .then(
        () => {
          setLoading(false);
          setErrMsg("");
          setSuccessMsg(`Terima Kasih ${form.name}, pesan Anda sudah terkirim`);

          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Show success message using SweetAlert
          Swal.fire({
            icon: "success",
            title: "Success",
            text: `Terima Kasih ${form.name}, pesan Anda sudah terkirim!`,
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setErrMsg("Ahh, something went wrong. Please try again.");

          // Show error message using SweetAlert
          Swal.fire({
            icon: "error",
            title: "Maaf...",
            text: "Terjadi kesalahan. mohon coba kembali!",
          });
        }
      );
  };

  return (
    <div
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 select-none">
              Nama
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="masukkan nama Anda"
              className={`${
                errMsg && !form.name.trim() ? "input-error" : ""
              } bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}
              style={
                errMsg && !form.name.trim() ? { outlineColor: "red" } : null
              }
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 select-none">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="masukkan email Anda"
              className={`${
                errMsg && (!form.email.trim() || !emailValidation(form.email))
                  ? "input-error"
                  : ""
              } bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}
              style={
                errMsg && (!form.email.trim() || !emailValidation(form.email))
                  ? { outlineColor: "red" }
                  : null
              }
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 select-none">
              Pesan
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="tinggalkan pesan"
              className={`${
                errMsg && !form.message.trim() ? "input-error" : ""
              } bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none`}
              style={
                errMsg && !form.message.trim() ? { outlineColor: "red" } : null
              }
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-500" : "bg-tertiary"
            } py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary select-none`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
