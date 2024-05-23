"use client";
import { emailContact } from "@/actions/email";
import { useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export const FormContact = () => {
  const { register, handleSubmit, formState: errors } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    console.log(data);

    const response = await emailContact(formData);

    return response;
  };

  return (
    <div className="w-7/12 h-full bg-gradient-formContact shadow-2xl pt-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-8/12 h-full flex flex-col items-start justify-between gap-4 ml-36 pb-2"
      >
        <div className="w-full">
          <input
            {...register("name", { required: true })}
            placeholder="Nombre"
            className="w-full border border-gray-50 rounded-lg bg-transparent text-gray-50 p-2"
          />
          {errors.errors.name && (
            <span className="text-red-500">El nombre es requerido</span>
          )}
        </div>
        <div className="w-full">
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full border border-gray-50 rounded-lg bg-transparent text-gray-50 p-2"
          />
          {errors.errors.email && (
            <span className="text-red-500">El email es requerido</span>
          )}
        </div>
        <div className="w-full h-32">
          <textarea
            {...register("message", { required: true })}
            placeholder="Mensaje"
            className="w-full h-full border border-gray-50 rounded-lg bg-transparent text-gray-50 p-2 resize-none"
          />
          {errors.errors.message && (
            <span className="text-red-500">El mensaje es requerido</span>
          )}
        </div>
        <button
          type="submit"
          className=" w-full sm:w-fit font-semibold text-base py-2 px-6 rounded-xl border-l-2 flex items-center justify-center border-mossGreen-400 bg-gradient-to-r from-[#1DB48D]/20 to-[#0B493E]/10 relative overflow-hidden transition-all duration-500 ease-in-out  hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-mossGreen-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
