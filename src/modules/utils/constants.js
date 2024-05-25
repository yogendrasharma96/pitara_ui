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

  export const size= [
    { value: 'Extra Large', label: 'XL'},
    { value: 'blue', label: 'L' },
    { value: 'purple', label: 'S' }
  ]; 

  export const customStyles = {
    option: (provided) => ({
        ...provided,
        textAlign: 'center',
    }),
    singleValue: (provided) => ({
        ...provided,
        textAlign: 'center',
        width: '100%'  // Ensures the text is centered within the select box
    }),
    // menu: (provided) => ({
    //     ...provided,
    //     textAlign: 'center',
    // }),
    // control: (provided) => ({
    //     ...provided,
    //     textAlign: 'center',
    // }),
    placeholder: (provided) => ({
        ...provided,
        textAlign: 'center',
        width: '100%',  // Ensures the placeholder text is centered
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