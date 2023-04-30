import axios from "axios";

const API_URL = 'https://api-colombia.com/api/v1'

//Get info Colombia
export const getColombiaInfo = async () => {
    const response = await axios.get(`${API_URL}/Country/Colombia`)
    return response.data
}

//Get info Regiones de Colombia
export const getRegionesColombia = async () => {
    const response = await axios.get(`${API_URL}/Region`);
    return response.data;
}

//Get info Region de Colombia
export const getRegionColombia = async id => {
    const response = await axios.get(`${API_URL}/Region/${id}`);
    return response.data;
}

//Get info Departamentos de Colombia
export const getDepartamentosColombia = async () => {
    const response = await axios.get(`${API_URL}/Department`);
    return response.data;
}

//Get info Departamento de Colombia
export const getDepartamentoColombia = async id => {
    const response = await axios.get(`${API_URL}/Department/${id}`);
    return response.data;
}

//Get info Reservas Naturales de Colombia
export const getReservasColombia = async () => {
    const response = await axios.get(`${API_URL}/NaturalArea`);
    return response.data;
}

//Get info Reserva de Colombia
export const getReservaColombia = async id => {
    const response = await axios.get(`${API_URL}/NaturalArea/${id}`);
    return response.data;
}