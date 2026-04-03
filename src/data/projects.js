import labambaImg from '../assets/labamba.png'
import pokematchImg from '../assets/PokéMatchImg.png'
import simuImg from '../assets/simuImg.png'
import educonnectImg from '../assets/educonnect.png' 

export const myProjects = [
  {
    id: 'educonnect',
    title: 'EduConnect Agenda',
    description: 'Aplicativo mobile desenvolvido para facilitar o agendamento de reuniões entre pais e a equipe escolar.',
    img: educonnectImg,
    link: 'https://github.com/Rafa-Pontes/EduconnectAgenda', 
    stack: ['React Native', 'JavaScript', 'Mobile'],
    features: [
      '> Interface mobile intuitiva e responsiva',
      '> Sistema de agendamento de horários',
      '> Foco na comunicação e rotina escolar',
    ],
  },
  {
    id: 'labamba',
    title: 'Labamba',
    description: 'Projeto físico inspirado no clássico brinquedo de parque de diversões, com foco em eletrônica e integração de hardware.',
    img: labambaImg,
    link: 'https://github.com/Rafael705/Labamba',
    stack: ['Arduino', 'C++', 'Microcontroladores'],
    features: [
      '> Lógica de programação em C++',
      '> Controle de motores e iluminação LED',
      '> Integração de hardware e software',
    ],
  },
  {
    id: 'pokematch',
    title: 'PokéMatch',
    description: 'App de memória inspirado no universo Pokémon.',
    img: pokematchImg,
    link: 'https://github.com/Rafa-Pontes/MemoryGame',
    demoLink: 'https://memory-game-zeta-hazel.vercel.app/', 
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      '> Sistema de cartas dinâmico',
      '> Controle de tempo e pontuação',
      '> Múltiplos níveis de dificuldade',
    ],
  },
  {
    id: 'simulador',
    title: 'Simulador de Lançamento',
    description: 'Projeto de estudos de cinemática para simular lançamentos físicos no navegador.',
    img: simuImg,
    link: 'https://github.com/Rafa-Pontes/SimularDeLan-amento',
    stack: ['JavaScript', 'Canvas', 'Física'],
    features: [
      '> Simulação de trajetória em tempo real',
      '> Controle interativo de ângulo e força',
      '> Visualização gráfica de dados físicos',
    ],
  },
]