"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const infos = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "(+229) 016 695 7003",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "possidiusc@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adresse",
    description: "Abomey-Calavi, Zoundja",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "15c1e908-756a-43de-8c07-68bc068c133d", // 👈 remplace ici
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center py-12 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Formulaire */}
          <div className="md:w-[54%] order-2 md:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Discutons de votre projet</h3>
              <p className="text-white/60">
                Contactez-moi pour toute collaboration ou projet. Je suis disponible pour discuter de vos besoins et vous proposer des solutions adaptées.
              </p>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Prénom" value={formData.firstname} onChange={handleChange} required />
                <Input type="text" name="lastname" placeholder="Nom" value={formData.lastname} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Adresse Email" value={formData.email} onChange={handleChange} required />
                <Input type="tel" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} />
              </div>
              {/* Sélection de service */}
              <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionner un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web">Développement Web</SelectItem>
                    <SelectItem value="mobile">Développement Mobile</SelectItem>
                    <SelectItem value="design">Conception Graphique</SelectItem>
                    <SelectItem value="maintenance">Maintenance et Support</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Message */}
              <Textarea name="message" className="h-[200px]" placeholder="Décrivez votre projet ici..." value={formData.message} onChange={handleChange} required />
              {/* Bouton */}
              <Button size="sm" className="max-w-60" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
              {/* Messages de statut */}
              {status === "success" && (
                <p className="text-green-400 text-sm">✅ Message envoyé avec succès ! Je vous répondrai bientôt.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">❌ Une erreur est survenue. Veuillez réessayer.</p>
              )}
            </form>
          </div>
          {/* Informations de contact */}
          <div className="flex-1 flex items-center md:justify-end order-1 md:order-none mb-8 md:mb-0">
            <ul className="flex flex-col gap-10">
              {infos.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white/60">{item.title}</h3>
                      <p className="text-lg">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
