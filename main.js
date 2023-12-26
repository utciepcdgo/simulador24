import './style.css'
import {valueOf} from 'lodash/seq.js';
import {PartySelector} from './modules/PartySelector.js';
import Modal from './components/Modal.js';
// import {v4 as uuidv4} from 'uuid';
import Blocks from './public/data/_blocks.json';
import stickybits from 'stickybits'
import _ from 'lodash';


document.querySelector('#app').innerHTML = `
	<div class="dark:text-white">
		<div class="mx-auto">
            <div class="grid w-full gap-6 md:grid-cols-6 grid-flow-row-dense auto-cols-max">
                <div data-sticky-container class="relative h-full">
                    <label for="parties" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Seleccione un Partido Político  o Coalición</label>
                    <select name="parties" id="parties" class="mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                        <option value="0">Seleccione un Partido Político o Coalición</option>
                    </select>
                    <div class="_e__sticky">
					    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Reglas:</h2>
                        <ul class="max-w-md flex-col space-y-2 text-gray-500 list-inside dark:text-gray-400 top-0 mb-3 sticky">
                            <li class="flex items-start text-justify">
                                <svg class="w-3.5 h-3.5 me-2 mt-2 flex-shrink-0 text-gray-400 _c__one _c__check" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                 </svg>
                                Al menos un bloque deberá ser encabezado por fórmula de mujeres.
                            </li>
                            <li class="flex items-start text-justify">
                                <svg class="w-3.5 h-3.5 me-2 mt-2 flex-shrink-0 text-green-400 _c__two _c__check" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                 </svg>
                                No postular candidaturas mujeres en los dos últimos distritos del tercer bloque.
                            </li>
                            <li class="flex items-start text-justify">
                                <svg class="w-3.5 h-3.5 me-2 mt-2 flex-shrink-0 text-gray-400 _c__30y _c__check" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                 </svg>
                                Fórmula de jóvenes en alguno de los distritos. (30 años cumplidos al día de la elección)
                            </li>
                            <li class="flex items-center text-justify">
                                <svg class="w-3.5 h-3.5 me-2 flex-shrink-0 text-gray-400 _c__indigenous _c__check" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                 </svg>
                                Fórmula de indígenas en el Distrito XV.
                            </li>
                            <li class="flex items-center text-justify">
                                <svg class="w-3.5 h-3.5 me-2 flex-shrink-0 text-gray-400 _c__three _c__check" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                 </svg>
                                Integración paritaria de cada bloque.
                            </li>
                            <li class="flex items-start text-justify">
                                <svg class="w-3.5 h-3.5 me-2 mt-2 flex-shrink-0 text-gray-400 _c__four _c__check" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                 </svg>
                                Fórmula de candidaturas dentro de los primeros tres lugares en las listas de representación proporcional la cual deberá corresponder a personas pertenecientes al G5.
                            </li>
                        </ul>
                        <div class="flex space-x-3 mb-5">
                            <div class="flex-col text-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="flex items-center justify-between mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M10 16v5"/>
                                        <path d="M14 16v5"/>
                                        <path d="M8 16h8l-2 -7h-4z"/>
                                        <path d="M5 11c1.667 -1.333 3.333 -2 5 -2"/>
                                        <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2"/>
                                        <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                                    </svg>
                                    <span class="_e__female_counter">0</span>
                                </div>
                                <span class="font-bold">Mujeres</span>
                            </div>
                            <div class="flex-col text-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="flex items-center justify-between mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M10 16v5"/>
                                        <path d="M14 16v5"/>
                                        <path d="M9 9h6l-1 7h-4z"/>
                                        <path d="M5 11c1.333 -1.333 2.667 -2 4 -2"/>
                                        <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2"/>
                                        <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                                    </svg>
                                    <span class="_e__male_counter">0</span>
                                </div>
                                <span class="font-bold">Hombres</span>
                            </div>
                        </div>
                        <button class="_c__button_check w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                            <span class="w-full flex items-center justify-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <svg class="w-3.5 h-3.5 me-2 flex-shrink-0 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                 </svg>
                                <span>Verificar</span>
                            </span>
                        </button>
                        <div class="opacity-50">
                            <h1 class="text-md font-bold">Consideraciones.</h1>
                            <ol class="list-decimal ml-4 text-sm">
                                <li>La información que el usuario ingrese en el Simulador no se almacena por ningún motivo, tenga a bien guardar su archivo de configuración si así lo desea.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-span-5 flex mx-auto _sim__spacing space-x-5">            
                    <div class="_e__blocks_mr"></div>
                    <div class="_e__blocks_rp">
                    </div>
                </div>
		    </div>
		</div>
	</div>
`

// document.querySelector('div._sim__spacing').prepend("<p class='font-bold bg-amber-50 text-amber-900 p-4 rounded border border-amber-200'>Ya seleccionó uno :D.</p>")

let partySelectorEl = document.querySelector('#parties');
stickybits("_e__sticky", {useStickyClasses: true});
const stickybitsInstancetoBeUpdated = stickybits("selector");
PartySelector(partySelectorEl).then(() => undefined)

document.addEventListener('DOMContentLoaded', () => {

    const RAF = requestAnimationFrame;
    const $nav = document.querySelector('._e__sticky');
    const threshold = $nav.getBoundingClientRect();
    let updating = false;

    const handleScroll = () => {
        console.info('updating');
        if (window.scrollY >= threshold.top || window.pageYOffset >= threshold.top)
            $nav.classList.add('nav--fixed'); else

            $nav.classList.remove('nav--fixed');
        updating = false;
    };

    window.onscroll = () => {
        if (updating) return; else {
            updating = true;
            RAF(handleScroll);

        }
    };

    // prependHTML("<p class='font-bold bg-amber-50 text-amber-900 p-4 rounded border border-amber-200'>Seleccione un Partido Político.</p>", document.querySelector('div._sim__spacing'), 'div')
    let _e__blocks = document.querySelector('._e__blocks_mr'),
        _e__blocks_rp = document.querySelector('._e__blocks_rp'),
        _e__female, // All female
        _e__male, // All male
        _e__pride; // All pride

// Blocks.forEach(party => {
// 	party.blocks.forEach(block => {
// 		for (let key in block) {
// 			block[key].districts.forEach(district => {
// 				const uuid = uuidv4(); // Generate a unique UUID
// 				const districtCapital = district.district_capital;
// 				delete district.district_capital; // Remove the district_capital property
// 				district.uuid = uuid; // Assign the unique UUID
// 				district.district_capital = districtCapital; // Reassign the district_capital property
// 			});
// 		}
// 	});
// });
//
// console.log(Blocks);

    partySelectorEl.addEventListener('change', (e) => {

        stickybitsInstancetoBeUpdated.update();
        const _c__districts = {
            header: {
                name: "Distrito",
                decimal: "Decimal",
                roman: "Romano",
            },
            candidates: {
                p: {
                    sex: "Sexo",
                    option: "Ninguna",
                },
                s: {
                    sex: "Sexo",
                    option: "Ninguna",
                },
            }
        }
        let _c__districts_list = [];

        _e__blocks.innerHTML = "";
        _e__blocks_rp.innerHTML = "";
        let _HTML__content = '';

        for (let party of Blocks) {
            if (party.id === e.target.value) {
                console.warn("Party: ", party.party.name)
                for (let block of party.blocks) {
                    for (let key in block) {
                        // Prints the block number
                        _HTML__content += '<div class="bg-gray-200 p-4 my-4 dark:bg-gray-800 dark:text-white rounded-md" data-block="' + key + '" data-blocktype="electoral_block">'
                            + '<h1 class="text-2xl font-sans font-semibold py-3 text-red-400 _c__block_' + key + '_text">Bloque ' + key + '</h1>'
                            + '<div id="accordion-collapse" data-accordion="collapse">'
                        for (const [index, district] of block[key].districts.entries()) {
                            // Prints the district capital inside n block
                            _HTML__content += '<div class="bg-gray-100 dark:bg-gray-900 mb-5 p-5">'
                                + '     <h2 class="mb-2.5">'
                                + '       <button type="button" class="flex items-center justify-between w-full bg-white dark:bg-gray-900 p-3 rounded dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 shadow-2xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border border-gray-200 dark:border-gray-700" data-accordion-target="#accordion-collapse-body-' + district.uuid + '" aria-expanded="true" aria-controls="accordion-collapse-body-' + district.uuid + '">'
                                + '           <span class="font-bold">' + district.district_roman + '. ' + district.district_capital + '</span>'
                                + '       </button>'
                                + '     </h2>'
                                + '        <div class="rounded flex divide-x divide-gray-600">'
                                + '        <div class="mr-2.5">'
                                + '			   <h1 class="font-sans font-semibold py-3">Propietario</h1>'
                                + '            <ul class="grid w-full gap-3 md:grid-cols-3">'
                                + '                <li>'
                                + '                   <input type="radio" id="female-' + district.uuid + '-p" name="' + district.uuid + '-p" data-position="p" data-block="' + key + '" data-level="' + (index + 1) + '" data-list="mr" data-uuid="' + district.uuid + '" value="female" class="hidden peer" required>'
                                + '                   <label for="female-' + district.uuid + '-p" class="transition-all ease-linear inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                + '                        <div class="block">'
                                + '                            <div class="font-semibold">Mujer</div>'
                                + '                        </div>'
                                + '                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                + '                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>'
                                + '                            <path d="M10 16v5"/>'
                                + '                            <path d="M14 16v5"/>'
                                + '                            <path d="M8 16h8l-2 -7h-4z"/>'
                                + '                            <path d="M5 11c1.667 -1.333 3.333 -2 5 -2"/>'
                                + '                            <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2"/>'
                                + '                            <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>'
                                + '                        </svg>'
                                + '                    </label>'
                                + '                </li>'
                                + '                <li>'
                                + '                   <input type="radio" id="genderqueer-' + district.uuid + '-p" name="' + district.uuid + '-p" data-position="p" data-block="' + key + '" data-level="' + (index + 1) + '" data-list="mr" data-uuid="' + district.uuid + '" value="genderqueer" class="hidden peer" required>'
                                + '                   <label for="genderqueer-' + district.uuid + '-p" class="transition-all ease-linear inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                + '                        <div class="block">'
                                + '                            <div class="font-semibold">No Binario</div>'
                                + '                        </div>'
                                + '                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                + '                         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>'
                                + '                         <path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />'
                                + '                         <path d="M12 11v-8" />'
                                + '                         <path d="M14.5 4.5l-5 3" />'
                                + '                         <path d="M9.5 4.5l5 3" />'
                                + '                          </svg>'
                                + '                    </label>'
                                + '                </li>'
                                + '                <li>'
                                + '                   <input type="radio" id="male-' + district.uuid + '-p" name="' + district.uuid + '-p" data-position="p" data-block="' + key + '" data-level="' + (index + 1) + '" data-list="mr" data-uuid="' + district.uuid + '" value="male" class="hidden peer">'
                                + '                   <label for="male-' + district.uuid + '-p" class="transition-all ease-linear inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                + '                        <div class="block">'
                                + '                            <div class="font-semibold">Hombre</div>'
                                + '                        </div>'
                                + '                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                + '                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>'
                                + '                            <path d="M10 16v5"/>'
                                + '                            <path d="M14 16v5"/>'
                                + '                            <path d="M9 9h6l-1 7h-4z"/>'
                                + '                            <path d="M5 11c1.333 -1.333 2.667 -2 4 -2"/>'
                                + '                            <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2"/>'
                                + '                            <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>'
                                + '                        </svg>'
                                + '                    </label>'
                                + '                </li>'
                            if (district.district_decimal !== "15") {
                                _HTML__content += '<li class="flex items-center col-span-2">'
                                    + '                    <div class="flex items-center">'
                                    + '                         <input type="checkbox" data-uuid="' + district.uuid + '" data-position="p" data-block="' + key + '" id="youth-' + district.uuid + '-p" value="youth" class="hidden peer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >'
                                    + '                         <label for="youth-' + district.uuid + '-p" class="transition-all inline-flex overflow-hidden relative items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                    + '						          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                    + '						          	  <path class="cls-2" d="m10,16v5"/>'
                                    + '						          	  <path class="cls-2" d="m14,16v5"/>'
                                    + '						          	  <path class="cls-2" d="m9,9h6l-1,7h-4l-1-7Z"/>'
                                    + '						          	  <path class="cls-2" d="m5,5.08c0,4.01,2.67,3.92,4,3.92"/>'
                                    + '						          	  <path class="cls-2" d="m19,5.08c0,4.92-2.67,3.92-4,3.92"/>'
                                    + '						          	  <path class="cls-2" d="m10,4c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2"/>'
                                    + '						          </svg>'
                                    + '                               <span class="font-semibold">Jóven</span>'
                                    + '                         </label>'
                                    + '                    </div>'
                                    + '                </li>';
                            } else {
                                _HTML__content += '<li class="flex items-center col-span-2">'
                                    + '                    <div class="flex items-center">'
                                    + '                         <input id="indigenous-' + district.uuid + '-p" type="checkbox" data-uuid="' + district.uuid + '" data-position="p" data-block="' + key + '" value="indigenous" class="hidden peer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >'
                                    + '                         <label for="indigenous-' + district.uuid + '-p" class="transition-all inline-flex overflow-hidden relative items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                    + '						        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 21" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                    + '						        	  <path class="cls-1" d="m8,15v5"/>'
                                    + '						        	  <path class="cls-1" d="m12,15v5"/>'
                                    + '						        	  <path class="cls-1" d="m7,8h6l2.8,7H4.2l2.8-7Z"/>'
                                    + '						        	  <path class="cls-1" d="m19,11c-3-3-4.67-3-6-3l-3,7-3-7c-1.33,0-3.5.5-6,3"/>'
                                    + '						        	  <path class="cls-1" d="m8,3c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2"/>'
                                    + '						        </svg>'
                                    + '                             <span>Indígena</span>'
                                    + '                         </label>'
                                    + '                    </div>'
                                    + '                </li>';
                            }
                            _HTML__content += '</ul>'
                                + '        </div>'
                                + '        <div class="pl-2.5">'
                                + '			  <h1 class="font-sans font-semibold py-3">Suplente</h1>'
                                + '			  <ul class="grid w-full gap-3 md:grid-cols-3">'
                                + '                <li>'
                                + '                   <input type="radio" id="female-' + district.uuid + '-s" name="' + district.uuid + '-s" data-position="s" data-block="' + key + '" data-level="' + (index + 1) + '" data-list="mr" data-uuid="' + district.uuid + '" value="female" class="hidden peer" required>'
                                + '                   <label for="female-' + district.uuid + '-s" class="transition-all inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                + '                        <div class="block">'
                                + '                            <div class="font-semibold">Mujer</div>'
                                + '                        </div>'
                                + '                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                + '                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>'
                                + '                            <path d="M10 16v5"/>'
                                + '                            <path d="M14 16v5"/>'
                                + '                            <path d="M8 16h8l-2 -7h-4z"/>'
                                + '                            <path d="M5 11c1.667 -1.333 3.333 -2 5 -2"/>'
                                + '                            <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2"/>'
                                + '                            <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>'
                                + '                        </svg>'
                                + '                    </label>'
                                + '                </li>'
                                + '                <li>'
                                + '                   <input type="radio" id="genderqueer-' + district.uuid + '-s" name="' + district.uuid + '-s" data-position="s" data-block="' + key + '" data-level="' + (index + 1) + '" data-list="mr" data-uuid="' + district.uuid + '" value="genderqueer" class="hidden peer" required>'
                                + '                   <label for="genderqueer-' + district.uuid + '-s" class="transition-all inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                + '                        <div class="block">'
                                + '                            <div class="font-semibold">No Binario</div>'
                                + '                        </div>'
                                + '                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                + '                         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>'
                                + '                         <path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />'
                                + '                         <path d="M12 11v-8" />'
                                + '                         <path d="M14.5 4.5l-5 3" />'
                                + '                         <path d="M9.5 4.5l5 3" />'
                                + '                          </svg>'
                                + '                    </label>'
                                + '                </li>'
                                + '                <li>'
                                + '                   <input type="radio" id="male-' + district.uuid + '-s" name="' + district.uuid + '-s" data-position="s" data-block="' + key + '" data-level="' + (index + 1) + '" data-list="mr" data-uuid="' + district.uuid + '" value="male" class="hidden peer">'
                                + '                   <label for="male-' + district.uuid + '-s" class="transition-all inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                + '                        <div class="block">'
                                + '                            <div class="font-semibold">Hombre</div>'
                                + '                        </div>'
                                + '                       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-man" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                + '                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>'
                                + '                            <path d="M10 16v5"/>'
                                + '                            <path d="M14 16v5"/>'
                                + '                            <path d="M9 9h6l-1 7h-4z"/>'
                                + '                            <path d="M5 11c1.333 -1.333 2.667 -2 4 -2"/>'
                                + '                            <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2"/>'
                                + '                            <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>'
                                + '                        </svg>'
                                + '                    </label>'
                                + '                </li>'
                            if (district.district_decimal !== "15") {
                                _HTML__content += '<li class="flex items-center col-span-2">'
                                    + '                    <div class="flex items-center">'
                                    + '                         <input type="checkbox" data-uuid="' + district.uuid + '" data-position="s" data-block="' + key + '" id="youth-' + district.uuid + '-s" value="youth" class="hidden peer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >'
                                    + '                         <label for="youth-' + district.uuid + '-s" class="transition-all inline-flex overflow-hidden relative items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                    + '						          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                    + '						          	  <path class="cls-2" d="m10,16v5"/>'
                                    + '						          	  <path class="cls-2" d="m14,16v5"/>'
                                    + '						          	  <path class="cls-2" d="m9,9h6l-1,7h-4l-1-7Z"/>'
                                    + '						          	  <path class="cls-2" d="m5,5.08c0,4.01,2.67,3.92,4,3.92"/>'
                                    + '						          	  <path class="cls-2" d="m19,5.08c0,4.92-2.67,3.92-4,3.92"/>'
                                    + '						          	  <path class="cls-2" d="m10,4c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2"/>'
                                    + '						          </svg>'
                                    + '                               <span>Jóven</span>'
                                    + '                         </label>'
                                    + '                    </div>'
                                    + '                </li>';
                            } else {
                                _HTML__content += '<li class="flex items-center col-span-2">'
                                    + '                    <div class="flex items-center">'
                                    + '                         <input id="indigenous-' + district.uuid + '-s" type="checkbox" data-uuid="' + district.uuid + '" data-position="s" data-block="' + key + '" value="indigenous" class="hidden peer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >'
                                    + '                         <label for="indigenous-' + district.uuid + '-s" class="transition-all inline-flex overflow-hidden relative items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">'
                                    + '						        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 21" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
                                    + '						        	  <path class="cls-1" d="m8,15v5"/>'
                                    + '						        	  <path class="cls-1" d="m12,15v5"/>'
                                    + '						        	  <path class="cls-1" d="m7,8h6l2.8,7H4.2l2.8-7Z"/>'
                                    + '						        	  <path class="cls-1" d="m19,11c-3-3-4.67-3-6-3l-3,7-3-7c-1.33,0-3.5.5-6,3"/>'
                                    + '						        	  <path class="cls-1" d="m8,3c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2"/>'
                                    + '						        </svg>'
                                    + '                             <span>Indígena</span>'
                                    + '                         </label>'
                                    + '                    </div>'
                                    + '                </li>';
                            }
                            _HTML__content += '</ul>'
                                + '        </div>'
                                + '    </div>'
                                + '</div>';
                        }
                        _HTML__content += '' +
                            '</div>' +
                            '</div>'
                    }

                }
            }
        }
        let _HTML__content_rp = '';

        _HTML__content_rp += `<div class="bg-gray-200 p-4 my-4 dark:bg-gray-800 dark:text-white rounded-md"><h1 class="font-sans font-semibold text-2xl py-3 my-4">Representación Proporcional</h1>`
        for (let i = 0; i < 5; i++) {
            _HTML__content_rp += `
                <div class="flex-col bg-gray-100 dark:bg-gray-900 mb-5 p-5 w-full">
                    <h1 class="text-lg font-sans font-semibold">Fórmula ` + (i + 1) + `</h1>
                    <div class="flex divide-x divide-gray-600">
                        <div class="p-2 bg-gray-100 dark:bg-gray-900 rounded flex-col space-y-3">
                            <span class="font-bold py-3">Propietario</span>
                            <ul class="grid w-full gap-3 md:grid-cols-3">
                                <li>
                                    <input type="radio" id="female-rp` + i + `-p-rp" name="` + i + `-p-rp" value="female-rp" data-position="p" data-position="p" data-list="rp" data-level="`+ i +`" class="hidden peer"
                                           required>
                                    <label for="female-rp` + i + `-p-rp"
                                           class="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">
                                            <div class="font-semibold">Mujer</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M10 16v5"/>
                                            <path d="M14 16v5"/>
                                            <path d="M8 16h8l-2 -7h-4z"/>
                                            <path d="M5 11c1.667 -1.333 3.333 -2 5 -2"/>
                                            <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2"/>
                                            <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                                        </svg>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="genderqueer-rp` + i + `-p-rp" name="` + i + `-p-rp" value="genderqueer-rp" data-position="p"  data-position="p" data-list="rp" data-level="`+ i +`" class="hidden peer">
                                    <label for="genderqueer-rp` + i + `-p-rp"
                                           class="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">
                                            <div class="font-semibold">No binario</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
                                            <path d="M12 11v-8" />
                                            <path d="M14.5 4.5l-5 3" />
                                            <path d="M9.5 4.5l5 3" />
                                        </svg>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="male-rp` + i + `-p-rp" name="` + i + `-p-rp" value="male-rp" data-position="p" data-position="p" data-list="rp" data-level="`+ i +`" class="hidden peer">
                                    <label for="male-rp` + i + `-p-rp"
                                           class="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">
                                            <div class="font-semibold">Hombre</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M10 16v5"/>
                                            <path d="M14 16v5"/>
                                            <path d="M9 9h6l-1 7h-4z"/>
                                            <path d="M5 11c1.333 -1.333 2.667 -2 4 -2"/>
                                            <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2"/>
                                            <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                                        </svg>
                                    </label>
                                </li>
                                <li class="flex items-center col-span-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" id="g5-`+ i +`-p" data-level="`+ i +`" data-position="p" data-position="p" value="g5" class="hidden peer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
                                        <label for="g5-`+ i +`-p" class="inline-flex overflow-hidden relative items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 21" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path class="cls-1" d="m8,15v5"/>
                                                <path class="cls-1" d="m12,15v5"/>
                                                <path class="cls-1" d="m7,8h6l2.8,7H4.2l2.8-7Z"/>
                                                <path class="cls-1" d="m19,11c-3-3-4.67-3-6-3l-3,7-3-7c-1.33,0-3.5.5-6,3"/>
                                                <path class="cls-1" d="m8,3c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2"/>
                                            </svg>
                                            <span>Grupos sociales en desventaja</span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="p-3 bg-gray-100 dark:bg-gray-900 rounded flex-col space-y-3">
                            <span class="font-bold">Suplente</span>
                            <ul class="grid w-full gap-3 md:grid-cols-3">
                                <li>
                                    <input type="radio" id="female-rp-` + i + `-s-rp" name="` + i + `-s-rp" value="female-rp" data-position="s" data-list="rp" data-level="`+ i +`" class="hidden peer"
                                           required>
                                    <label for="female-rp-` + i + `-s-rp"
                                           class="transition-all inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">
                                            <div class="font-semibold">Mujer</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-woman"
                                             width="24"
                                             height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M10 16v5"/>
                                            <path d="M14 16v5"/>
                                            <path d="M8 16h8l-2 -7h-4z"/>
                                            <path d="M5 11c1.667 -1.333 3.333 -2 5 -2"/>
                                            <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2"/>
                                            <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                                        </svg>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="genderqueer-rp-` + i + `-s-rp" name="` + i + `-s-rp" value="genderqueer-rp" data-position="s" data-list="rp" data-level="`+ i +`" class="hidden peer">
                                    <label for="genderqueer-rp-` + i + `-s-rp"
                                           class="transition-all inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">
                                            <div class="font-semibold">No binario</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
                                            <path d="M12 11v-8" />
                                            <path d="M14.5 4.5l-5 3" />
                                            <path d="M9.5 4.5l5 3" />
                                        </svg>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="male-rp-` + i + `-s-rp" name="` + i + `-s-rp" value="male-rp" data-position="s" data-list="rp" data-level="`+ i +`" class="hidden peer">
                                    <label for="male-rp-` + i + `-s-rp"
                                           class="transition-all inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">
                                            <div class="font-semibold">Hombre</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-man" width="24"
                                             height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M10 16v5"/>
                                            <path d="M14 16v5"/>
                                            <path d="M9 9h6l-1 7h-4z"/>
                                            <path d="M5 11c1.333 -1.333 2.667 -2 4 -2"/>
                                            <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2"/>
                                            <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                                        </svg>
                                    </label>
                                </li>
                                <li class="flex items-center col-span-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" id="g5-`+ i +`-s" data-level="`+ i +`" data-position="s" value="g5" class="hidden peer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
                                        <label for="g5-`+ i +`-s" class="inline-flex overflow-hidden relative items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 21" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path class="cls-1" d="m8,15v5"/>
                                                <path class="cls-1" d="m12,15v5"/>
                                                <path class="cls-1" d="m7,8h6l2.8,7H4.2l2.8-7Z"/>
                                                <path class="cls-1" d="m19,11c-3-3-4.67-3-6-3l-3,7-3-7c-1.33,0-3.5.5-6,3"/>
                                                <path class="cls-1" d="m8,3c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2"/>
                                            </svg>
                                            <span>Grupos sociales en desventaja</span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
             `;
        }
        _HTML__content_rp += `</div>`
        _e__blocks_rp.innerHTML += _HTML__content_rp;
        _e__blocks.innerHTML += _HTML__content;

        _e__female = document.querySelectorAll('input[value="female"]');
        _e__male = document.querySelectorAll('input[value="male"]');
        _e__pride = document.querySelectorAll('input[value="g5"]');

    })

    document.addEventListener('change', (El) => {
        // Primera palomita.
        let _c__one = document.querySelector('._c__one')
        // Segunda palomita.
        let _c__two = document.querySelector('._c__two'),
            _c__three = document.querySelector('._c__three'),
            _c__30y = document.querySelector('._c__30y'),
            _c__indigenous = document.querySelector('._c__indigenous'),
            _c__four = document.querySelector('._c__four');

        // Group by uuid or formula
        let p = _.groupBy(Array.from(document.querySelectorAll('input[value="female"]')).filter(f => f.dataset.level === '1'), function (e) {
            return e.dataset.uuid
        })

        // Comparing
        let _p = [];
        Object.keys(p).forEach(key => {
            ((p[key][0].checked && p[key][1].checked) ? _p.push(1) : _p.push(0))
            // ((p[key][0].checked && p[key][1].checked)) ? _c__one.classList.replace('text-gray-400', 'text-green-400') : _c__one.classList.replace('text-green-400', 'text-gray-400')
        })

        _.some(_p, function (e) {
            return e === 1
        }) ? (_c__one.classList.replace('text-gray-400', 'text-green-400')) : (_c__one.classList.replace('text-green-400', 'text-gray-400'))

        // Últimos bloques de mujeres
        let pp = _.groupBy(_.orderBy(Array.from(document.querySelectorAll('input[value="female"]')).filter(f => f.dataset.block === '3'), function (e) {
            return e.dataset.level
        }), function (e) {
            return e.dataset.uuid
        })

        let x = _.concat(pp[Object.keys(pp)[Object.keys(pp).length - 1]], pp[Object.keys(pp)[Object.keys(pp).length - 2]]);


        _.some(x, function (e) {
            return e.checked
        }) ? (_c__two.classList.replace('text-green-400', 'text-gray-400')) : (_c__two.classList.replace('text-gray-400', 'text-green-400'))

        /**
         * FORMULA DE JÓVENES
         * */

        let _e__youth = _.groupBy(document.querySelectorAll('input[value="youth"]'), function (e) {
            return e.dataset.uuid
        }), _e_youth_array = [];

        Object.keys(_e__youth).forEach(key => {
            ((_e__youth[key][0].checked && _e__youth[key][1].checked) ? _e_youth_array.push(1) : _e_youth_array.push(0))
        })

        _.some(_e_youth_array, function (e) {
            return e === 1
        }) ? (_c__30y.classList.replace('text-gray-400', 'text-green-400')) : (_c__30y.classList.replace('text-green-400', 'text-gray-400'))

        /**
         * FORMULA DE INDÍGENAS
         * */

        let _e__indigenous = _.groupBy(document.querySelectorAll('input[value="indigenous"]'), function (e) {
            return e.dataset.uuid
        }), _e_indigenous_array = [];

        Object.keys(_e__indigenous).forEach(key => {
            ((_e__indigenous[key][0].checked && _e__indigenous[key][1].checked) ? _e_indigenous_array.push(1) : _e_indigenous_array.push(0))
        })

        _.some(_e_indigenous_array, function (e) {
            return e === 1
        }) ? (_c__indigenous.classList.replace('text-gray-400', 'text-green-400')) : (_c__indigenous.classList.replace('text-green-400', 'text-gray-400'))

        /***
         * CONTEO DE GÉNEROS
         * */

        let _e__males = Array.from(document.querySelectorAll('input[value="male"]')).filter(j => j.checked),
            _e__females = Array.from(document.querySelectorAll('input[value="female"]')).filter(j => j.checked),
            _e__nums_positions = (parseInt(Blocks[(partySelectorEl.value - 1)].number_districts));

        console.error("_e__nums_positions: ", _e__nums_positions)

        /**
         * CONTEO DE FÓRMULAS.
         * HOMBRES
         * */
        let _e__males_checked = Array.from(document.querySelectorAll('input[value="male"]')).filter(j => j.checked),
            _e__genderqueer_checked = Array.from(document.querySelectorAll('input[value="genderqueer"]')).filter(j => j.checked);

        let _e__males_formulas = _.groupBy(_e__males_checked, function (e) {
                return e.dataset.uuid
            }),
            _e__males_formulas_array = [],
            _e__genderqueer_formulas = _.groupBy(_e__genderqueer_checked, function (e) {
                return e.dataset.uuid
            }),
            _e__genderqueer_formulas_array = [];

        Object.keys(_e__males_formulas).forEach(key => {
            (_e__males_formulas[key].length > 1) ? _e__males_formulas_array.push(1) : _e__males_formulas_array.push(0)
        });

        Object.keys(_e__genderqueer_formulas).forEach(key => {
            (_e__genderqueer_formulas[key].length > 1) ? _e__genderqueer_formulas_array.push(1) : _e__genderqueer_formulas_array.push(0)
        });

        console.log("_e__males_formulas_array: ", _.sum(_e__males_formulas_array))

        /**
         * MUJERES
         * */

        let _e__females_checked = Array.from(document.querySelectorAll('input[value="female"]')).filter(j => j.checked);

        let _e__females_formulas = _.groupBy(_e__females_checked, function (e) {
                return e.dataset.uuid
            }),
            _e__females_formulas_array = [];

        Object.keys(_e__females_formulas).forEach(key => {
            (_e__females_formulas[key].length > 1) ? _e__females_formulas_array.push(1) : _e__females_formulas_array.push(0)
        });

        console.log("_e__females_formulas_array: ", _.sum(_e__females_formulas_array))

        document.querySelector('._e__male_counter').innerHTML = (_e__males.filter(f => f.dataset.position === 'p').length + _e__genderqueer_checked.filter(f => f.dataset.position === 'p').length) + ' (' + _.round(((_e__males.filter(f => f.dataset.position === 'p').length + _e__genderqueer_checked.filter(f => f.dataset.position === 'p').length) / _e__nums_positions) * 100, 2) + '%)' + '<br>' + (_.sum(_e__males_formulas_array) + _.sum(_e__genderqueer_formulas_array)) + ' (' + _.round(((_.sum(_e__males_formulas_array) + _.sum(_e__genderqueer_formulas_array)) / _e__nums_positions) * 100, 2) + '%)'
        document.querySelector('._e__female_counter').innerHTML = _e__females.filter(f => f.dataset.position === 'p').length + ' (' + _.round((_e__females.filter(f => f.dataset.position === 'p').length / _e__nums_positions) * 100, 2) + '%)' + '<br>' + _.sum(_e__females_formulas_array) + ' (' + _.round((_.sum(_e__females_formulas_array) / _e__nums_positions) * 100, 2) + '%)'

        /**
         *  CONTEO DE PROPIETARIOS.
         *  Se alternan géneros según selección en Mayoría Relativa.
         * */
        let _e__male_p = Array.from(document.querySelectorAll('input[value="male"]:checked')).filter(f => f.dataset.position === 'p')

        if ((_e__male_p.length + _e__genderqueer_checked.length) / _e__nums_positions > 0.5) {
            let _h = Array.from(document.querySelectorAll('input[value="female-rp"]')).filter(f => f.dataset.position === 'p')

            Object.keys(_h).forEach((e) => {
                (_h[e].dataset.level % 2 === 0) ? (_h[e].checked = true) : (_h[e].checked = false)
            })

        }

        let _e__female_p = Array.from(document.querySelectorAll('input[value="female"]:checked')).filter(f => f.dataset.position === 'p')

        if (_e__female_p.length / _e__nums_positions > 0.5) {
            let _h = Array.from(document.querySelectorAll('input[value="male-rp"]')).filter(f => f.dataset.position === 'p')

            Object.keys(_h).forEach((e) => {
                (_h[e].dataset.level % 2 === 0) ? (_h[e].checked = true) : (_h[e].checked = false)
            })

        }

        /**
         * INTEGRACIÓN PARITARIA DE CADA BLOQUE
         * @TODO: Falta verificar la información para obtener el género de la primera candidatura en RP.
         * */

        let _e__male_by_block = _.groupBy(_.orderBy(Array.from(document.querySelectorAll('input[value="male"]')), function (e) {
                return e.dataset.level
            }), function (f) {
                return f.dataset.block
            }),
            _c__block_1_text = document.querySelector('._c__block_1_text'),
            _c__block_2_text = document.querySelector('._c__block_2_text'),
            _c__block_3_text = document.querySelector('._c__block_3_text'),
            _e__block_par = [], _xxx1 = [], _xxx2 = [], _xxx3 = [];

        let _xx1 = _.groupBy(_e__male_by_block[1], function (e) {
            return e.dataset.uuid
        })

        Object.keys(_xx1).forEach((e) => _xx1[e].filter(f => f.checked).length === 2 ? _xxx1.push(1) : _xxx1.push(0));

        (_.sum(_xxx1) > 3) ? (_c__block_1_text.classList.replace('text-green-400', 'text-red-400')) : (_c__block_1_text.classList.replace('text-red-400', 'text-green-400'));
        ((_.sum(_xxx1) > 3) ? _e__block_par.push(0) : _e__block_par.push(1))

        /***************************/
        let _xx2 = _.groupBy(_e__male_by_block[2], function (e) {
            return e.dataset.uuid
        })

        Object.keys(_xx2).forEach((e) => _xx2[e].filter(f => f.checked).length === 2 ? _xxx2.push(1) : _xxx2.push(0));

        (_.sum(_xxx2) > 3) ? (_c__block_2_text.classList.replace('text-green-400', 'text-red-400')) : (_c__block_2_text.classList.replace('text-red-400', 'text-green-400'));
        ((_.sum(_xxx2) > 3) ? _e__block_par.push(0) : _e__block_par.push(1))

        /***************************/
        let _xx3 = _.groupBy(_e__male_by_block[3], function (e) {
            return e.dataset.uuid
        })

        Object.keys(_xx3).forEach((e) => _xx3[e].filter(f => f.checked).length === 2 ? _xxx3.push(1) : _xxx3.push(0));

        (_.sum(_xxx3) > 3) ? (_c__block_3_text.classList.replace('text-green-400', 'text-red-400')) : (_c__block_3_text.classList.replace('text-red-400', 'text-green-400'));
        ((_.sum(_xxx3) > 3) ? _e__block_par.push(0) : _e__block_par.push(1));

        (_e__block_par[0] === 1 && _e__block_par[1] === 1 && _e__block_par[2] === 1) ? (_c__three.classList.replace('text-gray-400', 'text-green-400')) : (_c__three.classList.replace('text-green-400', 'text-gray-400'));

        /**
         * PARIDAD DE MUJERES
         * */
        let _e__female_formula = _.groupBy(Array.from(document.querySelectorAll('input[data-list="mr"]')).filter(f => f.checked), function (e) {
            return e.dataset.uuid
        })

        Object.keys(_e__female_formula).forEach((e) => {
            if (_e__female_formula[e].length > 1) {
                if (_e__female_formula[e][0].value === "female" && _e__female_formula[e][1].value !== "female") {
                    Modal.alert("Si el propietario es mujer, el suplente también debe ser mujer.")
                    document.querySelector('label[for="' + _e__female_formula[e][1].value + '-' + _e__female_formula[e][1].dataset.uuid + '-' + _e__female_formula[e][1].dataset.position + '"]').classList.replace('peer-checked:border-blue-600', 'peer-checked:border-red-600')
                } else {
                    document.querySelector('label[for="' + _e__female_formula[e][1].value + '-' + _e__female_formula[e][1].dataset.uuid + '-' + _e__female_formula[e][1].dataset.position + '"]').classList.replace('peer-checked:border-red-600', 'peer-checked:border-blue-600')
                    document.querySelector('label[for="' + _e__female_formula[e][1].value + '-' + _e__female_formula[e][1].dataset.uuid + '-' + _e__female_formula[e][1].dataset.position + '"]').classList.replace('peer-checked:border-blue-600', 'peer-checked:border-green-400')
                    setTimeout(function () {
                    document.querySelector('label[for="' + _e__female_formula[e][1].value + '-' + _e__female_formula[e][1].dataset.uuid + '-' + _e__female_formula[e][1].dataset.position + '"]').classList.replace('peer-checked:border-green-400', 'peer-checked:border-blue-600')
                    }, 1000)
                }
            }
        })

        /**
         * PARIDAD DE GÉNERO G4 EN RP
         * */
		let _e__g4 = _.groupBy(Array.from(document.querySelectorAll('input[value="g5"]')), function (e) {
			return e.dataset.level
		}), _e__g4_array = [];

		Object.keys(_e__g4).forEach(key => {
			((_e__g4[key][0].checked && _e__g4[key][1].checked) ? _e__g4_array.push(1) : _e__g4_array.push(0))
		})

		if (_e__g4_array[0] === 1 || _e__g4_array[1] === 1 || _e__g4_array[2] === 1) {
			_c__four.classList.replace('text-gray-400', 'text-green-400')
		} else {
			_c__four.classList.replace('text-green-400', 'text-gray-400')
		}

		console.log("_e__g4_array: ", _e__g4_array)

		/**
         * PARIDAD DE MUJERES EN RP
         * */
        let _e__female_formula_rp = _.groupBy(Array.from(document.querySelectorAll('input[data-list="rp"]')).filter(f => f.checked), function (e) {
            return e.dataset.level
        })

		console.log("_e__female_formula_rp: ", _e__female_formula_rp)

        Object.keys(_e__female_formula_rp).forEach((e) => {
			let _temp__lbl = document.querySelector('label[for="' + _e__female_formula_rp[e][1].value + '-' + _e__female_formula_rp[e][1].dataset.level + '-' + _e__female_formula_rp[e][1].dataset.position + '-' + _e__female_formula_rp[e][1].dataset.list + '"]');
            if (_e__female_formula_rp[e].length > 1) {
                if (_e__female_formula_rp[e][0].value === "female-rp" && _e__female_formula_rp[e][1].value !== "female-rp") {
                    Modal.alert("Si el propietario es mujer, el suplente también debe ser mujer.")
                    _temp__lbl.classList.replace('peer-checked:border-blue-600', 'peer-checked:border-red-600')
                } else {
                    _temp__lbl.classList.replace('peer-checked:border-red-600', 'peer-checked:border-blue-600')
                    _temp__lbl.classList.replace('peer-checked:border-blue-600', 'peer-checked:border-green-400')
                    setTimeout(function () {
                    _temp__lbl.classList.replace('peer-checked:border-green-400', 'peer-checked:border-blue-600')
                    }, 1000)
                }
            }
        })

        /**
         * BOTÓN VERIFICAR
         * */

        let _c__button_check = document.querySelector('._c__button_check'),
            _c__check = document.querySelectorAll('._c__check'),
            _c__check_array = [];

        Object.keys(_c__check).forEach((e) => {
            _c__check[e].classList.contains('text-green-400') ? _c__check_array.push(1) : _c__check_array.push(0)
        })
        console.log("_c__check_array: ", _c__check_array)
        _c__button_check.addEventListener('click', () => {
            _.some(_c__check_array, function (e) {
                return e === 0
            }) ? Modal.alert("Aún no se cumple con la paridad de género.") : Modal.alert("Se cumple con la paridad de género.")
        })
	})
});

