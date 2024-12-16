import React, { useState } from "react";

const AbonnementPage = () => {
  const plans = [
    {
      id: 1,
      title: "Plan Basique",
      description: "Accédez à quelques fonctionnalités de base.",
      price: "100dhs / mois",
      features: [
        "Accès aux fonctionnalités de base",
        "1 service inclus",
        "Support limité",
      ],
    },
    {
      id: 2,
      title: "Plan Standard",
      description: "Accédez à plus de fonctionnalités et services.",
      price: "250dhs / mois",
      features: [
        "Accès à plus de fonctionnalités",
        "5 services inclus",
        "Support prioritaire",
      ],
    },
    {
      id: 3,
      title: "Plan Premium",
      description: "Accédez à toutes les fonctionnalités et services.",
      price: "500 dhs/ mois",
      features: [
        "Accès à toutes les fonctionnalités",
        "10 services inclus",
        "Support VIP",
      ],
    },
    {
      id: 4,
      title: "Plan Entreprise",
      description: "Des fonctionnalités complètes pour votre entreprise.",
      price: "Sur demande",
      features: [
        "Accès complet à toutes les fonctionnalités",
        "Services illimités",
        "Support entreprise dédié",
      ],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Paiement réussi !");
    setIsModalOpen(false);
  };

  return (
    <div className="abonnement-page-container">
      <h1 className="text-center text-2xl font-bold mb-10">Nos Plans d'Abonnement</h1>

      <div className="plans-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="plan-card bg-white p-6 rounded-lg shadow-md transition-all hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-center mb-4">{plan.title}</h2>
            <p className="text-center text-gray-600 mb-4">{plan.description}</p>
            <div className="text-center text-lg font-bold text-blue-600 mb-6">{plan.price}</div>

            <ul className="mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-600 mb-2">- {feature}</li>
              ))}
            </ul>

            <button
              onClick={() => handleSubscribe(plan)}
              className="w-full bg-gradient-to-r from-gray-800 to-blue-600 text-white py-2 rounded-md hover:from-gray-700 hover:to-blue-500 transition-all"
            >
              S'abonner
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="modal-content bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center mb-6">Formulaire de Paiement</h2>

            <form onSubmit={handlePayment}>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-lg font-medium mb-2">
                  Numéro de carte
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gray-800 to-blue-600 text-white py-2 px-6 rounded-md hover:from-gray-700 hover:to-blue-500 transition-all"
                >
                  Payer {selectedPlan?.price}
                </button>
              </div>
            </form>

            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AbonnementPage;
