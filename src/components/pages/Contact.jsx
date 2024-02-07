import React from 'react'
import { BiSend } from "react-icons/bi";
import { useForm } from "react-hook-form";

const fields = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: /^\S+@\S+$/i,
  },
  { name: "message", label: "Message", type: "textarea", required: true },
];

function Contact() {
    const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };
    return(
        <>
       <form
            className="my-10 flex flex-col justify-start items-center max-w-xl m-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            {fields.map((field) => (
              <div
                key={field.name}
                className={`${
                  field.type === "textarea"
                    ? "mb-6"
                    : "grid grid-cols-1 mb-6 gap-3"
                } w-full`}
              >
                <div className="text-left flex flex-col  gap-2 w-full">
                  <label className="font-semibold">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      {...register(field.name, { required: field.required })}
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 pb-16 px-4 md:py-3 md:pb-16 md:px-4 md:mb-0 focus:border-[#a51c4b]"
                      placeholder={`Type ${field.label.toLowerCase()}...`}
                    ></textarea>
                  ) : (
                    <input
                      {...register(field.name, {
                        required: field.required,
                        pattern: field.pattern,
                      })}
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-[#a51c4b]"
                      type={field.type}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="w-full text-left">
              <button
                className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-[#a51c4b] text-white text-sm font-bold border border-[#a51c4b] rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-[#a51c4b] lg:m-0 md:w-max md:px-6"
                title="Send"
                type="submit"
              >
                <span>Send</span>
                <BiSend />
              </button>
            </div>
          </form>
       
    </>
  );
}
   
export default Contact