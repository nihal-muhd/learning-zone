import { useState } from "react";

const faqData = [
  {
    id: "faq-1",
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces based on components.",
  },
  {
    id: "faq-2",
    title: "What is state in React?",
    content:
      "State is a built-in React object used to contain data or information about the component.",
  },
  {
    id: "faq-3",
    title: "What is the Virtual DOM?",
    content:
      "A lightweight copy of the real DOM in memory, used by React to compute minimal UI updates.",
  },
];

export default function SingleAccordion() {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    // If clicked item is already open, collapse it; otherwise open it
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>FAQ (Single Open)</h2>
      {faqData.map((item) => {
        const isOpen = activeId === item.id;

        return (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              marginBottom: "8px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => toggleItem(item.id)}
              style={{
                width: "100%",
                padding: "12px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#f9f9f9",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              <span>{item.title}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: "12px 16px",
                  background: "#fff",
                  lineHeight: "1.5",
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
