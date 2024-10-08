import React from "react";
import ContactInput from "../../components/Input/ContactInput";
let url = "https://i-probono.com/wp-content/themes/iprobono/img/icon-arrow-right-contact.png"
function Contact() {
  return(
    <>
      <div className="bg-zinc-100 h-screen w-full p-6 ">
          <div className="flex flex-col items-center ">
            <div className="flex  w-full">
              <h1 className="font-bold text-2xl ml-20 mr-96">BE PART OF THE CHANGE</h1>
              <button className="border w-42 border-blue-500 p-4 text-sm bg-white font-bold ml-80">SHARE THIS PAGE</button>
            </div>
          <div className="flex  w-full mt-5">
          <div className="w-96 bg-white border border-blue-500 p-4 mr-10 ml-20">
            <a href="#" className="flex ">
              <img src="https://i-probono.com/wp-content/themes/iprobono/img/icon-arrow-right-contact.png" className="w-2 h-2 mt-3 scale-150"/>
              <div>
                <h1 className="text-2xl text-blue-600 font-bold">Register with us</h1>
                <p className="text-sm">If you are an NGO or social enterprise in need of pro bono legal assistance.</p>
              </div>
            </a>
          </div>
          <div className="w-96 bg-white border border-blue-500 p-4">
            <a href="#" className="flex ">
              <img src="https://i-probono.com/wp-content/themes/iprobono/img/icon-arrow-right-contact.png" className="w-2 h-2 mt-3 scale-150"/>
              <div>
                <h1 className="text-2xl text-blue-600 font-bold">Register with us</h1>
                <p className="text-sm">If you are an NGO or social enterprise in need of pro bono legal assistance.</p>
              </div>
            </a>
          </div>
          </div>
          </div>
          <div className="mt-5">
            <span className="font-bold text-2xl ml-20">Have a question or a message for us? Fill the form below and we'll get back to you:</span>
          </div>
          <div className="flex flex-wrap mt-5">
              <ContactInput title="FIRST NAME"/>
              <ContactInput title="LAST NAME"/>
              <ContactInput title="EMAIL ADDRESS"/>
              <ContactInput title="PHONE NUMBER"/>
              <ContactInput title="SUBJECT"/>
          </div>
      </div>
    </>
  );
}

export default Contact;
