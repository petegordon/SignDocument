const nodeSignPDF = require('node-signpdf')
const fs = require('fs');

let inputPDF = 'chatgpt_sign_pdf.pdf'
let certP12 = 'certificate.p12'
let password = "1234"
let outputPDF = 'chatgpt_sign_pdf_signed_node.pdf'

pdfBuffer = fs.readFileSync(inputPDF)
pdfBuffer = nodeSignPDF.plainAddPlaceholder({
    pdfBuffer,
    reason: 'I have reviewed it.',
    signatureLength: 1612,
});

const signedPdf = nodeSignPDF.default.sign(
    pdfBuffer,
    fs.readFileSync(certP12),
    {passphrase:password}
  );

fs.writeFileSync(outputPDF, signedPdf)
