import { FileText, Shield, Lock, Eye, Database, Mail } from 'lucide-react';

const sections = [
  { icon: Database, title: '1. Información que Recopilamos', content: (<div className="space-y-4 text-gray-300"><p>Recopilamos la siguiente información:</p><ul className="list-disc list-inside space-y-2 ml-4"><li><strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono, dirección física.</li><li><strong>Información financiera:</strong> Datos de pago y facturación cuando realiza una transacción.</li><li><strong>Información de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia.</li><li><strong>Información de propiedad:</strong> Preferencias de terrenos, presupuesto, ubicaciones de interés.</li></ul></div>) },
  { icon: Eye, title: '2. Cómo Usamos su Información', content: (<div className="space-y-4 text-gray-300"><p>Utilizamos su información para:</p><ul className="list-disc list-inside space-y-2 ml-4"><li>Procesar sus solicitudes y transacciones de compra de terrenos o casas campestres.</li><li>Comunicarnos con usted sobre nuestros proyectos, ofertas y actualizaciones.</li><li>Gestionar su participación en el programa de referidos.</li><li>Mejorar nuestros servicios y experiencia de usuario.</li><li>Cumplir con obligaciones legales y regulatorias.</li><li>Enviar comunicaciones de marketing con su consentimiento.</li></ul></div>) },
  { icon: Lock, title: '3. Protección de sus Datos', content: (<div className="space-y-4 text-gray-300"><p>Implementamos medidas de seguridad técnicas y organizativas:</p><ul className="list-disc list-inside space-y-2 ml-4"><li>Encriptación SSL/TLS para transmisiones de datos.</li><li>Servidores seguros con acceso restringido.</li><li>Auditorías de seguridad regulares.</li><li>Capacitación continua de nuestro personal en protección de datos.</li><li>Políticas estrictas de acceso a información confidencial.</li></ul></div>) },
  { icon: FileText, title: '4. Compartir Información con Terceros', content: (<div className="space-y-4 text-gray-300"><p>No vendemos su información personal. Podemos compartir datos con:</p><ul className="list-disc list-inside space-y-2 ml-4"><li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro negocio.</li><li><strong>Autoridades legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos.</li><li><strong>Socios comerciales:</strong> Con su consentimiento explícito para ofertas específicas.</li></ul></div>) },
  { icon: Shield, title: '5. Sus Derechos', content: (<div className="space-y-4 text-gray-300"><p>Usted tiene derecho a:</p><ul className="list-disc list-inside space-y-2 ml-4"><li><strong>Acceso:</strong> Solicitar una copia de sus datos personales.</li><li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li><li><strong>Eliminación:</strong> Solicitar la eliminación de sus datos (derecho al olvido).</li><li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado.</li><li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos para ciertos fines.</li><li><strong>Revocación:</strong> Retirar el consentimiento en cualquier momento.</li></ul></div>) },
  { icon: Database, title: '6. Uso de Cookies', content: (<div className="space-y-4 text-gray-300"><p>Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar contenido. Puede gestionar las preferencias de cookies a través de la configuración de su navegador.</p></div>) },
  { icon: FileText, title: '7. Retención de Datos', content: (<div className="space-y-4 text-gray-300"><p>Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más prolongado.</p></div>) },
  { icon: Shield, title: '8. Cambios a esta Política', content: (<div className="space-y-4 text-gray-300"><p>Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "Última actualización".</p></div>) },
];

export function PrivacidadContent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed">En Grupo Constructor Meraki, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios o visita nuestro sitio web.</p>
          </div>
          <div className="space-y-12">
            {sections.map(({ icon: Icon, title, content }) => (
              <div key={title} className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <Icon className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">{title}</h2>
                </div>
                {content}
              </div>
            ))}
          </div>
          <div className="mt-16 bg-gradient-to-br from-[#947018]/10 to-[#F4BA3E]/5 p-8 rounded-lg border border-[#F4BA3E]/30">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl text-[#F4BA3E] mb-4">Contacto</h2>
                <p className="text-gray-300 mb-4">Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, contáctenos:</p>
                <ul className="space-y-2 text-gray-300">
                  <li><strong>Email:</strong> privacidad@meraki.com</li>
                  <li><strong>Teléfono:</strong> +57 300 123 4567</li>
                  <li><strong>Dirección:</strong> Calle Principal 123, Ciudad, País</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrivacidadHero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#0d060a] to-black border-b border-[#F4BA3E]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/30">
              <Shield className="w-10 h-10 text-black" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">Política de Privacidad</h1>
          <p className="text-lg text-gray-400">Última actualización: Marzo 2026</p>
        </div>
      </div>
    </section>
  );
}
