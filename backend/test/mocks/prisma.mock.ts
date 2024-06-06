import { randomUUID } from 'crypto'

export const mockPrisma = {
  user: {
    create: jest.fn().mockImplementation((dto) => ({
      ...dto,
      id: randomUUID(),
      role: 'CLIENT'
    })),
    findUnique: jest.fn(),
    update: jest.fn().mockResolvedValue({}) // Mock the update method
  },
  appointment: {
    create: jest.fn()
  },
  employeeCompany: {
    findUnique: jest.fn()
  },
  serviceAppointment: {
    createMany: jest.fn()
  },
  service: {
    findUnique: jest.fn(),
    create: jest.fn()
  },
  company: {
    findFirst: jest.fn()
  },
  schedule: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn()
  }
} as const
