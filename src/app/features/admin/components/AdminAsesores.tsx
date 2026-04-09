import { motion } from 'motion/react';
import { 
  MapPin, 
  Trash2, 
  Save,
  Upload,
  Loader2
} from 'lucide-react';
import { Button } from '../../../components/ui/button';

export interface AsesorData {
  nombre: string;
  cargo: string;
  foto: string;
  whatsapp: string;
}

interface AdminAsesoresProps {
  asesores: AsesorData[];
  currentAsesor: AsesorData;
  setCurrentAsesor: (asesor: AsesorData) => void;
  isUploading: boolean;
  onImageUpload: (file: File) => Promise<void>;
  handleSaveAsesor: () => void;
  handleDeleteAsesor: (index: number) => void;
}

export function AdminAsesores({
  asesores,
  currentAsesor,
  setCurrentAsesor,
  isUploading,
  onImageUpload,
  handleSaveAsesor,
  handleDeleteAsesor
}: AdminAsesoresProps) {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await onImageUpload(file);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <MapPin className="w-6 h-6 text-[#F4BA3E]" />
          <h2 className="text-2xl text-white">Nuevo Asesor</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-gray-300 mb-2 block">Nombre del Asesor *</label>
            <input
              type="text"
              placeholder="Ej: Juan Pérez"
              value={currentAsesor.nombre}
              onChange={(e) => setCurrentAsesor({ ...currentAsesor, nombre: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
            />
          </div>

          <div>
            <label className="text-gray-300 mb-2 block">Cargo del Asesor *</label>
            <input
              type="text"
              placeholder="Ej: Agente Inmobiliario"
              value={currentAsesor.cargo}
              onChange={(e) => setCurrentAsesor({ ...currentAsesor, cargo: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
            />
          </div>

          <div>
            <label className="text-gray-300 mb-2 block">Foto del Asesor *</label>
            <div className="flex space-x-2 mb-4">
              <div className="flex-1 relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={isUploading}
                  className="hidden"
                  id="asesor-file-upload"
                />
                <label
                  htmlFor="asesor-file-upload"
                  className={`flex items-center justify-center w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-gray-400 cursor-pointer hover:border-[#F4BA3E] transition-all ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin text-[#F4BA3E]" />
                      Subiendo...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5 mr-2 text-[#F4BA3E]" />
                      {currentAsesor.foto ? 'Haga clic para cambiar foto' : 'Seleccionar foto de la computadora'}
                    </>
                  )}
                </label>
              </div>
            </div>
            {currentAsesor.foto && !isUploading && (
              <div className="mt-2">
                <img src={currentAsesor.foto} alt="Vista previa" className="w-24 h-24 object-cover rounded-lg border border-[#F4BA3E]/30" />
              </div>
            )}
          </div>

          <div>
            <label className="text-gray-300 mb-2 block">WhatsApp del Asesor *</label>
            <input
              type="text"
              placeholder="Ej: +52 123 456 7890"
              value={currentAsesor.whatsapp}
              onChange={(e) => setCurrentAsesor({ ...currentAsesor, whatsapp: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#F4BA3E]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#F4BA3E] transition-colors"
            />
          </div>

          <Button
            onClick={handleSaveAsesor}
            className="w-full bg-gradient-to-r from-[#947018] to-[#F4BA3E] hover:from-[#FFF18F] hover:to-[#F4BA3E] text-black text-lg py-6"
          >
            <Save className="w-5 h-5 mr-2" />
            Guardar Asesor
          </Button>
        </div>
      </motion.div>

      {asesores.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#F4BA3E]/30 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white">Asesores para Publicar ({asesores.length})</h2>
            <Button
              onClick={() => alert('Publicar Asesores')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Upload className="w-4 h-4 mr-2" />
              Publicar Todos
            </Button>
          </div>

          <div className="space-y-4">
            {asesores.map((asesor, index) => (
              <div
                key={index}
                className="bg-black/50 p-6 rounded-xl border border-[#F4BA3E]/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-[#F4BA3E] font-semibold">{asesor.nombre}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-[#F4BA3E] font-semibold">{asesor.cargo}</span>
                    </div>
                    <p className="text-gray-300">{asesor.foto}</p>
                    <p className="text-gray-300">{asesor.whatsapp}</p>
                  </div>
                  <Button
                    onClick={() => handleDeleteAsesor(index)}
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                {asesor.foto && (
                  <div className="flex space-x-2 overflow-x-auto">
                    <img
                      src={asesor.foto}
                      alt={`Asesor ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-lg border border-[#F4BA3E]/30"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
