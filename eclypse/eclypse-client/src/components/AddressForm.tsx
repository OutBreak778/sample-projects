
import { useState } from 'react';

const AddressForm = () => {
  const [isSelected, setIsSelected] = useState(true);
  
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm pb-12">
      <div className="flex items-center mb-6">
        <div 
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${isSelected ? 'border-red-500' : 'border-gray-300'}`}
          onClick={() => setIsSelected(!isSelected)}
        >
          {isSelected && <div className="w-3 h-3 bg-red-500 rounded-full"></div>}
        </div>
        <span className="text-xl font-medium">Add New Address</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-3">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="streetAddress" className="block text-sm font-medium mb-1">Street Address</label>
        <input 
          type="text" 
          id="streetAddress" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label htmlFor="aptNumber" className="block text-sm font-medium mb-1">Apt Number</label>
          <input 
            type="text" 
            id="aptNumber" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        
        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
          <input 
            type="text" 
            id="state" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        
        <div>
          <label htmlFor="zip" className="block text-sm font-medium mb-1">Zip</label>
          <input 
            type="text" 
            id="zip" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <button className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none">
          cancel
        </button>
        <button className="px-4 py-3 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none">
          Save This Address
        </button>
      </div>
    </div>
  );
};

export default AddressForm;