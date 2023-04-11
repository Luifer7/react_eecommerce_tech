

let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date())

const banners = [
    {imagen: 'https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/banner1.jpg?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a', mes: mesActual}, 
    {imagen: 'https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/banner2.jpg?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a', mes: mesActual}, 
    {imagen: 'https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/banner3.jpg?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a', mes: mesActual},
]

export default banners
