"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import  Link  from "next/link"; 

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      router.push("/sidenavbar"); 
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-3/4 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-1/2">
          <img
            src="/images/form_image.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Connexion
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Votre mot de passe"
                className="py-2 px-4 border border-gray-300 rounded-lg mt-1"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Se connecter
              </button>
            </div>
            <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Pas encore inscrit ?{" "}
          <Link href="/inscription" className="text-blue-500 hover:underline">
            Créez un compte
          </Link>
        </p>
      </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
