import QRCode from "react-qr-code";
import html2pdf from "html2pdf.js";
import remote from "../integrations/supabase";
import React, { useState, useEffect } from "react";
import BlackButton from "../components/interaction/BlackButton";
import { Apple, Award, Ban, Circle, Heart, Hexagon, MessageCircleHeart, Pen, Pentagon, Printer, ShoppingBasket, Square, Star, Triangle, Trophy } from "lucide-react";

const Switch = ({ checked, onChange }) => {
  return (
    <div className="flex items-center gap-2" onClick={onChange}>
      <div className="w-10 h-5 bg-gray-300 rounded-full">
        <div className={`w-5 h-5 bg-white rounded-full ${checked ? 'translate-x-full' : 'translate-x-0'}`}>
          <div className="w-full h-full bg-primary-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};

const PrintYourQrCodeSection = ({ storeCode }) => {
  const [owner, setOwner] = useState({});
  const [store, setStore] = useState({});
  const [backgroundIcon, setBackgroundIcon] = useState(null);
  const [shouldUseBrandColours, setShouldUseBrandColours] = useState(false);

  useEffect(() => {
    remote.store.getByCode({ code: storeCode }).then((store) => {
      setStore(store);

      remote.owner.getById({ id: store.owner_id }).then((owner) => {
        setOwner(owner);
      });
    });

    setTimeout(() => {
      const qrCodeContainer = document.getElementById('qrCodeContainer');
      const qrCodeCanvas = document.getElementById('qrCodeCanvas');

      // Take all the HTML elements in the qrCodeContainer and draw them onto the qrCodeCanvas
      const ctx = qrCodeCanvas.getContext('2d');
      qrCodeContainer.childNodes.forEach((child) => {
        ctx.drawImage(child, 0, 0, 256, 256);
      });
    }, 1500);
  }, [storeCode]);

  const handlePrintQrCode = () => {
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    html2pdf(qrCodeContainer);
  }

  return (
    <section id="print-your-qr-code">
      <div className="py-20 flex flex-col items-center">
        <h2 className="text-center">Print Your QR Code</h2>

        {/* Slider type on/off switch so User can chose whether or not to use their brand colours for the QR code */}
        <div className="mt-2 flex justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">Use brand colours</span>

            <Switch checked={shouldUseBrandColours} onChange={() => setShouldUseBrandColours(!shouldUseBrandColours)} />
          </div>
        </div>

        <h3 className="mt-4 text-lg font-semibold">Choose an icon for the background</h3>
        {/* Display a 7 column grid of Icons that the User can chose from to use as the background of their QR code */}
        <div className="mt-4 max-w-7xl grid grid-cols-7 gap-4">
          {/* Icons */}
          <Ban size={32} className="cursor-pointer text-red-500" onClick={() => setBackgroundIcon(null)} />
          <Award size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Award size={32} />)} />
          <Star size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Star size={32} />)} />
          <Trophy size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Trophy size={32} />)} />
          <Circle size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Circle size={32} />)} />
          <Pentagon size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Pentagon size={32} />)} />
          <Hexagon size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Hexagon size={32} />)} />
          <Triangle size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Triangle size={32} />)} />
          <Square size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Square size={32} />)} />
          <Pen size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Pen size={32} />)} />
          <MessageCircleHeart size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<MessageCircleHeart size={32} />)} />
          <Heart size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Heart size={32} />)} />
          <ShoppingBasket size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<ShoppingBasket size={32} />)} />
          <Apple size={32} className="cursor-pointer hover:text-primary-600" onClick={() => setBackgroundIcon(<Apple size={32} />)} />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-center">Preview</h3>

          <div className="mt-2">
            <div id="qrCodeContainer" className={`w-96 h-96 ${shouldUseBrandColours ? '' : 'bg-primary-600'} rounded-md`} style={{ backgroundColor: shouldUseBrandColours ? owner.brand_colour_1 : '' }}>
              <div className="w-full h-full flex items-center justify-center p-18 relative">
                {/* <div className="text-2xl font-bold">QR Code</div> */}

                {/* Background icon */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  {backgroundIcon && (
                    // {Grid of 5 columns and 5 rows with the icon 25 times}
                    <div className="w-full h-full grid grid-cols-9 grid-rows-9 opacity-10">
                      {Array.from({ length: (9*9) }).map((_, index) => (
                        <div key={index} className="flex items-center justify-center">
                          {React.cloneElement(backgroundIcon, { size: 24, className: `${backgroundIcon.props.className} text-white` })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <QRCode
                  value={`${import.meta.env.VITE_APP_URL}/${storeCode}`}
                  size={256}
                  level="L"
                  className="mx-auto z-10"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Display a printer icon and a button to print the QR code */}
        <div className="mt-4 flex items-center gap-2">
          <BlackButton onClick={handlePrintQrCode}>
            <div className="flex items-center gap-2 text-2xl">
              Print <Printer size={32} className="inline-block" />
            </div>
          </BlackButton>
        </div>
      </div>
    </section>
  );
};

export default PrintYourQrCodeSection;