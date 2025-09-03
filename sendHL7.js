// sendHL7.js
// Simple Node.js script to send an HL7 message over MLLP

const net = require('net');

// MLLP framing characters
const VT = String.fromCharCode(0x0b); // <VT>
const FS = String.fromCharCode(0x1c); // <FS>
const CR = String.fromCharCode(0x0d); // <CR>

// Sample HL7 message (replace with your own if needed)
const hl7Message = [
  'MSH|^~\&|HIS|RLC|||20250902||ADT^A05|16|P|2.4|||AL|NE|||||| EVN|A05||||||| PID|1||AH1234567^^^^MR^RLC~123 456 7891^^^NHS^NH^RLC~^^^^PI^RLC~||Surname^First Name^^^^^L||20250101|F|||TigersHospital^^Auchtenlectalbert^^5AB 2JF^^P||07777777777~|||||V00007605635|123 456 7891|||||||||||||||||||| PD1|||^^N82053^AINTREE PARK GROUP PRACTICE|G8503501^HUBBERT CM^^| NK1|1|Test^Mum|M^|ALDER HEY^^LIVERPOOL^MERSEYSIDE^L14 5AB|07777777777||| PV1|1|P|1.2 ENT||F||GKHONG^Khong^^Grace||ENTFELLOW3|ENT||||||||CLI||||ENTFELLOW3|||||||||||||||||RLC||PRE||||||||||||',
].join('\r');

// MLLP server config
const HOST = '127.0.0.1';
const PORT = 2575; // Change if your server uses a different port

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log(`Connected to MLLP server at ${HOST}:${PORT}`);
  const mllpMessage = VT + hl7Message + FS + CR;
  client.write(mllpMessage);
  console.log('HL7 message sent!');
});

client.on('data', (data) => {
  console.log('Received ACK from server:', data.toString());
  client.destroy(); // Close connection after ACK
});

client.on('close', () => {
  console.log('Connection closed');
});

client.on('error', (err) => {
  console.error('Error:', err.message);
});
