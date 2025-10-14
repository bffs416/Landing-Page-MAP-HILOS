import { PlaceHolderImages } from './placeholder-images';
import VectorLiftContent from '@/components/vector-lift-content';
import ApexLiftContent from '@/components/apex-lift-content';
import RhinoStructureContent from '@/components/rhino-structure-content';
import ContourNeckContent from '@/components/contour-neck-content';
import CoreDefineContent from '@/components/core-define-content';
import ArmContourContent from '@/components/arm-contour-content';
import GluteCurveContent from '@/components/glute-curve-content';

export const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return image ? image.imageUrl : '/images/placeholder.jpg';
};

const getImageHint = (id: string) => {
    const image = PlaceHolderImages.find((img) => img.id === id);
    return image ? image.imageHint : 'placeholder';
};

export const vectorLiftSteps = [
    {
        title: `Paso 1: Evaluación y Marcación Preoperatoria`,
        description: `Evaluar la flacidez (ej. en sedestación) y marcar el punto de entrada (fijo) y los puntos de suspensión (móviles). El punto de entrada se sitúa en la región temporal/preauricular, cerca de la línea del cabello, 1 cm anterior y 1 cm superior al ápice del trago. Marcar vectores oblicuos hacia el SNL y la línea mandibular.`,
        imageUrl: getImage(`step-1`),
        imageHint: getImageHint(`step-1`),
    },
    {
        title: `Paso 2: Anestesia Local`,
        description: `Aplicar anestesia local (ej. Lidocaína 2% con epinefrina 1:100,000) mediante inyección en el punto de entrada y a lo largo del trayecto subcutáneo donde pasarán los hilos.`,
        imageUrl: getImage(`step-2`),
        imageHint: getImageHint(`step-2`),
    },
    {
        title: `Paso 3: Creación del Puerto de Entrada`,
        description: `Realizar una punción o pequeña incisión en el punto de entrada marcado, generalmente utilizando una aguja 18G.`,
        imageUrl: getImage(`step-3`),
        imageHint: getImageHint(`step-3`),
    },
    {
        title: `Paso 4: Inserción de la Cánula/Aguja`,
        description: `Introducir la cánula o aguja precargada (ej. 19G/21G) perpendicularmente a la piel y luego girarla inmediatamente para avanzar paralelamente en el plano subcutáneo (supra-SMAS).`,
        imageUrl: getImage(`step-4`),
        imageHint: getImageHint(`step-4`),
    },
    {
        title: `Paso 5: Túnel y Dirección del Vector`,
        description: `Deslizar la cánula a lo largo del vector pre-marcado, asegurando que se mantenga en el plano subcutáneo; la punta debe ser palpable bajo el tejido pero sin crear relieve visible. No cruzar el surco nasolabial, manteniendo el punto de salida al menos 0.5 cm lateralmente.`,
        imageUrl: getImage(`step-5`),
        imageHint: getImageHint(`step-5`),
    },
    {
        title: `Paso 6: Despliegue del Hilo`,
        description: `Una vez alcanzado el punto de suspensión (salida), detener la tracción para que las espículas del segmento distal del hilo se anclen en el tejido subcutáneo antes de retirar la cánula.`,
        imageUrl: getImage(`step-6`),
        imageHint: getImageHint(`step-6`),
    },
    {
        title: `Paso 7: Tracción y Levantamiento Mecánico`,
        description: `Aplicar una tracción manual suave en sentido póstero-superior (opuesto al vector de caída) a los cabos libres del hilo para enganchar las espículas MINT® en el tejido fibro-graso y reposicionar el tejido ptósico (efecto lifting inmediato).`,
        imageUrl: getImage(`step-7`),
        imageHint: getImageHint(`step-7`),
    },
    {
        title: `Paso 8: Anclaje y Nudado (Fijación)`,
        description: `Si el diseño de hilo lo permite, o si se usan hilos bidireccionales, anudar los cabos libres entre sí en el mismo punto de entrada antes de cortarlos. Esta maniobra aumenta la sustentación y ayuda a prevenir la migración.`,
        imageUrl: getImage(`step-8`),
        imageHint: getImageHint(`step-8`),
    },
    {
        title: `Paso 9: Corte y Enterramiento del Hilo`,
        description: `Cortar el exceso de sutura a un nivel profundo (subcutáneo) para asegurar que el extremo del hilo y el nudo (si se realizó) queden completamente enterrados bajo la piel y no sean visibles o palpables.`,
        imageUrl: getImage(`step-9`),
        imageHint: getImageHint(`step-9`),
    },
    {
        title: `Paso 10: Manejo Postoperatorio y Cuidados`,
        description: `Instruir al paciente a evitar la gesticulación exagerada, la masticación de alimentos duros y el ejercicio físico durante al menos 1-3 semanas. Se recomienda dormir boca arriba y considerar el uso de una mentonera/collarín para evitar la tracción descendente.`,
        imageUrl: getImage(`step-10`),
        imageHint: getImageHint(`step-10`),
    },
];

export const apexLiftSteps = [
    {
        title: "Paso 1: Evaluación y Consenso de Expectativas",
        description: "Determinar si el paciente es el candidato ideal, que generalmente presenta ptosis de ceja leve a moderada y busca una apariencia más juvenil. Es crucial establecer expectativas realistas, ya que los efectos son temporales.",
        imageUrl: getImage("step-1"),
        imageHint: getImageHint("step-1")
    },
    {
        title: "Paso 2: Marcaje Pre-Procedimiento",
        description: "Identificar la cola de la ceja y el vector de elevación deseado para lograr la forma de ceja adecuada, modificando el ángulo medial.",
        imageUrl: getImage("step-2"),
        imageHint: getImageHint("step-2")
    },
    {
        title: "Paso 3: Fase Opcional de Neurotoxina",
        description: "Aplicar Toxina Botulínica Tipo A selectivamente en la porción lateral del músculo orbicular del ojo (depresor) aproximadamente 15 a 20 días antes de la inserción de los hilos.",
        imageUrl: getImage("step-3"),
        imageHint: getImageHint("step-3")
    },
    {
        title: "Paso 4: Preparación Aséptica y Anestesia Local",
        description: "Limpiar y desinfectar la zona de entrada (región temporal/línea del cabello) y a lo largo del trayecto planificado. Administrar anestesia local (p. ej., lidocaína con epinefrina) solo en los puntos de entrada.",
        imageUrl: getImage("step-4"),
        imageHint: getImageHint("step-4")
    },
    {
        title: "Paso 5: Creación del Punto de Entrada",
        description: "Realizar una o varias punciones (1 a 3 puntos) en la línea del cabello de la región temporal, generalmente con una aguja de calibre 18G para facilitar el paso de la cánula o la aguja doble.",
        imageUrl: getImage("step-5"),
        imageHint: getImageHint("step-5")
    },
    {
        title: "Paso 6: Inserción Estratégica del Hilo",
        description: "Utilizar hilos barbados bidireccionales fuertes (como MINT® EASY, USP 1 o 2-0). Insertar el hilo largo a través del plano subcutáneo (supra-SMAS) hacia la cola de la ceja, y utilizar hilos más cortos en vectores cruzados (criss-cross pattern) para crear un andamiaje fibroso robusto.",
        imageUrl: getImage("step-6"),
        imageHint: getImageHint("step-6")
    },
    {
        title: "Paso 7: Anclaje Profundo y Fijación de la Sutura",
        description: "Si se usa un hilo con anclaje, este se fija a la fascia temporal profunda o al periostio. Para hilos de auto-sustentación (bidireccionales sin nudos externos), la fijación se logra por las púas enganchadas al tejido adiposo circundante.",
        imageUrl: getImage("step-7"),
        imageHint: getImageHint("step-7")
    },
    {
        title: "Paso 8: Tracción y Sobrecorrección Inicial",
        description: "Aplicar tracción suave en sentido opuesto a la ptosis (hacia arriba y atrás) para elevar la cola de la ceja. Se recomienda lograr una ligera sobrecorrección para compensar el descenso esperado en el postoperatorio.",
        imageUrl: getImage("step-8"),
        imageHint: getImageHint("step-8")
    },
    {
        title: "Paso 9: Corte y Ocultamiento de los Hilos",
        description: "Cortar los extremos de los hilos de manera que queden completamente enterrados bajo la piel para evitar su exposición, palpación, o riesgo de infección. Se puede utilizar una maniobra de contra-tracción con tijera para asegurar que el hilo se profundice.",
        imageUrl: getImage("step-9"),
        imageHint: getImageHint("step-9")
    },
    {
        title: "Paso 10: Cuidados Post-Tratamiento",
        description: "Evitar movimientos faciales o gesticulación exagerada (reír, bostezar) y ejercicio intenso por 2 a 3 semanas. Aplicar compresas frías y dormir con la cabeza elevada. Es común el uso de una mentonera o un collarín cervical (barbicuello) si la tracción es extensa.",
        imageUrl: getImage("step-10"),
        imageHint: getImageHint("step-10")
    }
];

export const rhinoStructureSteps = [
    {
        title: "Paso 1: Evaluación del Paciente y Objetivos",
        description: "Evaluar la estructura nasal, la calidad de la piel (espesor), y establecer expectativas realistas. Este procedimiento busca mejoras menores, como la elevación de la punta (rotación) y la rectificación del dorso, y no es un sustituto de la rinoplastia quirúrgica.",
        imageUrl: getImage("step-1"),
        imageHint: getImageHint("step-1")
    },
    {
        title: "Paso 2: Marcaje y Diseño del Vector",
        description: "Marcar el área a tratar (dorso y columela) y definir la dirección de elevación deseada (vector). El vector principal para la punta debe ser una proyección hacia adelante y un aumento del ángulo nasolabial.",
        imageUrl: getImage("step-2"),
        imageHint: getImageHint("step-2")
    },
    {
        title: "Paso 3: Preparación Aséptica y Anestesia",
        description: "Realizar asepsia rigurosa del campo. Aplicar anestesia local infiltrativa con lidocaína (a menudo con epinefrina) en la punta nasal y la subnasale. También puede incluir el bloqueo del nervio etmoidal anterior.",
        imageUrl: getImage("step-3"),
        imageHint: getImageHint("step-3")
    },
    {
        title: "Paso 4: Creación del Único Punto de Entrada",
        description: "Crear un punto de entrada (incisión de 18G) en la punta nasal (2–3 mm por debajo de la punta) o en la subnasale (1 mm por debajo de la base columelar).",
        imageUrl: getImage("step-4"),
        imageHint: getImageHint("step-4")
    },
    {
        title: "Paso 5: Inserción de Hilos para el Dorso (MINT UP)",
        description: "Insertar 3 a 5 hilos (PDO espiculados UP o lisos) a través de una cánula (ej. 18G/5 cm) desde la punta hasta el radix (puente nasal) a lo largo de la línea media en el plano subcutáneo.",
        imageUrl: getImage("step-5"),
        imageHint: getImageHint("step-5")
    },
    {
        title: "Paso 6: Inserción de Hilos para la Columela (MINT TIP)",
        description: "Insertar 3 a 5 hilos espiculados (TIP) en una configuración plegada o rígida, desde la subnasale hasta la punta, dentro del plano suprapericóndrico/subcutáneo profundo.",
        imageUrl: getImage("step-6"),
        imageHint: getImageHint("step-6")
    },
    {
        title: "Paso 7: Anclaje y Fijación de Hilos",
        description: "Los hilos espiculados multidireccionales se auto-anclan en el tejido fibrograso por la acción de sus púas. Si se requiere un soporte más fuerte, se puede realizar un anclaje al periostio (en la rinoplastia profunda) o anudar los extremos para evitar la migración (aunque esto es más común en el lifting facial).",
        imageUrl: getImage("step-7"),
        imageHint: getImageHint("step-7")
    },
    {
        title: "Paso 8: Modelado y Corte Final",
        description: "Aplicar tracción manual suave y movimientos de masaje para optimizar la posición de la punta. Recortar el exceso de material del hilo y empujar el extremo cortado por debajo de la superficie de la piel para asegurar que quede enterrado.",
        imageUrl: getImage("step-8"),
        imageHint: getImageHint("step-8")
    },
    {
        title: "Paso 9: Inyección Opcional de Rellenos",
        description: "Si se desea mayor volumen en el dorso (radix) o se combina la técnica, inyectar relleno (Ácido Hialurónico) en el plano supraperióstico del dorso. Esto no se recomienda para la punta nasal (columela) debido al alto riesgo vascular.",
        imageUrl: getImage("step-9"),
        imageHint: getImageHint("step-9")
    },
    {
        title: "Paso 10: Cuidados Post-Procedimiento",
        description: "Indicar al paciente no manipular ni presionar la zona nasal y evitar movimientos faciales bruscos durante al menos 10 a 15 días. Evitar el ejercicio físico intenso. Se puede aconsejar aplicar hielo para reducir la hinchazón.",
        imageUrl: getImage("step-10"),
        imageHint: getImageHint("step-10")
    }
];

export const contourNeckSteps = [
    {
        title: `Paso 1: Evaluación y Selección del Candidato`,
        description: `Determinar si el paciente presenta ptosis leve a moderada y si tiene exceso de grasa submentoniana (papada). Pacientes con exceso de piel no son buenos candidatos para hilos solos.`,
        imageUrl: getImage(`step-1`),
        imageHint: getImageHint(`step-1`),
    },
    {
        title: `Paso 2: Reducción de Volumen Graso (Opcional)`,
        description: `Si hay exceso de grasa, tratarla 4 a 12 semanas antes con criolipólisis o ácido desoxicólico para disminuir el peso del colgajo y hacer el lifting más efectivo.`,
        imageUrl: getImage(`step-2`),
        imageHint: getImageHint(`step-2`),
    },
    {
        title: `Paso 3: Relajación Muscular (Opcional)`,
        description: `Aplicar Toxina Botulínica en el músculo platisma (patrón "Nefertiti") 15-20 días antes para reducir la resistencia muscular a la tracción del hilo.`,
        imageUrl: getImage(`step-3`),
        imageHint: getImageHint(`step-3`),
    },
    {
        title: `Paso 4: Diseño de Vectores y Marcaje`,
        description: `Definir vectores de tracción opuestos a la caída del tejido, dirigidos craneal y posteriormente. El punto de anclaje se sitúa en la zona fija (fascia mastoidea/preauricular).`,
        imageUrl: getImage(`step-4`),
        imageHint: getImageHint(`step-4`),
    },
    {
        title: `Paso 5: Asepsia y Anestesia Local`,
        description: `Realizar asepsia quirúrgica e inyectar anestesia local (ej. Lidocaína con Epinefrina) solo en los puntos de entrada y salida para no comprometer el plano de inserción.`,
        imageUrl: getImage(`step-5`),
        imageHint: getImageHint(`step-5`),
    },
    {
        title: `Paso 6: Creación de Puntos de Entrada`,
        description: `Realizar una punción con aguja 18G en el punto de anclaje (fijo) y en la parte móvil (puntos de suspensión). El hilo se colocará en el plano subcutáneo superficial (supra-SMAS).`,
        imageUrl: getImage(`step-6`),
        imageHint: getImageHint(`step-6`),
    },
    {
        title: `Paso 7: Inserción de Hilos de Sustentación`,
        description: `Utilizar hilos espiculados bidireccionales (PDO cog) de calibre 21G o 23G. Insertar con cánula roma siguiendo los vectores diseñados hacia el punto de anclaje.`,
        imageUrl: getImage(`step-7`),
        imageHint: getImageHint(`step-7`),
    },
    {
        title: `Paso 8: Tracción, Ajuste y Anclaje`,
        description: `Aplicar tracción anti-gravitacional para elevar el tejido. Anudar los extremos de los hilos entre sí en el punto de entrada y enterrar el nudo para evitar migración.`,
        imageUrl: getImage(`step-8`),
        imageHint: getImageHint(`step-8`),
    },
    {
        title: `Paso 9: Manejo Inmediato de Complicaciones`,
        description: `Si ocurren irregularidades o pliegues (dimpling), tratarlos inmediatamente con masaje suave o liberación de la espícula mediante subcisión con aguja 18G.`,
        imageUrl: getImage(`step-9`),
        imageHint: getImageHint(`step-9`),
    },
    {
        title: `Paso 10: Cuidados Post-Procedimiento`,
        description: `Evitar movimientos faciales exagerados durante 2-3 semanas. Se recomienda el uso de una mentonera día y noche durante 15 días para sostener la tracción.`,
        imageUrl: getImage(`step-10`),
        imageHint: getImageHint(`step-10`),
    },
];

export const coreDefineSteps = [
    {
        title: "Paso 1: Evaluación y Planificación",
        description: "Confirmar flacidez leve a moderada y, si es necesario, tratar la diástasis o realizar liposucción previa. Marcar los vectores de tracción deseados, generalmente desde la parte lateral superior del abdomen hacia el ombligo/línea media.",
        imageUrl: getImage("step-1"),
        imageHint: getImageHint("step-1"),
    },
    {
        title: "Paso 2: Asepsia y Anestesia Local",
        description: "Limpiar rigurosamente la zona. Infiltrar anestesia local (e.g., lidocaína 1% con epinefrina) solo en los puntos de entrada (e.g., 16 cm desde el ombligo, en la línea media superior).",
        imageUrl: getImage("step-2"),
        imageHint: getImageHint("step-2"),
    },
    {
        title: "Paso 3: Creación del Puerto de Entrada",
        description: "Realizar una incisión (e.g., con aguja 16G) en el punto de anclaje superior medio o lateral para permitir el paso de la cánula doblemente abierta.",
        imageUrl: getImage("step-3"),
        imageHint: getImageHint("step-3"),
    },
    {
        title: "Paso 4: Inserción de Hilos Fix (Tracción Principal)",
        description: "Insertar hilos espiculados bidireccionales (e.g., MINT43 PDO 1-0) a través de una cánula doble, a 1.5-2 mm por debajo de la dermis (plano subcutáneo).",
        imageUrl: getImage("step-4"),
        imageHint: getImageHint("step-4"),
    },
    {
        title: "Paso 5: Patrón de Tracción para el Ombligo/Abdomen",
        description: "Pasar un brazo del hilo (U-shaped) a 5 mm de la línea media y el otro a 1 cm lateral (para un efecto de cinching y elevación). Repetir la maniobra con otro hilo más lateral.",
        imageUrl: getImage("step-5"),
        imageHint: getImageHint("step-5"),
    },
    {
        title: "Paso 6: Inserción de Hilos Mono (Redensificación/Mesh)",
        description: "Insertar hilos monofilamento (Fine) en un patrón de malla (mesh) en la capa subdérmica para bioestimulación y soporte dérmico en toda el área.",
        imageUrl: getImage("step-6"),
        imageHint: getImageHint("step-6"),
    },
    {
        title: "Paso 7: Tracción y Ajuste",
        description: "Retirar la cánula. Tirar de los extremos de los hilos Fix/Cog para capturar el tejido subcutáneo, maximizando el efecto de cinching.",
        imageUrl: getImage("step-7"),
        imageHint: getImageHint("step-7"),
    },
    {
        title: "Paso 8: Anudado y Ocultamiento",
        description: "Atar los extremos de los hilos Fix/Cog juntos. El nudo debe retraerse y quedar enterrado dentro del puerto (umbilical, si se utiliza). Para hilos bidireccionales sin nudo de anclaje, se puede recanular el hilo y cortarlo a ras.",
        imageUrl: getImage("step-8"),
        imageHint: getImageHint("step-8"),
    },
    {
        title: "Paso 9: Cuidado Inmediato",
        description: "Limpiar y aplicar apósitos. Aplicar un vendaje compresivo/faja inmediatamente después de la cirugía con presión moderada.",
        imageUrl: getImage("step-9"),
        imageHint: getImageHint("step-9"),
    },
    {
        title: "Paso 10: Seguimiento y Mantenimiento",
        description: "Citas de seguimiento (3 semanas, 3 meses y 12 meses). El efecto completo se observa a los 3 meses y puede durar más de 12 meses. Se puede repetir el tratamiento al año para mantener el resultado.",
        imageUrl: getImage("step-10"),
        imageHint: getImageHint("step-10"),
    },
];

export const armContourSteps = [
    {
        title: "Paso 1: Evaluación y Marcaje",
        description: "Evaluar la laxitud (idealmente Etapa 1). Marcar el área (inferior al surco bicipital, aspecto inferior-medial). Dividir el área en una malla o patrón de cuadrícula.",
        imageUrl: getImage("step-1"),
        imageHint: getImageHint("step-1"),
    },
    {
        title: "Paso 2: Asepsia y Anestesia Local",
        description: "Realizar asepsia. Aplicar anestesia local (e.g., lidocaína tópica o infiltrativa) en la zona de tratamiento.",
        imageUrl: getImage("step-2"),
        imageHint: getImageHint("step-2"),
    },
    {
        title: "Paso 3: Inserción de Hilos Mono (Fine) en Malla",
        description: "Insertar hilos monofilamento (PDO doble screw 50mm) en un patrón de malla (mesh pattern) a nivel del plano dérmico profundo a hipodermis.",
        imageUrl: getImage("step-3"),
        imageHint: getImageHint("step-3"),
    },
    {
        title: "Paso 4: Número de Hilos",
        description: "Insertar una alta densidad de hilos (e.g., 30 hilos por brazo en un área de 10 cm x 2 cm en 20 cuadrados pequeños).",
        imageUrl: getImage("step-4"),
        imageHint: getImageHint("step-4"),
    },
    {
        title: "Paso 5: Inserción de Hilos Fix (Opcional)",
        description: "Si se requiere una tracción adicional para la laxitud, se pueden colocar hilos espiculados (Fix/Cog) a lo largo de vectores angulados contra la gravedad, desde el surco bicipital hacia la axila.",
        imageUrl: getImage("step-5"),
        imageHint: getImageHint("step-5"),
    },
    {
        title: "Paso 6: Terapia Combinada (Opcional, TBA)",
        description: "Inyectar Toxina Botulínica Tipo A intradérmicamente (e.g., 20U por brazo) en la misma sesión en el área de máxima laxitud.",
        imageUrl: getImage("step-6"),
        imageHint: getImageHint("step-6"),
    },
    {
        title: "Paso 7: Ajuste y Reacomodo",
        description: "Reacomodar el tejido y masajear suavemente (si se usaron Cog threads, se debe tensar ligeramente).",
        imageUrl: getImage("step-7"),
        imageHint: getImageHint("step-7"),
    },
    {
        title: "Paso 8: Recorte y Terminación",
        description: "Si se utilizan hilos de tracción, cortar el excedente del hilo a ras y enterrarlo bajo la piel.",
        imageUrl: getImage("step-8"),
        imageHint: getImageHint("step-8"),
    },
    {
        title: "Paso 9: Monitoreo del Colágeno",
        description: "El aumento de la producción de colágeno (neocolagénesis) y elastina es el mecanismo de sustentación a largo plazo. La mejoría es visible a los 30 días.",
        imageUrl: getImage("step-9"),
        imageHint: getImageHint("step-9"),
    },
    {
        title: "Paso 10: Mantenimiento y Seguimiento",
        description: "Repetir el procedimiento (ej. en una segunda sesión a los 14 días) para optimizar el resultado. Mantener la piel con constante bioestimulación.",
        imageUrl: getImage("step-10"),
        imageHint: getImageHint("step-10"),
    },
];

export const gluteCurveSteps = [
    {
        title: "Paso 1: Evaluación y Marcaje Fijo",
        description: "Determinar el marco glúteo (A, B, C) y el grado de ptosis. Marcar puntos de anclaje fijos (e.g., sobre el sacro, cerca del triángulo anatómico, y puntos trocantéricos).",
        imageUrl: getImage("step-1"),
        imageHint: getImageHint("step-1"),
    },
    {
        title: "Paso 2: Asepsia y Anestesia Tumescente",
        description: "Realizar asepsia. Infiltrar anestesia tumescente (lidocaína con epinefrina diluida) para la vasoconstricción y minimizar el sangrado/dolor.",
        imageUrl: getImage("step-2"),
        imageHint: getImageHint("step-2"),
    },
    {
        title: "Paso 3: Creación de Puertos de Entrada",
        description: "Realizar incisiones mínimas para el paso de la cánula, generalmente en la región sacra superior (punto A de Serdev).",
        imageUrl: getImage("step-3"),
        imageHint: getImageHint("step-3"),
    },
    {
        title: "Paso 4: Inserción de Hilos Fix (Sustentación)",
        description: "Utilizar hilos espiculados (Fix/Cog) y/o hilos tipo Bulgarian/Serdev con agujas largas o trócares. Insertar el hilo en el plano subcutáneo profundo/fascia superficial.",
        imageUrl: getImage("step-4"),
        imageHint: getImageHint("step-4"),
    },
    {
        title: "Paso 5: Diseño de Vectores Anti-Tosis",
        description: "Trazar el hilo en un patrón que se extienda desde el punto fijo (sacro) hacia el área móvil (glúteo inferior/subglúteo), realizando un bucle o anclaje fuerte en el isquion/fascia profunda.",
        imageUrl: getImage("step-5"),
        imageHint: getImageHint("step-5"),
    },
    {
        title: "Paso 6: Inserción de Hilos Mono (Volumen/Malla)",
        description: "Insertar hilos monofilamento (Fine) en patrón de malla (mesh) en los cuadrantes superiores (zona 2 y 3 de Avendaño) o donde se requiera volumen y bioestimulación.",
        imageUrl: getImage("step-6"),
        imageHint: getImageHint("step-6"),
    },
    {
        title: "Paso 7: Entrecruzamiento para Bioestimulación (Opcional)",
        description: "Utilizar hilos Fix o Mono en patrones cruzados (criss-cross) dentro del plano subcutáneo.",
        imageUrl: getImage("step-7"),
        imageHint: getImageHint("step-7"),
    },
    {
        title: "Paso 8: Tracción y Anudamiento",
        description: "Tensar los hilos Fix/Cog. Si es necesario, anudar la sutura al periostio o a la fascia profunda del músculo para una fijación sólida (técnica tipo Face-Up o Serdev), enterrando el nudo bajo la piel.",
        imageUrl: getImage("step-8"),
        imageHint: getImageHint("step-8"),
    },
    {
        title: "Paso 9: Trasplante de Grasa/Relleno (Opcional)",
        description: "Si se usa lipotransferencia, inyectar grasa lentamente (e.g., 150-350 cc por lado) de forma retrógrada con cánulas romas (e.g., cánulas bambi), evitando la inyección intravascular o muscular.",
        imageUrl: getImage("step-9"),
        imageHint: getImageHint("step-9"),
    },
    {
        title: "Paso 10: Terapia de Mantenimiento",
        description: "Recomendar 3-5 sesiones iniciales de PDRN o mesoterapia con ácido hialurónico lineal, espaciadas 1 a 3 meses, para optimizar la neocolagénesis. Repetir la aplicación de hilos tensores Fix/Cog al año.",
        imageUrl: getImage("step-10"),
        imageHint: getImageHint("step-10"),
    },
];

export const heroVideo = '/images/hero-background.mp4';

export const facialProtocols = [
  {
    name: 'VectorLift™',
    description:
      'Este protocolo está diseñado para tratar la flacidez del tercio inferior del rostro. A través de la inserción de hilos tensores MINT®, se crea un vector de tracción que redefine el contorno mandibular, eleva los tejidos caídos y restaura la definición del óvalo facial, logrando un efecto lifting natural y duradero.',
    contentComponent: VectorLiftContent,
    imageUrl: getImage('facial-vectorlift'),
    imageHint: getImageHint('facial-vectorlift'),
    steps: vectorLiftSteps,
  },
  {
    name: 'ApexLift™',
    description:
      "Inspirado en la tendencia 'fox eyes', este tratamiento eleva la cola de la ceja para crear una mirada más abierta, rasgada y juvenil. Se utilizan hilos específicos para reposicionar sutilmente el tercio superior, aportando un efecto rejuvenecedor y sensual a los ojos.",
    contentComponent: ApexLiftContent,
    imageUrl: getImage('facial-apexlift'),
    imageHint: getImageHint('facial-apexlift'),
    steps: apexLiftSteps,
  },
  {
    name: 'RhinoStructure™',
    description: 'Este protocolo no quirúrgico permite modelar la nariz de forma segura y reversible. Se utilizan hilos para elevar la punta nasal, rectificar el dorso y mejorar la definición general, corrigiendo pequeñas irregularidades sin necesidad de cirugía invasiva.',
    contentComponent: RhinoStructureContent,
    imageUrl: getImage('facial-rhinostructure'),
    imageHint: getImageHint('facial-rhinostructure'),
    steps: rhinoStructureSteps,
  },
  {
    name: 'ContourNeck™',
    description: 'Diseñado para combatir la flacidez en la zona del cuello y la papada, este tratamiento utiliza hilos para crear una malla de soporte subdérmica. Esto tensa la piel, define el ángulo cervicofacial y reduce la apariencia de la papada, devolviendo un cuello más estilizado y joven.',
    contentComponent: ContourNeckContent,
    imageUrl: getImage('facial-contourneck'),
    imageHint: getImageHint('facial-contourneck'),
    steps: contourNeckSteps,
  },
];

export const corporalProtocols = [
  {
    name: 'CoreDefine™',
    description: 'Este protocolo se enfoca en la flacidez abdominal postparto o por pérdida de peso. Los hilos MINT® se insertan para generar una tensión en la piel y estimular la producción de colágeno, mejorando la firmeza, tonificando el área y corrigiendo el "ombligo triste".',
    fullDescription: 'Descripción completa y detallada del CoreDefine™ (Abdomen). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Ideal para recuperar la firmeza abdominal sin pasar por el quirófano.',
    imageUrl: getImage('corporal-coredefine'),
    imageHint: getImageHint('corporal-coredefine'),
    contentComponent: CoreDefineContent,
    steps: coreDefineSteps,
  },
  {
    name: 'ArmContour™',
    description:
      'Ideal para tratar la piel laxa en la cara interna de los brazos, comúnmente conocida como "alas de murciélago". El protocolo crea una estructura de soporte con los hilos, tensando la piel y devolviendo un contorno más firme y definido a los brazos.',
    fullDescription: 'Descripción completa y detallada del ArmContour™ (Brazos). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Despídete de la flacidez en los brazos.',
    imageUrl: getImage('corporal-armcontour'),
    imageHint: getImageHint('corporal-armcontour'),
    contentComponent: ArmContourContent,
    steps: armContourSteps,
  },
  {
    name: 'GluteCurve™',
    description: 'Este tratamiento está diseñado para elevar y remodelar los glúteos caídos. Se insertan hilos tensores para crear un efecto de "lifting" que reposiciona el tejido, mejora la forma y proporciona una apariencia más redondeada y tonificada, sin añadir volumen artificial.',
    fullDescription: 'Descripción completa y detallada del GluteCurve™ (Glúteos). Aquí se explica el proceso en profundidad, los resultados esperados y los cuidados posteriores para el paciente. Consigue unos glúteos más elevados y firmes de forma natural.',
    imageUrl: getImage('corporal-glutecurve'),
    imageHint: getImageHint('corporal-glutecurve'),
    contentComponent: GluteCurveContent,
    steps: gluteCurveSteps,
  },
];

export const mapPillars = [
  {
    name: 'Mapeo Preciso',
    description:
      'Se apoya en nuestra herramienta de diagnóstico ICL-MINT® para un plan 100% personalizado.',
    href: '#calculadora',
    imageUrl: getImage('map-pillar-1'),
    imageHint: getImageHint('map-pillar-1'),
  },
  {
    name: 'Aplicación Experta',
    description:
      'Una técnica segura y depurada para un resultado natural y armónico.',
    imageUrl: getImage('map-pillar-2'),
    imageHint: getImageHint('map-pillar-2'),
  },
  {
    name: 'Potenciación Sinérgica',
    description:
      'Combinamos lo mejor para potenciar y prolongar la belleza de tu piel.',
    imageUrl: getImage('map-pillar-3'),
    imageHint: getImageHint('map-pillar-3'),
  }
];