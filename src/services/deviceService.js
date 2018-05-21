// IMPORT DATA FROM STATIC JSON FILE

import zips from './devices.json';


// COMPONENT

const simulateError = false;

export const fetchDeviceCodes = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of zip codes');
            } else {
                resolve(zips);
            }
        }, 1000);
    });
};