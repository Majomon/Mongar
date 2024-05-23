"use client";
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
