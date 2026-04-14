import { motion } from 'motion/react';

interface StaticMasterPlanProps {
  masterPlan?: string;
  totalLots: number;
  availableLots: number;
  salesProgress: number;
}

export function StaticMasterPlan({ 
  masterPlan, 
  totalLots, 
  availableLots, 
  salesProgress 
}: StaticMasterPlanProps) {
  return (
    <section id="plano" className="py-16 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl mb-6 text-white font-light">Plano <span className="font-bold text-[#F4BA3E]">Maestro</span></h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] mb-12" />
          
          {masterPlan && (
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#F4BA3E]/30 mb-8">
              <img src={masterPlan} alt="Plano maestro del proyecto" className="w-full h-auto" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <StatCard label="Total de Lotes" value={totalLots} />
            <StatCard label="Lotes Disponibles" value={availableLots} />
            <StatCard label="Avance de Ventas" value={`${salesProgress}%`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string, value: string | number }) {
  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F4BA3E]/20 text-center">
      <p className="text-4xl text-[#F4BA3E] mb-2 font-semibold">{value}</p>
      <p className="text-gray-300">{label}</p>
    </div>
  );
}
