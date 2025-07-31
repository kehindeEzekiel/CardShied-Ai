import Navigation from "@/components/Navigation";
import { Form } from "@/components/ui/form";
import React, { useState } from "react";

type Card = {
  id: string;
  last4: string;
  type: string;
  bank: string;
  expiry: string;
  holder: string;
  status: "active" | "stolen" | "frozen";
};

const LostCardPage = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: "1",
      last4: "1234",
      type: "Visa",
      bank: "GTBank",
      expiry: "2025-12",
      holder: "Mark Dane",
      status: "active",
    },
    {
      id: "2",
      last4: "5678",
      type: "Mastercard",
      bank: "Access Bank",
      expiry: "2026-08",
      holder: "Daniel Okon",
      status: "frozen",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState({
    last4: "",
    type: "Visa",
    bank: "",
    expiry: "",
    holder: "",
  });

  const markAsStolen = (id: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, status: "stolen" } : card
      )
    );
  };

  const addNewCard = () => {
    const newId = Date.now().toString();
    setCards((prev) => [
      ...prev,
      {
        id: newId,
        ...newCard,
        status: "active",
      },
    ]);
    setShowModal(false);
    setNewCard({ last4: "", type: "Visa", bank: "", expiry: "", holder: "" });
  };

  const deleteCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Navigation />

      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Manage Your Cards
      </h1>
      <div className="w-full flex items-end justify-end p-10">
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Add New Card
        </button>
      </div>
      <p className="text-gray-600 mb-6">
        Select a card to mark as stolen or add a new one.
      </p>

      <div className="space-y-4">
        {cards.map((card) => (
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
            <div>
              <p className="font-medium">
                {card.type} •••• {card.last4}
              </p>
              <p className="text-sm text-gray-500">Bank: {card.bank}</p>
              <p className="text-sm text-gray-500">Cardholder: {card.holder}</p>
              <p className="text-sm text-gray-500">Expiry: {card.expiry}</p>
              <p
                className={`text-sm font-semibold ${
                  card.status === "active"
                    ? "text-green-600"
                    : card.status === "stolen"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                Status: {card.status}
              </p>
            </div>

            <div className="space-x-2">
              {card.status === "active" && (
                <button
                  onClick={() => markAsStolen(card.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Mark as Stolen
                </button>
              )}
              <button
                onClick={() => deleteCard(card.id)}
                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Card Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Card</h2>
            <form>
              <div>
                <label className="block text-sm font-medium">Bank Name</label>
                <input
                  type="text"
                  value={newCard.bank}
                  onChange={(e) =>
                    setNewCard({ ...newCard, bank: e.target.value })
                  }
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Expiry Date</label>
                <input
                  type="month"
                  value={newCard.expiry}
                  onChange={(e) =>
                    setNewCard({ ...newCard, expiry: e.target.value })
                  }
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={newCard.holder}
                  onChange={(e) =>
                    setNewCard({ ...newCard, holder: e.target.value })
                  }
                  className="w-full border p-2 rounded mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Card Type</label>
                <select
                  value={newCard.type}
                  onChange={(e) =>
                    setNewCard({ ...newCard, type: e.target.value })
                  }
                  className="w-full border p-2 rounded mt-1"
                >
                  <option value="Visa">Visa</option>
                  <option value="Mastercard">Mastercard</option>
                  <option value="Verve">Verve</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
                <button
                  onClick={addNewCard}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LostCardPage;
