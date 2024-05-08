import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../redux/slices/auth";
import { Navigate } from "react-router-dom";

export default function Login() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (window.localStorage.getItem("token") && isAuth) {
    return <Navigate to="/cabinet" />;
  }

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert("Не удалось авторизоваться!");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/cabinet" />;
  }

  return (
    <div className="bg-[url('/src/img/test3.png')] bg-red-700 h-screen bg-no-repeat bg-center bg-cover flex place-items-center">
      <Link to={`/`}>
        <button className="absolute top-5 left-5 bg-white text-red-800 hover:text-red-700 transition-all">
          ВЕРНУТЬСЯ НАЗАД
        </button>
      </Link>
      <div class="w-full max-w-xs mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Логин
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              id="username"
              type="text"
              placeholder="syroezhin_ag"
              {...register("email", { required: "Укажите почту" })}
            />
            {errors.email?.message && (
              <p class="text-red-500 text-xs italic">
                Пожалуйста укажите почту
              </p>
            )}
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Пароль
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              {...register("password", { required: "Укажите пароль" })}
            />
            {errors.password?.message && (
              <p class="text-red-500 text-xs italic">
                Пожалуйста введите пароль
              </p>
            )}
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Вход
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs"></p>
      </div>
    </div>
  );
}
