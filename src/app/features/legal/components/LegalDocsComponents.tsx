import { motion } from 'motion/react';
import { FileText, Download, Building2, ChevronRight, FileSearch, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useFirestoreCollection } from '../../../hooks/useFirestoreCollection';
import type { LegalDocData } from '../../admin/types/admin.types';
import { projectsData } from '../../../data/projectsData';

export function LegalDocsHero() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-black via-[#0d060a] to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F4BA3E]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B7871C]/10 rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] uppercase bg-[#F4BA3E]/10 text-[#F4BA3E] border border-[#F4BA3E]/20 rounded-full">
            Acceso Exclusivo Asesores
          </span>
          <h1 className="text-5xl md:text-7xl mb-8 text-white font-bold tracking-tighter uppercase">
            Documentación <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B68110] via-[#F4BA3E] to-[#B68110]">Legal</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Consulta y descarga los documentos jurídicos actualizados de cada uno de nuestros proyectos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function ProjectLegalSection() {
  const projects = Object.entries(projectsData).map(([slug, data]) => ({
    slug,
    title: data.title
  }));

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <DocSection key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentCard({ doc, i }: { doc: LegalDocData; i: number }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (url: string, filename: string) => {
    try {
      setIsDownloading(true);
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading file:', error);
      window.open(url, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="group relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#B68110] to-[#F4BA3E] rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
      <div className="relative bg-[#0d060a] border border-white/5 rounded-3xl p-8 hover:border-[#F4BA3E]/30 transition-all duration-500">
        <div className="flex items-start justify-between mb-8">
          <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#F4BA3E]/10 transition-colors">
            <FileText className="w-8 h-8 text-[#F4BA3E]" />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Formato</span>
            <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[10px] font-bold rounded-lg border border-red-500/20">PDF</span>
          </div>
        </div>

        <h3 className="text-xl text-white font-medium mb-6 group-hover:text-[#F4BA3E] transition-colors leading-snug">
          {doc.title}
        </h3>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Actualizado</span>
            <span className="text-xs text-gray-400">
              {doc.createdAt?.toDate?.() ? doc.createdAt.toDate().toLocaleDateString() : 'Reciente'}
            </span>
          </div>
          <button
            onClick={() => handleDownload(doc.fileUrl, doc.title)}
            disabled={isDownloading}
            className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-[#F4BA3E] rounded-2xl text-[#F4BA3E] hover:text-black transition-all duration-300 transform group-hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Download className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function DocSection({ project, index }: { project: { slug: string, title: string }, index: number }) {
  const { data: docs, loading } = useFirestoreCollection<LegalDocData>(
    'legal_documents',
    'projectSlug',
    project.slug
  );

  if (loading) return null;
  if (docs.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-8">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-[#F4BA3E]/30 flex items-center justify-center shadow-2xl">
            <Building2 className="w-8 h-8 text-[#F4BA3E]" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-bold uppercase tracking-tight">{project.title}</h2>
            <div className="flex items-center mt-2 text-[#F4BA3E]/60 text-sm font-medium tracking-widest uppercase">
              <span>{docs.length} Documentos Disponibles</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc, i) => (
          <DocumentCard key={doc.id || i} doc={doc} i={i} />
        ))}
      </div>
    </motion.div>
  );
}
