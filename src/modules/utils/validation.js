import axios from "axios";
import { Bounce, toast } from "react-toastify";

const toasterErr = (errMsg) => {
    toast.error(errMsg, {
        position: "top-right",
        autoClose: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
    });
}
const toasterSuccess = (msg) => {
    toast.success(msg, {
        position: "top-right",
        autoClose: true,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
    });
}

const validateField = (field, message) => {
    if (!field || (Array.isArray(field) && field.length === 0)) {
        toasterErr(message);
        return false;
    }
    return true;
};

export const handleFormSubmit = (product) => {
    let validations = [
        { field: product.productName, message: 'Product title must not be empty' },
        { field: product.productDescription, message: 'Enter product description' },
        { field: product.productCategory, message: 'Select a category' },
        { field: product.productTags, message: 'Add product tags' },
        { field: product.productColor, message: 'Select at least one color' },
        { field: product.productFabric, message: 'Select at least one fabric' },
        { field: product.productPattern, message: 'Select at least one pattern' },
        { field: product.productOccasion, message: 'Select at least one occasion' },
        { field: product.productBlouse, message: 'Enter blouse details' },
        { field: product.productWashCare, message: 'Select wash care instructions' },
        { field: product.productSizeQuantity, message: 'Enter size and quantity' },
        { field: product.productMrp, message: 'Enter MRP' },
        { field: product.productSP, message: 'Enter selling price' },
        { field: product.productShippingDays, message: 'Enter shipping days' },
        { field: product.productCoupon, message: 'Enter coupon details' },
        { field: product.productSale, message: 'Enter sale details' },
        { field: product.productImages, message: 'Upload at least one image' }
    ];

    if (product.productSizeQuantity?.length !== 0) {
        if (product.productSizeQuantity?.every(({ size, quantity }) => quantity === 0))
            validations.push({ field: false, message: 'Atleast select 1 size and quantity' });
    }
    return validations.every(({ field, message }) => validateField(field, message));

};


export const postData = async (data) => {
    try {
        console.log(data)
        const response = await axios.post('http://localhost:8080/api/v1/product', data);
        console.log('Response:', response.data);
        toasterSuccess(response.data.data);
    } catch (error) {
        toasterErr('Something Went Wrong!!');
        console.error('Error:', error.response.data);
    }
};

export const updateData = async (data) => {
    try {
        console.log(data)
        const response = await axios.put('http://localhost:8080/api/v1/product', data);
        console.log('Response:', response);
        toasterSuccess(response.data.data);
    } catch (error) {
        toasterErr('Something Went Wrong!!');
        console.error('Error:', error.response.data);
    }
};

export const deleteData = async (data) => {
    try {
        console.log(data)
        const response = await axios.delete('http://localhost:8080/api/v1/product', {
            params: { id: data }
        }
        );
        console.log('Response:', response);
        toasterSuccess(response.data.data);
    } catch (error) {
        toasterErr('Something Went Wrong!!');
        console.error('Error:', error.response.data);
    }
};
