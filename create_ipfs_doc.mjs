
import fs from 'fs'
import { Web3Storage, File } from 'web3.storage'

console.log('Syntax: node create_ipfs_doc.mjs [input_file_path] [web3storage_token]')

const inputFilePath = process.argv[2] || 'chatgpt_sign_pdf_signed_node.pdf'

if(process.argv.length < 4){
    throw new Error("Need to provide a Web3Storage API Token")
}
const token = process.argv[3]
console.log('token:'+token)
console.log('before storage')
const storage = new Web3Storage({ token })

//console.log('read file:', inputFilePath)
let inputFileBytes = fs.readFileSync(inputFilePath)
console.log('after read file sync')
console.log(inputFileBytes)

const cid = await storage.put([new File([inputFileBytes], inputFilePath)])

console.log('Content added with CID:', cid)