
export interface Faculty {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Career {
  _id: string;
  title: string;
  estimatedProgramDuration: string;
  numberOfAcademicCredits: number;
  academicLevel: string;
  levelOfEducation: string;
  admissionPeriodicity: string;
  trainingModality: string;
  degreeAwarded: string;
  sniesRegistry: string;
  faculty: Faculty;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Ponderado {
  lecturaCritica: number;
  cienciasNaturales: number;
  matematicas: number;
  ingles: number;
  socialesYCiudadanas: number;
  ponderado: number;
  career: Career;
  cierre1: number;
  cierre2: number;
}

