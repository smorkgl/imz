import { Link } from "react-router-dom";

export default function Login() {
  return (
         <div className="bg-[url('/src/img/test3.png')] bg-blue-800 h-screen bg-no-repeat bg-center bg-cover flex place-items-center">
            <Link to={`/`}><button className="absolute top-5 left-5 bg-white text-blue-800 hover:text-blue-700 transition-all">ВЕРНУТЬСЯ НАЗАД</button></Link>
      <div class="w-full max-w-xs mx-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <labelx
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Логин
            </labelx>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="syroezhin_ag"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Пароль
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p class="text-red-500 text-xs italic">Пожалуйста введите пароль</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
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
