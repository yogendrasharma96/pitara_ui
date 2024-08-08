import axios from "axios";

export const signUpApi = async (data) => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/auth/signup', data);
    console.log(response);
    if (response.data?.erros?.hasError)
      return response.data.errors?.errorDetail?.errorMsg;
    else
      return 'Success';
  } catch (error) {
    console.error('Error:', error?.response?.data);
    if (error?.response?.data?.errors?.hasError) {
      return error.response.data.errors?.errorDetail?.errorMsg;
    }
    return 'Something Went Wrong';
  }
};

export const confirmSignUpApi = async ({ username, confirmationCode }) => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/auth/confirm-signup', {
      params: {
        username,
        confirmationCode,
      }
    });
    console.log(response);
    if (response.data?.erros?.hasError)
      return response.data.errors?.errorDetail?.errorMsg;
    else
      return 'Success';
  } catch (error) {
    console.error('Error:', error.response.data);
    if (error.response.data?.errors?.hasError) {
      return error.response.data.errors?.errorDetail?.errorMsg;
    }
    return 'Something Went Wrong';
  }
};

export const resendConfirmationApi = async ({username}) => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/auth/resend-confirmation-code', {
      params: {
        username
      }});
    if (response.data?.errors?.hasError) {
      return response.data.errors?.errorDetail?.errorMsg;
    } else {
      return 'Confirmation email sent successfully';
    }
  } catch (error) {
    if (error.response?.data?.errors?.hasError) {
      return error.response.data.errors?.errorDetail?.errorMsg;
    }
    return 'Something Went Wrong';
  }
};

export const loginApi = async (data) => {
  try {
    console.log(data);
    const response = await axios.post('http://localhost:8080/api/v1/auth/login', data );
    if (response.data?.errors?.hasError) {
      return { success: false, message: response.data.errors?.errorDetail?.errorMsg };
    } else {
      console.log(response.data.data.authenticationResult);
      const { accessToken, idToken, refreshToken,expiresIn,tokenType } = response.data.data?.authenticationResult;
      return {
        success: true,
        tokens: {
          accessToken,
          idToken,
          refreshToken,
          expiresIn,
          tokenType
        },
      };
    }
  } catch (error) {
    if (error.response?.data?.errors?.hasError) {
      return { success: false, message: error.response.data.errors?.errorDetail?.errorMsg };
    }
    return { success: false, message: 'Something Went Wrong' };
  }
};

export const getProductApi = async (data) => {
  try {
    console.log(data);
    const response = await axios.post('http://localhost:8080/api/v1/product/list', data );
    if (response.data?.errors?.hasError) {
      return { success: false, message: response.data.errors?.errorDetail?.errorMsg };
    } else {
      return {
        success: true,
        message: response.data.data?.content
      };
    }
  } catch (error) {
    if (error.response?.data?.errors?.hasError) {
      return { success: false, message: error.response.data.errors?.errorDetail?.errorMsg };
    }
    return { success: false, message: 'Something Went Wrong' };
  }
};

export const getProductConfigApi = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/product/details');
    if (response.data?.errors?.hasError) {
      return { success: false, message: response.data.errors?.errorDetail?.errorMsg };
    } else {
      return {
        success: true,
        message: response.data?.data
      };
    }
  } catch (error) {
    if (error.response?.data?.errors?.hasError) {
      return { success: false, message: error.response.data.errors?.errorDetail?.errorMsg };
    }
    return { success: false, message: 'Something Went Wrong' };
  }
};