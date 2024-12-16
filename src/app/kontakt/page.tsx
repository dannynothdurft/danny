"use client";
import React, { useState } from "react";
import axios from "axios";

const KontaktPage = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectUrl: "",
    description: "",
    monthlyRevenue: "",
    monthlyProfit: "",
    monthlyVisitors: "",
    technicalDetails: "",
    askingPrice: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${currentUrl}/api/pushMails/pushContactForm`,
        formData
      );
      if (response.status === 200) {
        // setFormData({
        //   name: "",
        //   email: "",
        //   projectUrl: "",
        //   description: "",
        //   monthlyRevenue: "",
        //   monthlyProfit: "",
        //   monthlyVisitors: "",
        //   technicalDetails: "",
        //   askingPrice: "",
        // });
      }
    } catch (error) {
      console.error("Leider ist ein Fehler aufgetretten");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Angebot für Dein Projekt erhalten
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dein Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deine E-Mail Adresse
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL des Projekts
              </label>
              <input
                type="url"
                name="projectUrl"
                value={formData.projectUrl}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Projekt Beschreibung
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monatlicher Umsatz (€)
                </label>
                <input
                  type="number"
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monatlicher Gewinn (€)
                </label>
                <input
                  type="number"
                  name="monthlyProfit"
                  value={formData.monthlyProfit}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monatliche Besucher
                </label>
                <input
                  type="number"
                  name="monthlyVisitors"
                  value={formData.monthlyVisitors}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Technische Details
              </label>
              <textarea
                name="technicalDetails"
                value={formData.technicalDetails}
                onChange={handleChange}
                rows={3}
                placeholder="TechStack, Hosting, Wartungsanforderungen usw."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preis Vorstellung (€)
              </label>
              <input
                type="number"
                name="askingPrice"
                value={formData.askingPrice}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <span>Angebot erhalten</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;
