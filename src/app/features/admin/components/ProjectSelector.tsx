import { motion } from 'motion/react';
import { FolderOpen } from 'lucide-react';

interface Project {
  id: string;
  name: string;
}

interface ProjectSelectorProps {
  proyectos: Project[];
  selectedProject: string;
  setSelectedProject: (id: string) => void;
}

export function ProjectSelector({ proyectos, selectedProject, setSelectedProject }: ProjectSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
    >
      <div className="flex items-center space-x-3 mb-4">
        <FolderOpen className="w-6 h-6 text-[#F4BA3E]" />
        <h2 className="text-2xl text-white">Seleccionar Proyecto</h2>
      </div>
      
      <select
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
        className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white focus:outline-none focus:border-[#F4BA3E] transition-colors"
      >
        <option value="">-- Selecciona un proyecto --</option>
        {proyectos.map((proyecto) => (
          <option key={proyecto.id} value={proyecto.id}>
            {proyecto.name}
          </option>
        ))}
      </select>
    </motion.div>
  );
}
