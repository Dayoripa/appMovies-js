const template = document.querySelector('#template').content;
const cardContainer = document.querySelector('.card__container');


 document.addEventListener('DOMContentLoaded', () => {
    obtenerDatos();
});

const obtenerDatos = async() =>{
    const key = '191454b6ac4fea45a10f288735666400';
    const url = 'https://api.themoviedb.org/3';

     try{
        const res = await fetch(`${url}/discover/movie?api_key=${key}`);
        const data = await res.json();
        mostrarHTML(data);
    }catch{
        console.log(error)
    }
};

const mostrarHTML = ({results} = movie) =>{
    const fragment = document.createDocumentFragment();

    results.forEach(element => {
        const {poster_path, title,  release_date, overview } = element;
        const clone = template.cloneNode(true);
        const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
        clone.querySelector('.image').setAttribute('src', image);
        clone.querySelector('.card__title').textContent = title;
        clone.querySelector('.card__fecha').textContent = release_date;
        clone.querySelector('.card__description').textContent = overview;
        fragment.appendChild(clone);
        cardContainer.appendChild(fragment);
    });
   
 }

 const tarjeta = document.querySelector('.main')

 tarjeta.addEventListener('click', e => agregarClass(e));

 const agregarClass = (e) =>{
    if(e.target.classList.contains('image')){
       const imgSelect = e.target.parentElement.parentElement.parentElement;
       leerDatos(imgSelect);
    }
    
 }

 function leerDatos(dato){
    dato.querySelector('.card__inner').classList.add('is-flipped')
    setTimeout(() =>{
        dato.querySelector('.card__inner').classList.remove('is-flipped')
    }, 3000);
 }