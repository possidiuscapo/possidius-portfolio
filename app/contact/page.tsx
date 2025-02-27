"use client";

import React from "react";
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
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Discutons de votre projet</h3>
              <p className="text-white/60">
                Contactez-moi pour toute collaboration ou projet. Je suis disponible pour discuter de vos besoins et vous proposer des solutions adaptées.
              </p>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Prénom" />
                <Input type="text" placeholder="Nom" />
                <Input type="email" placeholder="Adresse Email" />
                <Input type="tel" placeholder="Téléphone" />
              </div>
              {/* Sélection de service */}
              <Select>
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
              <Textarea className="h-[200px]" placeholder="Décrivez votre projet ici..." />
              {/* Bouton */}
              <Button size="sm" className="max-w-60">
                Envoyer le message
              </Button>
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
