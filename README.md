# mllp-sender

A simple Node.js app to send HL7 messages over MLLP (Minimal Lower Layer Protocol).

## Features
- Sends a sample HL7 message to a local MLLP server (default: 127.0.0.1:2575)
- Easy to customize the HL7 message and server details

## Usage

1. Install dependencies (if any):
   ```sh
   npm install
   ```
2. Run the sender:
   ```sh
   npm start
   ```

## Configuration
- Edit `sendHL7.js` to change the HL7 message or server address/port.

## License
MIT
