import * as Yup from 'yup';

export  const AddProductSchema = Yup.object().shape({
    img: Yup.string()
      .min(2, 'Too Short!')
      .max(50000, 'Too Long!')
      .required('Required'),
      marca: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      price: Yup.number()
      .min(2, 'Too Short!')
      .max(200, 'Too Long!')
      .required('Required'),
    
  });
  