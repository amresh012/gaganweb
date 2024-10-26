import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import QuoteForm from './QuoteForm';
const App = ({text} ) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={showDrawer}>{text}</button>
      <Drawer title="Quotation Form" onClose={onClose} open={open}>
        <QuoteForm/>
      </Drawer>
    </>
  );
};
export default App;