const properties = {
  name: "TI-86",
  status: "experimental",

  // This is a filter for navigator.usb.requestDevice
  // See http://www.linux-usb.org/usb.ids for IDs
  identifier: {
    vendorId: 0x0451,
    productId: 0xE001
  },

  // This is the matcher used to identify this specific device
  matcher: {
    vendorId: 0x0451,
    productId: 0xE001,
    productName: "TI-86"
  },

  // These are the file types we can send this particular device
  // I am going to leave this for now
  compatibleFiles: [
    'TI-83',
    'TI-84 Plus'
  ]
};

const Calculator = require('../../dusb/ti84series'); // need to figure this out later
module.exports = {
  ...properties,
  connect: device => new Calculator({ device, properties }).connect()
};

