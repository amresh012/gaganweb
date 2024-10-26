import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Select, Space } from 'antd';
let index = 0;

const QuoteForm = () => {
  const [selected, setSelected] = useState(false);
  const handleSelected = (item) => {
    setSelected(item);
  };
  return (
    <>
      <div className="">
        <div className="prouct-category flex flex-col m-4 gap-2 ">
          <h1 className="">Product Category:</h1>
          <div className="flex gap-2 items-center">
            {["Herbal", "Cosmetics", "FMCG"].map((item, i) => (
              <div
                onClick={() => handleSelected(item)}
                className={
                  selected === item
                    ? "bg-green-800 text-white w-full rounded-sm text-center cursor-pointer  duration-300 shadow-sm"
                    : "border w-full rounded-sm text-center border-green-800 cursor-pointer"
                }
                key={i}
              >
                <li className="list-none">{item}</li>
              </div>
            ))}
          </div>
        </div>
        <div className="form-container overflow-y-auto">
          <form className="p-4 space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Your Email</label>
              <input
                type="email"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="contact">Your Contact</label>
              <input
                type="number"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your contact"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="company name">Company Name</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your company name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="product name">Product Name</label>
              {/* <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              /> */}
              <CustomDropdown/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Minimum Quantity (Pcs)</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="textarea flex flex-col">
              <label htmlFor="textarea">Yor Message</label>
                <textarea placeholder="enter your query" rows="4" className="border rounded-sm border-green-800"></textarea>
            </div>
           <button type="submit" className="px-6 py-2 bg-green-800 hover:bg-green-700 duration-300 text-white">
            Submit Form
           </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuoteForm;





export const CustomDropdown = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  return (
    <Select
      style={{
        width: 290,
      }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: '0px 0',
            }}
          />
          <Space
            style={{
              padding: '0 8px 4px',
            }}
          >
            <Input
              placeholder="Please enter item"
              ref={inputRef}
              value={name}
              onChange={onNameChange}
              onKeyDown={(e) => e.stopPropagation()}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
          </Space>
        </>
      )}
      options={items.map((item) => ({
        label: item,
        value: item,
      }))}
    />
  );
};