import { Demo } from '@/types';
import axios from 'axios';

export const ProductService = {
    getProductsSmall() {
        return fetch('/demo/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Product[]);
    },

    getProducts() {
        return fetch('/demo/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Product[]);
    },

    getProductsWithOrdersSmall() {
        return fetch('/demo/data/products-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Product[]);
    },

    getUsers() {
        console.log('getUsers axios');
       return axios.get('http://192.168.0.223:4000/api/users')
            .then(response => {
                // Access the response data
                const responseData = response.data;
                // Process the response data here
            })
            .catch(error => {
                // Handle any errors
            });
    },
};
