import axios from "axios";
import { Bounce, toast } from "react-toastify";

const toaster = (errMsg) => {
    toast.error(errMsg, {
        position: "top-right",
        autoClose: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
    });
}

const validateField = (field, message) => {
    if (field == null || field === '') {
        toaster(message);
        return false;
    }
    return true;
};

const validateProductDetails = (details, index) => {
    const validationMessages = [
        { field: details.productSize, message: `Select product Size at row ${index + 1}` },
        { field: details.productQuantity, message: `Select product quantity at row ${index + 1}` },
        { field: details.productPrice, message: `Select product price at row ${index + 1}` },
        { field: details.productDiscount, message: `Select product discount at row ${index + 1}` },
        { field: details.productImages.length === 0 ? null : [{}], message: `Select at least one product image at row ${index + 1}` }
    ];

    return validationMessages.every(({ field, message }) => validateField(field, message));
};

export const handleFormSubmit = (product) => {
    const validations = [
        { field: product.productName, message: 'Product name must not be empty' },
        { field: product.productDescription, message: 'Enter product description' },
        { field: product.productCategory, message: 'Select a category' },
        { field: product.productTags, message: 'Add product tags' }
    ];

    const isValidProduct = validations.every(({ field, message }) => validateField(field, message));

    if (isValidProduct) {
        const areDetailsValid = product.productDetails.every((details, index) => validateProductDetails(details, index));
        if (areDetailsValid) {
            postData(product);
        }
    }

};


const postData = async (data) => {
    try {
      const response = await axios.post('https://api.example.com/post-endpoint', data);
      console.log('Response:', response.data);
    } catch (error) {
        toaster('Something Went Wrong!!');
      console.error('Error:', error.response.data);
    }
  };
