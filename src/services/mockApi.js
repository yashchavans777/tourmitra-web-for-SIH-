import { mockStays } from '../utils/mockData.js';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const loginUser = async (email, password) => {
  await delay(1500);

  if (email === 'test@tourmitra.com' && password === 'password123') {
    return {
      user: {
        id: 1,
        name: 'Test User',
        email: 'test@tourmitra.com',
      },
      token: 'mock-jwt-token-1234567890',
    };
  }

  throw new Error('Invalid credentials');
};

export const getHotels = async () => {
  await delay(1000);
  return mockStays;
};