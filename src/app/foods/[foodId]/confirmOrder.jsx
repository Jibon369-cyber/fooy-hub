'use client'

import React, { useState } from 'react';

const ConfirmOrder = () => {

    const [ordered, setOrdered] = useState(false)

    const handleOrder = () => {
        setOrdered(true);
    }

    return (
      <div>
        <button
          onClick={handleOrder}
          className='bg-green-500 hover:bg-green-600 font-bold px-4 py-2 rounded-md cursor-pointer'>
          Confirm Order
        </button>

        {ordered && <p>Order Confirmed! 🎉</p>}
      </div>
    );
};

export default ConfirmOrder;