const OrderSummary = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="mb-4">
        <p className="text-[14px]">
          By placing your order, you agree to our company <span className="font-medium">Privacy policy</span> and <span className="font-medium">Conditions of use</span>.
        </p>
      </div>
      
      <div className="border-t border-gray-300 mb-3 mt-3"></div>
      
      <h2 className="text-[18px] font-medium mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-[14px]">
          <span>Items - Silhouette No. 1 - Vermilion</span>
          <span className="font-medium">7,999</span>
        </div>
        
        <div className="flex justify-between text-[14px]">
          <span>Shipping and handling:</span>
          <span className="font-medium">200</span>
        </div>
        
        <div className="flex justify-between text-[14px]">
          <span>Before tax:</span>
          <span className="font-medium">6,599</span>
        </div>
        
        <div className="flex justify-between text-[14px]">
          <span>Tax Collected:</span>
          <span className="font-medium">1,400</span>
        </div>
      </div>
      
      <div className="border-t border-gray-300 pt-4 mb-4"></div>
      
      <div className="flex justify-between mb-6">
        <span className="text-[16px] font-medium">Order Total:</span>
        <span className="text-[16px] font-medium">8,199</span>
      </div>
      
      <button className="w-full px-4 py-3 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;