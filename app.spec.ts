import { calculateDiscount } from './src/utils';
import request from 'supertest';
import app from './src/app';
describe('App', () => {
    it('should calculate the discount', () => {
        const result = calculateDiscount(100, 10);
        expect(result).toBe(10);
    });

    // to test endpoints of the app here on / we are testing if statusCode=200
    it('should return status 200', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
