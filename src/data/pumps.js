const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item); // Ensure the correct path adjustment
    });
    return images;
  };

  // Import images from the specified folder (relative to this file)
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  const table = importAll(require.context('../images/read', false, /\.(png|jpe?g|svg)$/));
export const pumps = [
    {
        id: 'v4',
        name: 'Rust free V4- Stainless Steel Pumps',
        price: '₹79,000.00',
        features: [
            'Rust free operation due to Stainless Steel construction',
            'Low power consumption',
            'Higher performance'
        ],
        image: images['v4.png'], // Adjust path if necessary
        rightImage:table['v4table.png'], // Adjust path if necessary
    },

    { id:'v2',
        name: 'Rust free V4- Stainless Steel Pumps',
         price: 'MRP ₹16,250.00',
        features: [
            'Can withstand back pressure without damage',
            'Strong and robust mechanical design',
           'High efficiency with energy saving'
        ],
        image: images['v42.png'], // Adjust path if necessary
        rightImage:table['v42.png'], // Adjust path if necessary
    },
    {
         id:'v3',
         name: 'V3-Oil Filled Motor',  
         price: 'MRP ₹15,975.00',
         features:['Can withstand back pressure without damage',
            'Easy for maintenance',
           'Longer life due to high quality mechanical seal'],
           image:images['v3.png'],
           rightImage:table['v3.png']

    },
    {
        id:'v3.',
        name: 'V3- Water Filled Borewell Submersible Motor',
         price: 'MRP ₹13,800.00', 
         features:['Can withstand back pressure without damage',
            'Easy for maintenance',
           'Longer life due to high quality mechanical seal'],
           image:images['v3.png'],
           rightImage:table['v32.png']
    },
    {
        id:'v4-oil',
        name: 'V4- Oil Filled Motor',
        price: 'MRP ₹12,525.00', 
        features:['Can withstand back pressure without damage',
            'Easy for maintenance',
           'Longer life due to high quality mechanical seal'],
           image:images['v40.png'],
           rightImage:table['v40.png']
    },
    { id:'v6',
    name: 'OW- Water Filled Motor',
     price: 'MRP ₹9,575.00',
     features:['Specially designed thrust bearing ensures highest reliability',
       'High Grade Electrical Stamping CRNGO-M47 for higher efficiency',
        'Motor prefilled with coolant for better cooling OW- Water Filled Motor quantity'],
        image:images['ow.png'],
        rightImage:table['ow.png']
     },
     { id:'v7',
        name: 'OW – Dry Type Openwell Submersible Motor', 
         price: 'MRP ₹15,500.00',
         features:['Specially designed thrust bearing ensures highest reliability',
            'High Grade Electrical Stamping CRNGO-M47 for higher efficiency',
            'Motor prefilled with coolant for better cooling'],
            image:images['OW1.png'],
        rightImage:table['ow1.png']

     }
];