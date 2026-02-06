import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // для Vite
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // если CRA

export interface Bike {
  id: number;
  name: string;
  price: number;
  image_path: string;
  brand: {
    id: number;
    name: string;
  };
}

export const getBikes = async (): Promise<Bike[]> => {
  const response = await axios.get<Bike[]>(`${API_BASE_URL}/api/bikes`);
  return response.data;
};
