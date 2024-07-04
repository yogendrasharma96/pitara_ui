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
            return true;
        }
        return false;
    }
    toaster('Something Went Wrong!!');
    return false;

};


const postData = async (data) => {
    try {
        console.log(data)
      const response = await axios.post('http://localhost:8080/api/v1/product', data);
      console.log('Response:', response.data);
    } catch (error) {
        
      console.error('Error:', error.response.data);
    }
  };
