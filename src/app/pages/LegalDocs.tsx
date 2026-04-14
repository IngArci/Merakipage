import { motion } from 'motion/react';
import { LegalDocsHero, ProjectLegalSection } from '../features/legal/components/LegalDocsComponents';

export default function LegalDocs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen"
    >
      <LegalDocsHero />
      <ProjectLegalSection />
    </motion.div>
  );
}
