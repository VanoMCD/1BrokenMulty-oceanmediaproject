import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./i18n/config";
import { languages } from "./i18n/config";

const queryClient = new QueryClient();

const LanguageWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n, ready } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const changeLang = async () => {
      if (lang && Object.keys(languages).includes(lang)) {
        if (i18n.language !== lang) {
          await i18n.changeLanguage(lang);
        }
      }
    };
    changeLang();
  }, [lang, i18n, navigate]);

  // Redirect invalid language codes
  if (lang && !Object.keys(languages).includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  // Don't render until language is loaded
  if (!ready || i18n.language !== lang) {
    return null;
  }

  return <Index />;
};

const App = () => {
  const { i18n } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/pt-br" replace />} />
            
            {/* Language-specific routes */}
            <Route path="/:lang" element={<LanguageWrapper />} />
            
            {/* Catch all - redirect to English */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
