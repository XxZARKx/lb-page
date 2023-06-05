import bootcampCourse1 from '../assets/bootcampImages/bootcamp.png'
import bootcampCourse2 from '../assets/bootcampImages/bootcamp2.png'
import bootcampCourse3 from '../assets/bootcampImages/bootcamp3.png'
import asesoriaCourse1 from '../assets/asesoriaImages/asesoria.png'
import asesoriaCourse2 from '../assets/asesoriaImages/asesoria2.png'
import asesoriaCourse3 from '../assets/asesoriaImages/asesoria3.png'
import asesoriaCourse4 from '../assets/asesoriaImages/asesoria4.png'

export const firstCarouselCourses = [
    {
        id: 1,
        bgRed: false,
        type: 'BOOTCAMP',
        objetive: 'PREPARACIÓN',
        method: 'TÉCNICA',
        src: bootcampCourse1,
        widthImage: 'default',
        list: false,
        listItems: [],
        description: 'Entrenamiento y capacitación  para responder efectivamente entrevistas técnicas y de reclutamiento en el área TI.',
        align: 'start',
        miniDescription: 'Bootcamp Preparación Técnica para el área TI',
        price: 'S/00.00'
    },
    {
        id: 2,
        bgRed: false,
        type: 'BOOTCAMP',
        objetive: 'DESARROLLO',
        method: 'WEB',
        src: bootcampCourse2,
        widthImage: '50%',
        list: true,
        listItems: ["Enfoque práctico", "Temas de Chrome DevTools, Extensiones, Puppeteer, React.js y Node.js"],
        description: '',
        align: 'start',
        miniDescription: 'Bootcamp de Desarrollo Web: Enfoque práctico',
        price: 'S/00.00'
    },
    {
        id: 3,
        bgRed: false,
        type: 'CURSO INTENSIVO',
        objetive: 'CLOUD',
        method: 'SPECIALIST',
        src: bootcampCourse3,
        widthImage: '55%',
        list: false,
        listItems: [],
        description: 'RESERVA HOY Y PREPÁRATE PARA ESTE CURSO INTENSIVO PERSONALIZADO',
        align: 'center',
        miniDescription: 'Curso Intensivo Cloud Specialist Modalidad Online',
        price: 'S/00.00'
    },
    {
        id: 4,
        bgRed: true,
        type: 'ASESORIA PERSONALIZADA ',
        objetive: 'CREACIÓN',
        method: 'DE CV',
        src: asesoriaCourse1,
        widthImage: 'default',
        list: false,
        listItems: [],
        description: 'RESERVA HOY Y PREPÁRATE PARA EL ÉXITO PROFESIONAL',
        align: 'center',
        miniDescription: 'Asesoría Personalizada para Creación de CV',
        price: 'S/00.00'
    },
    {
        id: 5,
        bgRed: true,
        type: 'ASESORIA PERSONALIZADA ',
        objetive: 'ENTREVISTAS ',
        method: 'STAR',
        src: asesoriaCourse2,
        widthImage: 'default',
        list: false,
        listItems: [],
        description: 'RESERVA HOY Y PREPÁRATE PARA EL ÉXITO PROFESIONAL',
        align: 'center',
        miniDescription: 'Asesoría Personalizada para Entrevistas (Métodología STAR)',
        price: 'S/00.00'
    },
    {
        id: 6,
        bgRed: true,
        type: 'ASESORIA PERSONALIZADA ',
        objetive: 'ENTREVISTAS ',
        method: 'GRUPALES',
        widthImage: 'default',
        src: asesoriaCourse3,
        list: false,
        listItems: [],
        description: 'RESERVA HOY Y PREPÁRATE PARA EL ÉXITO PROFESIONAL',
        align: 'center',
        miniDescription: 'Asesoría Personalizada Preparación en Entrevistas Grupales',
        price: 'S/00.00'
    },
    {
        id: 7,
        bgRed: true,
        src: asesoriaCourse4,
        type: 'ASESORIA PERSONALIZADA ',
        objetive: 'ENTREVISTAS EN',
        method: 'INGLÉS',
        widthImage: 'default',
        list: false,
        listItems: [],
        description: 'RESERVA HOY Y PREPÁRATE PARA EL ÉXITO PROFESIONAL',
        align: 'end',
        miniDescription: 'Asesoría Personalizada Preparación en Entrevistas en Inglés',
        price: 'S/00.00'
    },
]


export const bootcampCarousel = [
    {
        id: 1,
        bgRed: false,
        src: bootcampCourse1,
        type: 'BOOTCAMP',
        objetive: 'PREPARACIÓN',
        method: 'TÉCNICA',
        widthImage: 'default',
        description: 'Entrenamiento y capacitación  para responder efectivamente entrevistas técnicas y de reclutamiento en el área TI.',
        align: 'start',
        miniDescription: 'Bootcamp Preparación Técnica para el área TI',
        price: 'S/00.00'
    },
    {
        id: 2,
        bgRed: false,
        src: bootcampCourse2,
        type: 'BOOTCAMP',
        objetive: 'DESARROLLO',
        method: 'WEB',
        widthImage: '50%',
        list: true,
        listItems: ["Enfoque práctico", "Temas de Chrome DevTools, Extensiones, Puppeteer, React.js y Node.js"],
        description: '',
        align: 'start',
        miniDescription: 'Bootcamp de Desarrollo Web: Enfoque práctico',
        price: 'S/00.00'
    },
    {
        id: 3,
        bgRed: false,
        src: bootcampCourse3,
        type: 'CURSO INTENSIVO',
        objetive: 'CLOUD',
        method: 'SPECIALIST',
        widthImage: 'default',
        description: 'RESERVA HOY Y PREPÁRATE PARA ESTE CURSO INTENSIVO PERSONALIZADO',
        align: 'center',
        miniDescription: 'Curso Intensivo Cloud Specialist Modalidad Online',
        price: 'S/00.00'
    },
]

export const asesoriaCarousel = [
    {
        id: 1,
        bgRed: true,
        type: 'ASESORIA PERSONALIZADA ',
        objetive: 'CREACIÓN',
        method: 'DE CV',
        src: asesoriaCourse1,
        widthImage: 'default',
        list: false,
        listItems: [],
        description: 'RESERVA HOY Y PREPÁRATE PARA EL ÉXITO PROFESIONAL',
        align: 'center',
        miniDescription: 'Asesoría Personalizada para Creación de CV',
        price: 'S/00.00'
    },
    {
        id: 2,
        bgRed: true,
        type: 'ASESORIA PERSONALIZADA ',
        objetive: 'ENTREVISTAS ',
        method: 'STAR',
        src: asesoriaCourse2,
        widthImage: 'default',
        list: false,
        listItems: [],
        description: 'RESERVA HOY Y PREPÁRATE PARA EL ÉXITO PROFESIONAL',
        align: 'center',
        miniDescription: 'Asesoría Personalizada para Entrevistas (Métodología STAR)',
        price: 'S/00.00'
    },
    {
        id: 3,
        bgRed: true,
        type: 'ASESORIA PERSONALIZADA ',
        objetive: 'ENTREVISTAS ',
        method: 'GRUPALES',
        widthImage: 'default',
        src: asesoriaCourse3,
        list: false,
        listItems: [],
        description: 'RESERVA HOY Y PREPÁRATE PARA EL ÉXITO PROFESIONAL',
        align: 'center',
        miniDescription: 'Asesoría Personalizada Preparación en Entrevistas Grupales',
        price: 'S/00.00'
    },
    {
        id: 4,
        bgRed: true,
        src: asesoriaCourse4,
        type: 'ASESORIA PERSONALIZADA ',
        objetive: 'ENTREVISTAS EN',
        method: 'INGLÉS',
        widthImage: 'default',
        list: false,
        listItems: [],
        description: 'RESERVA HOY Y PREPÁRATE PARA EL ÉXITO PROFESIONAL',
        align: 'end',
        miniDescription: 'Asesoría Personalizada Preparación en Entrevistas en Inglés',
        price: 'S/00.00'
    },
]