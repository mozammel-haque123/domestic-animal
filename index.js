// console.log('hello')

// let objetString = ["Dog", "Cat", "Rabbit",]

const outLoding = ()=>{
    const hiddenLoding = document.getElementById('hidden-loding')
    hiddenLoding.classList.remove('hidden')
    document.getElementById('said-Clic-shodata').classList.add('hidden')
    const animalsData = document.getElementById('animals-Data')
    animalsData.classList.add('hidden');
}

const inLoding = ()=>{
    const hiddenLoding = document.getElementById('hidden-loding')
    hiddenLoding.classList.add('hidden')
    document.getElementById('said-Clic-shodata').classList.remove('hidden')
    const animalsData = document.getElementById('animals-Data')
    animalsData.classList.remove('hidden');
}


const animalsLodingData = ()=>{
    inLoding()
    animalsData()
    console.log('hello')
}

// button click active class add and remove
const removeClass = () => {
    const elements = document.getElementsByClassName(`cata-id-data`);
    for (let element of elements) {
      element.classList.remove('active');
    }
  };


  function scrollToSection() {
    document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
  }
// -------------------------------------------------------



// animals button data

const animalsButtonData = () =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    .then(res => res.json())
    .then(data => animalsHtmlData(data.categories))
    .catch((e) => console.log(e))
}

// animals Data
const animalsData = () =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then(res => res.json())
    .then(data =>{
        allPets = data.pets;
        animalsDataHtml(data.pets);
    } )
    .catch((e) => console.log(e))
}

// id Animals Ditails
const idAnimalsDitails = (id,ids) =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then(res => res.json())
    .then(data =>{
        outLoding()
        removeClass()
        const active = document.getElementById(`btn-${ids}`)
        active.classList.add('active')
        setTimeout(() =>{
              animalsDataHtml(data.data)
              inLoding()
        },3000)
        
    } )
    .catch((e) => console.log(e))
}

//   show Pet Details
const showPetDetails = (ids)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${ids}`)
    .then(res => res.json())
   .then(data =>showPetModalHtml(data.petData))
       .catch((e) => console.log(e))
   }

// -----------------------------------------API-------------------------------------

// fave Icons btn
const faveIcons = (fv) => {
    const saidClicShodata = document.getElementById('said-Clic-shodata');
    const creatDiv = document.createElement('div');
    creatDiv.innerHTML = `
      <img class="w-full h-[100px] object-cover rounded-lg" src="${fv}">
    `;
    saidClicShodata.append(creatDiv);
  }

//   adopt Btn
const adoptBtn = (id) => {
    console.log(id);
  
    // Show modal
    my_modal_2.showModal();
  
    // Get the button to hide it later
    const hid = document.getElementById(`btn-${id}`);
  
    // Set countdown starting value
    let count = 3;
  
    // Get the countdown span
    const countdownSpan = document.getElementById("countdownSpan");
  
    // Initialize countdown display
    countdownSpan.style.setProperty("--value", count);
    countdownSpan.setAttribute("aria-label", count);
    countdownSpan.textContent = count;
  
    // Start countdown
    const interval = setInterval(() => {
      count--;
  
      if (count >= 0) {
        countdownSpan.style.setProperty("--value", count);
        countdownSpan.setAttribute("aria-label", count);
        countdownSpan.textContent = count;
      } else {
        clearInterval(interval);
  
        //  Close the modal automatically
        my_modal_2.close();
  
        //  Hide the adopt button
        if (hid) {
          hid.classList.add("hidden");
        }
      }
    }, 1000);
  };
  

// show Pet Details html modal 

const showPetModalHtml = (dms)=>{
    console.log(dms)
 const showPetDetails = document.getElementById('show-Pet-Details')
    showPetDetails.innerHTML = `
    <img class='w-full rounded-lg' src="${dms?.image || 'N/M'}">
    <p class="text-xl font-bold my-3">${dms?.pet_name || 'N/N'}</p>
    <div class="flex gap-16">
    <div>
      <p class="text-gray-600"><i class="fa-solid fa-vector-square mx-1"></i>Breed: ${dms?.breed || 'N/B'}</p>
      <p class="text-gray-600"><i class="fa-solid fa-mars-stroke-up mx-1"></i>Gender: ${dms?.gender || 'N/G'}</p>
      <p class="text-gray-600"><i class="fa-solid fa-mars-stroke-up mx-1"></i>Vaccinated status: ${dms?.gender || 'N/S'}</p>
    </div>
    <div>
      <p class="text-gray-600"><i class="fa-solid fa-vector-square mx-1"></i>Breed: ${dms?.date_of_birth || 'N/B'}</p>
         <p class="text-gray-600"><i class="fa-solid fa-hand-holding-dollar"></i>Price: $${dms?.price || 'N/P'}</p>
    </div>
    </div>

    <div class="my-4">
    <hr>
    </div>

    <p class="font-bold text-xl">Details Information</p>
    <p class="my-4 text-gray-600">${dms?.pet_details || 'N/D'}</p>
    `
    my_modal_5.showModal()
}

// animals Data Html
const animalsDataHtml = (ad) =>{
// console.log(ad)
const animalsData = document.getElementById('animals-Data')
animalsData.innerHTML = ''
if(ad.length === 0 || ad === ''){
    animalsData.classList.remove('grid', 'gap-2','sm:grid-cols-1','md:grid-cols-2','lg:grid-cols-3');
    animalsData.classList.add('flex','flex-col','justify-center','items-center','bg-gray-100');
    animalsData.innerHTML = `
    <img class="mt-20" src="assets/error.webp">
    <p class="font-bold text-3xl my-6">No Information Available</p>
    <p class="text-center text-gray-600 mb-20">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
    `
   }
   else{
    animalsData.classList.remove('flex','flex-col','justify-center','items-center');
    animalsData.classList.add('grid','gap-2','sm:grid-cols-1','md:grid-cols-2','lg:grid-cols-3');
   }
// -----------------------------------------------------------------


ad.forEach((a) =>{
const creatDiv = document.createElement('div')
// console.log(a)
creatDiv.classList.add('card','bg-base-100','shadow-[0_3px_10px_rgb(0,0,0,0.2)]','p-4','rounded-md')
creatDiv.innerHTML = `       
    <figure>
        <img src="${a?.image || 'N/M'}" alt="${a.pet_name}" class="w-full h-48 object-cover rounded-md">
    </figure>
    <div class="mt-4">
        <h2 class="card-title">${a?.pet_name || 'N/T'}</h2>
        <p><i class="fa-solid fa-vector-square mx-1"></i>Breed: ${a?.breed || 'N/B'}</p>
        <p><i class="fa-regular fa-calendar mx-1"></i>Birth: ${a?.date_of_birth || 'N/B'}</p>
        <p><i class="fa-solid fa-mars-stroke-up mx-1"></i>Gender: ${a?.gender || 'N/G'}</p>
        <p><i class="fa-solid fa-hand-holding-dollar"></i>Price: $${a?.price || 'N/P'}</p>
        <div class="my-4"><hr></div>
        <div class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center items-center">
            <button class="btn" onclick="faveIcons('${a?.image}')"><i class="fa-regular fa-thumbs-up"></i></button>
            <button class="btn text-emerald-600 btn-${a.petId}" onclick="adoptBtn('${a.petId}')">Adopt</button>
            <button class="btn text-emerald-600" onclick="showPetDetails('${a.petId}')">Details</button>
        </div>
    </div>
`;
animalsData.append(creatDiv)
})
}




//  button html
const animalsHtmlData = (bto) => {
// console.log(bto)
const buTton = document.getElementById('button-data');
bto.forEach((b) => {
    const creatBtn = document.createElement('div');
    creatBtn.innerHTML = `
   <div class="btn h-20 w-44 font-bold rounded-lg cata-id-data" id="btn-${b.id}" onclick="idAnimalsDitails('${b.category}', '${b.id}')"> <img src="${b.category_icon}"></img> ${b.category}</div>
   `
buTton.append(creatBtn)
});
}

// Sort by Price, Descending Order
const sortBy = () =>{
    const creatBtn = document.getElementById('creat-btn')
    creatBtn.innerHTML = `
    <p class="font-bold">Best Deal For you</p>
    <button class="btn btn-accent"onclick="caalTime()">Sort by Price</button>
    `
    }
    sortBy()

// Sort by Price, Descending Order
let allPets = [];
const caalTime = () =>{
    outLoding()
    removeClass()
    setTimeout(() =>{
        inLoding()

    const sorted = [...allPets].sort((a, b) => b.price - a.price);
    animalsDataHtml(sorted);
    },3000)
}
caalTime()

// set Taime function
const animalsTime = () =>{
    outLoding()
    setTimeout(() =>{
        animalsLodingData()
    },3000)
}

// apatoto golobal kora hoyeche pore delet kora hobe
// animalsLodingData()
// button function
animalsButtonData()
// tame function
animalsTime()