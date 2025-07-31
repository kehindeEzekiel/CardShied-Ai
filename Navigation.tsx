import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/AuthModal";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("problem");
  const location = useLocation();
  const navigate = useNavigate();
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: "login" | "signup";
  }>({ isOpen: false, mode: "login" });
  const { user, signOut } = useAuth();

  const sections = [
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "security", label: "Security" },
    { id: "emergency", label: "Lost Card" },
    { id: "demo", label: "Demo" },
  ];

  const scrollToSection = (sectionId: string) => {
    const locationPath = location.pathname;
    console.log(locationPath);
    if (sectionId === "emergency") return navigate("/lost");
    const element = document.getElementById(sectionId);
    if (element && locationPath === "/") {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">ATM Fraud AI</div>

          <div className="flex items-center space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1 rounded text-sm ${
                  activeSection === section.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {section.label}
              </button>
            ))}

            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm">Welcome!</span>
                <Button size="sm" onClick={signOut}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setAuthModal({ isOpen: true, mode: "login" })}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  onClick={() => setAuthModal({ isOpen: true, mode: "signup" })}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        mode={authModal.mode}
      />
    </>
  );
};

export default Navigation;
