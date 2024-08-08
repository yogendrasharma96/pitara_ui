export const colourOptions= [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ]; 

  export const tags= [
    { value: 'ocean'},
    { value: 'blue' },
    { value: 'purple' },
    { value: 'red' }
  ]; 

  export const size= [
    { value: 'Extra Large', label: 'XL'},
    { value: 'Large', label: 'L' },
    { value: 'Small', label: 'S' }
  ]; 

  export const color= [
    { value: 'Blue', label: 'BLUE'},
    { value: 'Green', label: 'GREEN' },
    { value: 'Yellow', label: 'YELLOW' }
  ];

  export const customStyles = {
    option: (provided,state) => ({
        ...provided,
        textAlign: 'center',
        color:state.data.code
    }),
    singleValue: (provided,state) => ({
        ...provided,
        textAlign: 'center',
        width: '100%',
        color:state.data.code
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: state.data.code, // Dynamically set the color for multi-value labels
    }),
    // menu: (provided,state) => ({
    //     ...provided,
    //     textAlign: 'center',
    // }),
    // control: (provided,state) => ({
    //     ...provided,
    //     textAlign: 'center',
    // }),
    placeholder: (provided) => ({
        ...provided,
        width: '100%',
        color : '#9c9a9a'
    }),
};

export const modules = {
  toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ 'align': [] }],
      ['link', 'image']
  ]
};

export const formats = [
  'header', 'font', 'list', 'bullet',
  'bold', 'italic', 'underline',
  'align', 'link', 'image'
];


export const defaultColorPickerClr={
  r: "241",
  g: "112",
  b: "19",
  a: "1",
};

export const defaultProductDetails={
  id: null,
  productSize: null,
  productColor: null,
  productQuantity: null,
  productPrice:null,
  productDiscount:null,
  productImages: null
}