import React from "react";
import { useState } from "react";
//import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getCapchaFetch, putLoginFetch } from "../future/action/loginFetch";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const { capcha } = useSelector((state) => state.login);
  const [password, setPassword] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const dispatch = useDispatch();

  const heandleSubmit = () => {
    const data = {
      email,
      password,
      rememberMe: true,
      captchaText,
    };
    dispatch(putLoginFetch(data))
  };
  const heandleCapcha = () => {
    dispatch(getCapchaFetch());
  };

  return (
    <div className="w-1/4 h-60 mx-auto mt-40">
      <h1 className="text-lg text-white text-center">LOGIN</h1>
      <label className="text-xs text-gray-400">
        Email:
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-gray-400">
        Password:
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      {capcha && (
        <>
          <div className="flex gap-8 justify-center mt-4">
            <img src={capcha} alt="#" />
          </div>

          <div className="flex gap-8 justify-center mt-4">
            <input
              type="text"
              onChange={(e) => setCaptchaText(e.target.value)}
              value={captchaText}
            />
          </div>
        </>
      )}

      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          onClick={capcha ? heandleSubmit : heandleCapcha}
          className="flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-w px-4"
        >
          Enter
        </button>
      </div>
    </div>
  );
};
