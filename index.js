import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccount from './serviceAccount.js';

initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore()

// create customer collection and add customer

// db.collection('customers').add({
//     firstName: 'Ainis',
//     lastName: 'Taranda',
//     email: 'ainis@gmail.com',
//     address: '123 baracasa way'
// })
//     .then(doc => console.log('New customer:', doc.id))
//     .catch(console.error)


// create pets collection and add pets:

// db.collection('pets').add({
//     type: 'cat',
//     breed: 'siamese'
// })
//     .then(doc => console.log('New pet:', doc.id))
//     .catch(console.error)

// create products collection and add products:

// db.collection('products').add({
//     product: 'bone',
//     price: '$2.00'
// })
//     .then(doc => console.log('New product:', doc.id))
//     .catch(console.error)


//read specific item in collection

// db.collection('customers')
//     .doc('sLMsCGiCyUnPDf98mlhr')
//     .get()
//     .then(doc => console.log(doc.data()))
//     .catch(console.error)

//read whole collection (products)
    // db.collection('products')
    // .get()
    // .then(collection => [
    //     collection.docs.forEach(doc => {
    //         console.log(doc.data())
    //     })
    // ])
    // .catch(console.error)

//read whole collection (customers)

    // db.collection('customers')
    // .get()
    // .then(collection => [
    //     collection.docs.forEach(doc => {
    //         console.log(doc.data())
    //     })
    // ])
    // .catch(console.error)

//read whole collection (pets)

// db.collection('pets')
// .get()
// .then(collection => [
//     collection.docs.forEach(doc => {
//         console.log(doc.data())
//     })
// ])
// .catch(console.error)




// update product

db.collection('products')
.doc('Us130VYNzoHldPjRxrdG')
.update({product: 'ball', price: '$2.00'})
// .then(collection => console.log(doc.data()))
.then(getProduct)
.catch(console.error)

function getProduct(){
    db.collection('products').doc('Us130VYNzoHldPjRxrdG').get()
    .then(doc => console.log(doc.data()))
    .catch(console.error)
    }





