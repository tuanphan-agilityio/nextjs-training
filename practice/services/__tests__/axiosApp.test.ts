import AxiosMockAdapter from 'axios-mock-adapter';

import axiosInstance from '../axiosApp';

describe('Axios instance', () => {
  let axiosMock: AxiosMockAdapter;

  beforeEach(() => {
    axiosMock = new AxiosMockAdapter(axiosInstance);
  });

  afterEach(() => {
    axiosMock.reset();
  });

  it('should have the correct base URL', () => {
    expect(axiosInstance.defaults.baseURL).toBe(
      process.env.NEXT_PUBLIC_BASE_API_URL,
    );
  });

  it('should successfully intercept and resolve a response', async () => {
    const responseData = { message: 'Successful response' };

    axiosMock.onGet('/api/some-endpoint').reply(200, responseData);

    const response = await axiosInstance.get('/api/some-endpoint');

    expect(response).toEqual(responseData);
  });

  it('should successfully intercept and reject an error response', async () => {
    const errorMessage = 'Request failed';

    axiosMock.onGet('/api/error-endpoint').reply(500, errorMessage);

    try {
      await axiosInstance.get('/api/error-endpoint');
    } catch (error) {
      expect(error).toBe(errorMessage);
    }
  });
});
