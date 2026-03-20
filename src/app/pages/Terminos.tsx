import { FileText, AlertCircle, CheckCircle, Scale, ShieldAlert, Gavel } from 'lucide-react';

export default function Terminos() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-[#0d060a] to-black border-b border-[#F4BA3E]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#947018] via-[#B7871C] to-[#F4BA3E] flex items-center justify-center shadow-lg shadow-[#F4BA3E]/30">
                <Scale className="w-10 h-10 text-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#947018] via-[#F4BA3E] to-[#947018] bg-clip-text text-transparent">
              Términos y Condiciones
            </h1>
            <p className="text-lg text-gray-400">
              Última actualización: Marzo 2026
            </p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introducción */}
            <div className="mb-12">
              <p className="text-gray-300 leading-relaxed">
                Bienvenido a Grupo Constructor Meraki. Al acceder y utilizar nuestros servicios, usted acepta 
                estar sujeto a los siguientes términos y condiciones. Por favor, léalos cuidadosamente antes 
                de utilizar nuestro sitio web o adquirir nuestros productos inmobiliarios.
              </p>
            </div>

            {/* Secciones */}
            <div className="space-y-12">
              {/* 1. Aceptación de Términos */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">1. Aceptación de Términos</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Al utilizar este sitio web y nuestros servicios, usted reconoce que ha leído, entendido 
                    y acepta estar sujeto a estos términos y condiciones, así como a nuestra Política de Privacidad.
                  </p>
                  <p>
                    Si no está de acuerdo con alguno de estos términos, no utilice nuestro sitio web ni 
                    nuestros servicios.
                  </p>
                </div>
              </div>

              {/* 2. Servicios Ofrecidos */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">2. Servicios Ofrecidos</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Grupo Constructor Meraki ofrece:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Venta de terrenos campestres en condominios tipo club de campo.</li>
                    <li>Venta de casas campestres construidas.</li>
                    <li>Programa de referidos con comisiones.</li>
                    <li>Servicios de financiamiento y cartera.</li>
                    <li>Asesoría inmobiliaria especializada.</li>
                  </ul>
                  <p>
                    Nos reservamos el derecho de modificar, suspender o discontinuar cualquier servicio 
                    en cualquier momento sin previo aviso.
                  </p>
                </div>
              </div>

              {/* 3. Proceso de Compra */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <Gavel className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">3. Proceso de Compra y Reserva</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Reservas:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Las reservas requieren un pago inicial que será especificado para cada proyecto.</li>
                    <li>Las reservas son válidas por el período estipulado en el contrato de separación.</li>
                    <li>El incumplimiento en los pagos puede resultar en la cancelación de la reserva.</li>
                  </ul>
                  <p><strong>Promesa de Compraventa:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Se firmará una promesa de compraventa antes de la escrituración.</li>
                    <li>Los plazos y condiciones se especificarán en dicho documento.</li>
                    <li>Todas las cláusulas son vinculantes para ambas partes.</li>
                  </ul>
                </div>
              </div>

              {/* 4. Precios y Pagos */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">4. Precios y Métodos de Pago</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Los precios están sujetos a cambios sin previo aviso hasta la firma del contrato.</li>
                    <li>Aceptamos transferencias bancarias, tarjetas de crédito y débito.</li>
                    <li>Se ofrecen planes de financiación sujetos a aprobación crediticia.</li>
                    <li>Los pagos atrasados pueden generar intereses de mora según lo estipulado.</li>
                    <li>Todos los impuestos y gastos notariales son responsabilidad del comprador.</li>
                  </ul>
                </div>
              </div>

              {/* 5. Programa de Referidos */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">5. Programa de Referidos</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Las comisiones se pagan cuando la venta referida se completa y escritura.</li>
                    <li>El referidor debe estar registrado en nuestro sistema antes de la venta.</li>
                    <li>Las comisiones se calculan sobre el valor final de venta.</li>
                    <li>El pago se realiza según el calendario establecido en el contrato de referidos.</li>
                    <li>Nos reservamos el derecho de modificar o cancelar el programa en cualquier momento.</li>
                  </ul>
                </div>
              </div>

              {/* 6. Garantías y Entregas */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <ShieldAlert className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">6. Garantías y Tiempos de Entrega</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Para Terrenos:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Las entregas se realizan según cronograma del proyecto.</li>
                    <li>Los planos maestros pueden sufrir modificaciones mínimas por regulaciones.</li>
                    <li>Se garantiza el acceso a amenidades descritas en materiales de venta.</li>
                  </ul>
                  <p><strong>Para Casas Campestres:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Garantía estructural de 10 años según normativa vigente.</li>
                    <li>Garantía de acabados de 1 año desde la entrega.</li>
                    <li>Los tiempos de construcción son estimados y pueden variar.</li>
                  </ul>
                </div>
              </div>

              {/* 7. Responsabilidades del Comprador */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <AlertCircle className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">7. Responsabilidades del Comprador</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>El comprador se compromete a:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Proporcionar información veraz y actualizada.</li>
                    <li>Cumplir con los pagos según el cronograma establecido.</li>
                    <li>Realizar la debida diligencia sobre el inmueble antes de la compra.</li>
                    <li>Respetar las normas del condominio o urbanización.</li>
                    <li>Asumir los gastos notariales, de registro y impuestos aplicables.</li>
                  </ul>
                </div>
              </div>

              {/* 8. Limitación de Responsabilidad */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <ShieldAlert className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">8. Limitación de Responsabilidad</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Grupo Constructor Meraki no será responsable por daños indirectos, incidentales o 
                    consecuentes que surjan del uso de nuestro sitio web o servicios. No garantizamos 
                    que el sitio esté libre de errores o interrupciones.
                  </p>
                  <p>
                    Las imágenes y renders son ilustrativos y pueden diferir del producto final.
                  </p>
                </div>
              </div>

              {/* 9. Propiedad Intelectual */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">9. Propiedad Intelectual</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Todo el contenido del sitio web, incluyendo textos, gráficos, logos, imágenes y software, 
                    es propiedad de Grupo Constructor Meraki y está protegido por leyes de propiedad intelectual.
                  </p>
                  <p>
                    Queda prohibida la reproducción, distribución o uso comercial sin autorización expresa.
                  </p>
                </div>
              </div>

              {/* 10. Resolución de Disputas */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <Gavel className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">10. Resolución de Disputas</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Cualquier disputa relacionada con estos términos será resuelta mediante arbitraje o 
                    en los tribunales competentes de la jurisdicción donde se ubica nuestra oficina principal.
                  </p>
                  <p>
                    Intentaremos resolver amigablemente cualquier conflicto antes de proceder legalmente.
                  </p>
                </div>
              </div>

              {/* 11. Modificaciones */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <AlertCircle className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">11. Modificaciones a los Términos</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
                    entrarán en vigor inmediatamente después de su publicación en el sitio web. Es su 
                    responsabilidad revisar periódicamente estos términos.
                  </p>
                </div>
              </div>

              {/* 12. Ley Aplicable */}
              <div className="bg-gradient-to-br from-[#0d060a] to-black p-8 rounded-lg border border-[#F4BA3E]/20">
                <div className="flex items-start gap-4 mb-4">
                  <Scale className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                  <h2 className="text-2xl text-[#F4BA3E]">12. Ley Aplicable</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Estos términos y condiciones se rigen por las leyes de la República de Colombia. 
                    Cualquier acción legal debe presentarse en los tribunales de la jurisdicción correspondiente.
                  </p>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="mt-16 bg-gradient-to-br from-[#947018]/10 to-[#F4BA3E]/5 p-8 rounded-lg border border-[#F4BA3E]/30">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="w-6 h-6 text-[#F4BA3E] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl text-[#F4BA3E] mb-4">Contacto Legal</h2>
                  <p className="text-gray-300 mb-4">
                    Para consultas sobre estos Términos y Condiciones, contáctenos:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Email:</strong> legal@meraki.com</li>
                    <li><strong>Teléfono:</strong> +57 300 123 4567</li>
                    <li><strong>Dirección:</strong> Calle Principal 123, Ciudad, País</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
