"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export const FormContactResponsive = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await axios.post("/api/email", data);
      reset();
      toast.success("Email enviado 😊");
    } catch (error) {
      console.error("Error en enviar email:", error);
      toast.error("Error al enviar email 😢");
    }
  };

  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-4 px-4"
      >
        <div className="w-full">
          <input
            {...register("name", {
              required: "El nombre es requerido",
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El nombre puede tener máximo 20 caracteres",
              },
            })}
            placeholder="Nombre"
            className="w-full border border-gray-50 rounded-lg bg-transparent text-gray-50 p-2"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full">
          <input
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Formato de email inválido",
              },
            })}
            placeholder="Email"
            className="w-full border border-gray-50 rounded-lg bg-transparent text-gray-50 p-2"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full h-32">
          <textarea
            {...register("message", {
              required: "El mensaje es requerido",
              minLength: {
                value: 20,
                message: "El mínimo de caracteres es 20",
              },
              maxLength: {
                value: 255,
                message: "El máximo de caracterest es 255",
              },
            })}
            placeholder="Mensaje"
            className="w-full h-full border border-gray-50 rounded-lg bg-transparent text-gray-50 p-2 resize-none"
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>
        <button
          type="submit"
          className=" w-full sm:w-fit font-semibold text-base py-2 px-6 rounded-xl border-l-2 flex items-center justify-center border-mossGreen-400 bg-gradient-to-r from-[#1DB48D]/20 to-[#0B493E]/10 relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-mossGreen-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
