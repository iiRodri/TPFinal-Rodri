import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { validateProduct } from '../../utils/validateProduct';
import { uploadImage } from '../../services/uploadImage';
import { ProductFormUI } from './ProductFormUI'
import { createProduct } from '../../services/productsServices'

import './ProductFormContainer.css';

export const ProductoFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, SetErrors] = useState({});
    const [file, setFile] = useState(null);

    const [product, SetProduct] = useState({
        name: '',
        price: '',
        category: '',
        description: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        SetProduct({...product, [name]: value});
    };

    const handleFileChamge = (e) => {
        const file= e.target.files[0] || null;
        setFile(file);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        SetErrors({});
        setLoading(true)

        const newErrors = validateProduct(product, file);
        if (Object.keys(newErrors).length > 0) {
            SetErrors(newErrors);
            setLoading(false);
            return;
        }

        try{
            const imageurl = await uploadImage(file);

            const productData = {
                ...product,
                price: Number(product.price),
                image: imageurl,
            };

            const id = await createProduct(productData)

            SetProduct({ name: '', price: '', category: '', description: '' });
            setFile(null);
            navigate(`/success/${id}`, { replace: true });
        } catch (error) {
            SetErrors({ general: error.message});
        } finally {
            setLoading(false);
        }

    };

    return (
        <ProductFormUI
        
            product= {product}
            errors = {errors}
            loading = {loading}
            onChange= {handleChange}
            onFileChange = {handleFileChamge}
            onSubmit = {handleSubmit}
        
        />
        
    )


};