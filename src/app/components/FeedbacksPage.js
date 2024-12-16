import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      userName: "John Doe",
      rating: 4.5,
      feedback: "Service excellent et rapide, très satisfait!",
    },
    {
      id: 2,
      userName: "Jane Smith",
      rating: 3,
      feedback: "Le service est bon, mais pourrait être amélioré.",
    },
    {
      id: 3,
      userName: "Paul White",
      rating: 5,
      feedback: "J'adore ce service, il est parfait !",
    },
  ]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? true : false;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} color="#f39c12" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#f39c12" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} color="#f39c12" />);
    }

    return stars;
  };

  return (
    <div className="feedback-page-container">
      <h1 className="text-center text-2xl font-bold mb-8">Avis des Utilisateurs</h1>

      <div className="feedbacks-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="feedback-card bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105"
          >
            <div className="user-info flex items-center mb-4">
              <div className="user-avatar bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">{feedback.userName[0]}</span>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{feedback.userName}</h2>
              </div>
            </div>

            <div className="rating flex items-center mb-4">
              {renderStars(feedback.rating)}
            </div>

            <p className="feedback-text text-gray-600">{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
