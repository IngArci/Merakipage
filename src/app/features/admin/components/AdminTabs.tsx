import React from 'react';
import { motion } from 'motion/react';
import { ImageIcon, Youtube, Users, MapPin, FileText } from 'lucide-react';

export type AdminTab = 'avances' | 'videos' | 'ferias' | 'asesores' | 'documentos' | 'galeria' | 'inversionistas';

interface AdminTabsProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  projectStatus?: string;
  projectSlug?: string;
}

export function AdminTabs({ activeTab, setActiveTab, projectStatus, projectSlug }: AdminTabsProps) {
  const isDelivered = projectStatus === 'entregado';
  
  const allTabs = [
    { id: 'galeria', label: 'Galería', icon: ImageIcon, visible: isDelivered },
    { id: 'avances', label: 'Avances de Obra', icon: ImageIcon, visible: !isDelivered || projectSlug === 'llano-grande' },
    { id: 'videos', label: 'Videos de YouTube', icon: Youtube, visible: !isDelivered || projectSlug === 'llano-grande' },
    { id: 'ferias', label: 'Ferias y Eventos', icon: Users, visible: true },
    { id: 'asesores', label: 'Asesores', icon: MapPin, visible: true },
    { id: 'documentos', label: 'Documentos Legales', icon: FileText, visible: true },
    { id: 'inversionistas', label: 'Inversionistas', icon: Users, visible: true },
  ];

  const tabs = allTabs.filter(tab => tab.visible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-8"
    >
      <div className="flex space-x-4 border-b border-[#F4BA3E]/20 overflow-x-auto pb-1 md:pb-0">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.id 
                  ? 'text-[var(--gold-5)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </div>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold-5)] to-transparent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
