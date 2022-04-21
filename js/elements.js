/*
ELEMENTS
Written by AvoRaDev
All infomration was taken from https://ptable.com and
https://www.lenntech.com/periodic/mass/atomic-mass.htm

Notes on given information
- Atomic masses have four significant figures
- 'number' object - atomic number
- 'mass' object - atomic mass
*/
const ELEMENTS = {
   Hydrogen: {
      number: 1,
      symbol: 'H',
      mass: 1.008
   },
   Helium: {
      number: 2,
      symbol: 'He',
      mass: 4.003
   },
   Lithium: {
      number: 3,
      symbol: 'Li',
      mass: 6.940
   },
   Beryllium: {
      number: 4,
      symbol: 'Be',
      mass: 9.012
   },
   Boron: {
      number: 5,
      symbol: 'B',
      mass: 10.81
   },
   Carbon: {
      number: 6,
      symbol: 'C',
      mass: 12.01
   },
   Nitrogen: {
      number: 7,
      symbol: 'N',
      mass: 14.01
   },
   Oxygen: {
      number: 8,
      symbol: 'O',
      mass: 16.00
   },
   Flourine: {
      number: 9,
      symbol: 'F',
      mass: 19.00
   },
   Neon: {
      number: 10,
      symbol: 'Ne',
      mass: 20.18
   },
   Sodium: {
      number: 11,
      symbol: 'Na',
      mass: 22.99
   },
   Magnesium: {
      number: 12,
      symbol: 'Mg',
      mass: 24.31
   },
   Aluminium: {
      number: 13,
      symbol: 'Al',
      mass: 26.98
   },
   Silicon: {
      number: 14,
      symbol: 'Si',
      mass: 28.09
   },
   Phosphorus: {
      number: 15,
      symbol: 'P',
      mass: 30.97
   },
   Sulfur: {
      number: 16,
      symbol: 'S',
      mass: 32.07
   },
   Chlorine: {
      number: 17,
      symbol: 'Cl',
      mass: 35.45
   },
   Argon: {
      number: 18,
      symbol: 'Ar',
      mass: 39.95
   },
   Potassium: {
      number: 19,
      symbol: 'K',
      mass: 39.10
   },
   Calcium: {
      number: 20,
      symbol: 'Ca',
      mass: 40.08
   },
   Scandium: {
      number: 21,
      symbol: 'Sc',
      mass: 44.96
   },
   Titanium: {
      number: 22,
      symbol: 'Ti',
      mass: 47.87
   },
   Vanadium: {
      number: 23,
      symbol: 'V',
      mass: 50.94
   },
   Chromium: {
      number: 24,
      symbol: 'Cr',
      mass: 52.00
   },
   Manganese: {
      number: 25,
      symbol: 'Mn',
      mass: 54.94
   },
   Iron: {
      number: 26,
      symbol: 'Fe',
      mass: 55.85
   },
   Cobalt: {
      number: 27,
      symbol: 'Co',
      mass: 58.93
   },
   Nickel: {
      number: 28,
      symbol: 'Ni',
      mass: 58.69
   },
   Copper: {
      number: 29,
      symbol: 'Cu',
      mass: 63.55
   },
   Zinc: {
      number: 30,
      symbol: 'Zn',
      mass: 65.39
   },
   Gallium: {
      number: 31,
      symbol: 'Ga',
      mass: 69.72
   },
   Germanium: {
      number: 32,
      symbol: 'Ge',
      mass: 72.64
   },
   Arsenic: {
      number: 33,
      symbol: 'As',
      mass: 74.92
   },
   Selenium: {
      number: 34,
      symbol: 'Se',
      mass: 78.96
   },
   Bromine: {
      number: 35,
      symbol: 'Br',
      mass: 79.90
   },
   Krypton: {
      number: 36,
      symbol: 'Kr',
      mass: 83.80
   },
   Rubidium: {
      number: 37,
      symbol: 'Rb',
      mass: 85.47
   },
   Stronium: {
      number: 38,
      symbol: 'Sr',
      mass: 87.62
   },
   Yttrium: {
      number: 39,
      symbol: 'Y',
      mass: 88.91
   },
   Zirconium: {
      number: 40,
      symbol: 'Zr',
      mass: 91.22
   },
   Niobium: {
      number: 41,
      symbol: 'Nb',
      mass: 92.91
   },
   Molybdenum: {
      number: 42,
      symbol: 'Mo',
      mass: 95.94
   },
   Technetium: {
      number: 43,
      symbol: 'Tc',
      mass: 98.00
   },
   Ruthenium: {
      number: 44,
      symbol: 'Ru',
      mass: 101.07
   },
   Rhodium: {
      number: 45,
      symbol: 'Rh',
      mass: 102.91
   },
   Palladium: {
      number: 46,
      symbol: 'Pd',
      mass: 106.4
   },
   Silver: {
      number: 47,
      symbol: 'Ag',
      mass: 107.9
   },
   Cadmium: {
      number: 48,
      symbol: 'Cd',
      mass: 112.4
   },
   Indium: {
      number: 49,
      symbol: 'In',
      mass: 114.8
   },
   Tin: {
      number: 50,
      symbol: 'Sn',
      mass: 118.7
   },
   Antimony: {
      number: 51,
      symbol: 'Sb',
      mass: 121.8
   },
   Tellurium: {
      number: 52,
      symbol: 'Te',
      mass: 127.6
   },
   Iodine: {
      number: 53,
      symbol: 'I',
      mass: 126.9
   },
   Xenon: {
      number: 54,
      symbol: 'Xe',
      mass: 131.3
   },
   Cesium: {
      number: 55,
      symbol: 'Cs',
      mass: 132.9
   },
   Barium: {
      number: 56,
      symbol: 'Ba',
      mass: 137.3
   },
   Lanthanum: {
      number: 57,
      symbol: 'La',
      mass: 138.9
   },
   Cerium: {
      number: 58,
      symbol: 'Ce',
      mass: 140.9
   },
   Praseodymium: {
      number: 59,
      symbol: 'Pr',
      mass: 140.9
   },
   Neodymium: {
      number: 60,
      symbol: 'Nd',
      mass: 144.2
   },
   Promethium: {
      number: 61,
      symbol: 'Pm',
      mass: '(145)'
   },
   Samarium: {
      number: 62,
      symbol: 'Sm',
      mass: 150.4
   },
   Europium: {
      number: 63,
      symbol: 'Eu',
      mass: 152.0
   },
   Gadolinium: {
      number: 64,
      symbol: 'Gd',
      mass: 157.3
   },
   Terbium: {
      number: 65,
      symbol: 'Tb',
      mass: 158.9
   },
   Dysprosium: {
      number: 66,
      symbol: 'Dy',
      mass: 162.5
   },
   Holmium: {
      number: 67,
      symbol: 'Ho',
      mass: 164.9
   },
   Erbium: {
      number: 68,
      symbol: 'Er',
      mass: 167.3
   },
   Thulium: {
      number: 69,
      symbol: 'Tm',
      mass: 168.9
   },
   Ytterbium: {
      number: 70,
      symbol: 'Yb',
      mass: 173.0
   },
   Lutetium: {
      number: 71,
      symbol: 'Lu',
      mass: 175.0
   },
   Hafnium: {
      number: 72,
      symbol: 'Hf',
      mass: 178.5
   },
   Tantalum: {
      number: 73,
      symbol: 'Ta',
      mass: 180.9
   },
   Tungsten: {
      number: 74,
      symbol: 'W',
      mass: 183.8
   },
   Rhenium: {
      number: 75,
      symbol: 'Re',
      mass: 186.3
   },
   Osmium: {
      number: 76,
      symbol: 'Os',
      mass: 190.2
   },
   Iridium: {
      number: 77,
      symbol: 'Ir',
      mass: 192.2
   },
   Platinum: {
      number: 78,
      symbol: 'Pt',
      mass: 195.1
   },
   Gold: {
      number: 79,
      symbol: 'Au',
      mass: 197.0
   },
   Mercury: {
      number: 80,
      symbol: 'Hg',
      mass: 200.6
   },
   Thallium: {
      number: 81,
      symbol: 'Tl',
      mass: 204.4
   },
   Lead: {
      number: 82,
      symbol: 'Pb',
      mass: 207.2
   },
   Bismuth: {
      number: 83,
      symbol: 'Bi',
      mass: 209.0
   },
   Polonium: {
      number: 84,
      symbol: 'Po',
      mass: '(209)'
   },
   Astatine: {
      number: 85,
      symbol: 'At',
      mass: '(210)'
   },
   Radon: {
      number: 86,
      symbol: 'Rn',
      mass: '(22)'
   },
   Francium: {
      number: 87,
      symbol: 'Fr',
      mass: '(223)'
   },
   Radium: {
      number: 88,
      symbol: 'Ra',
      mass: '(226)'
   },
   Actinium: {
      number: 89,
      symbol: 'Ac',
      mass: '(227)'
   },
   Thorium: {
      number: 90,
      symbol: 'Th',
      mass: 232.0
   },
   Protactinium: {
      number: 91,
      symbol: 'Pa',
      mass: 231.0
   },
   Uranium: {
      number: 92,
      symbol: 'U',
      mass: 238.0
   },
   Neptunium: {
      number: 93,
      symbol: 'Np',
      mass: '(237)'
   },
   Plutonium: {
      number: 94,
      symbol: 'Pu',
      mass: '(244)'
   },
   Americium: {
      number: 95,
      symbol: 'Am',
      mass: '(243)'
   },
   Curium: {
      number: 96,
      symbol: 'Cm',
      mass: '(247)'
   },
   Berkelium: {
      number: 97,
      symbol: 'Bk',
      mass: '(247)'
   },
   Californium: {
      number: 98,
      symbol: 'Cf',
      mass: '(251)'
   },
   Einsteinium: {
      number: 99,
      symbol: 'Es',
      mass: '(252)'
   },
   Fermium: {
      number: 100,
      symbol: 'Fm',
      mass: '(257)'
   },
   Mendelevium: {
      number: 101,
      symbol: 'Md',
      mass: '(258)'
   },
   Nobelium: {
      number: 102,
      symbol: 'No',
      mass: '(259)'
   },
   Lawrencium: {
      number: 103,
      symbol: 'Lr',
      mass: '(262)'
   },
   Rutherfordium: {
      number: 104,
      symbol: 'Rf',
      mass: '(261)'
   },
   Dubnium: {
      number: 105,
      symbol: 'Db',
      mass: '(262)'
   },
   Seaborgium: {
      number: 106,
      symbol: 'Sg',
      mass: '(266)'
   },
   Bohrium: {
      number: 107,
      symbol: 'Bh',
      mass: '(264)'
   },
   Hassium: {
      number: 108,
      symbol: 'Hs',
      mass: '(277)'
   },
   Meitnerium: {
      number: 109,
      symbol: 'Mt',
      mass: '(268)'
   },
   Darmstadtium: {
      number: 110,
      symbol: 'Ds',
      mass: '(281)'
   },
   Roentgenium: {
      number: 111,
      symbol: 'Rg',
      mass: '(272)'
   },
   Copernicium: {
      number: 112,
      symbol: 'Cn',
      mass: '(285)'
   },
   Nihonium: {
      number: 113,
      symbol: 'Nh',
      mass: '(286)'
   },
   Flerovium: {
      number: 114,
      symbol: 'Fl',
      mass: '(289)'
   },
   Moscovium: {
      number: 115,
      symbol: 'Mc',
      mass: '(290)'
   },
   Livermorium: {
      number: 116,
      symbol: 'Lv',
      mass: '(293)'
   },
   Tennessine: {
      number: 117,
      symbol: 'Ts',
      mass: '(294)'
   },
   Oganesson: {
      number: 118,
      symbol: 'Og',
      mass: '(294)'
   },
   // ---------------------------------
   // OTHER FUNCTIONS & ARRAYS
   // ---------------------------------
   
   // element names array used for a variaty of functions
   elems: [],
   // index arrays used for searching
   idx: {
      name: [],
      number: [],
      symbol: [],
      mass: []
   },
   // functions used on page load
   Init: function(targetDiv, itemStyle) {
      // create array with all of ELEMENTS' object keys (element names)
      this.elems = Object.keys(ELEMENTS);
      
      // remove non-element keys from the array
      this.elems.splice(118, (this.elems.length - 118));
      
      // functions
      this.Index();
      this.LoadAll(targetDiv, itemStyle);
   },
   // load all elements to a targeted div with a given class style
   LoadAll: function(targetDiv, itemStyle = 'none') {
      Object.keys(ELEMENTS).forEach(function(name, index) {
         if (index < 118) {
            ELEMENTS.FormatItem(
               name,
               ELEMENTS[name].number,
               ELEMENTS[name].symbol,
               ELEMENTS[name].mass,
               targetDiv,
               itemStyle
            );
         }
      });
   },
   // sort all indexes
   Index: function() {
      // name index
      this.idx.name = this.elems.sort();
      
      // atomic number index
      this.elems.forEach(function(name) {
         ELEMENTS.idx.number.push(ELEMENTS[name].number);
      });
      this.idx.number = this.idx.number.sort(function(a, b){return a - b});
      
      // symbol index
      this.elems.forEach(function(name) {
         ELEMENTS.idx.symbol.push(ELEMENTS[name].symbol);
      });
      this.idx.symbol = this.idx.symbol.sort();
      
      // atomic mass index
      this.elems.forEach(function(name) {
         if (typeof(ELEMENTS[name].mass) === 'number') {
            ELEMENTS.idx.mass.push(ELEMENTS[name].mass);
         } else { // i.e. '(286)'
            ELEMENTS.idx.mass.push(
               // + 0.0001 used to identify that it's radioactive
               parseInt( ELEMENTS[name].mass.substr(1,3) ) + 0.0001
            );
         }
      });
      this.idx.mass = this.idx.mass.sort(function(a, b){return a - b});
   },
   // format elements into divs
   FormatItem: function(name, num, sym, mass, targetDiv, itemStyle) {
      // div for all items
      let container = document.createElement('div');
      container.setAttribute('id', name);
      container.classList.add(itemStyle);
      
      // atomic number
      let number = document.createElement('h1');
      number.innerHTML = num;
      container.appendChild(number);
      
      // element's symbol
      let symbol = document.createElement('h2');
      symbol.innerHTML = sym;
      container.appendChild(symbol);
      
      // element's name
      let eName = document.createElement('h3');
      eName.innerHTML = `<a href="https://en.wikipedia.org/wiki/${name}" target="_blank">${name}</a>`;
      container.appendChild(eName);
      
      // atomic mass
      let eMass = document.createElement('h4');
      if (isNaN(mass)) { // i.e. (286)
         eMass.innerHTML = mass;
      } else if (mass < 10) { // i.e. 1.008
         eMass.innerHTML = mass.toFixed(3);
      } else if (mass < 100) { // i.e. 12.01
         eMass.innerHTML = mass.toFixed(2);
      } else { // i.e. 192.2
         eMass.innerHTML = mass.toFixed(1);
      }
      container.appendChild(eMass);
      
      // append to targeted div
      document.getElementById(targetDiv).appendChild(container);
   },
   // get a random element
   getRandElem: function() {
      // return random element name
      return this.elems[this.getRandInt(0, this.elems.length - 1)];
   },
   // get a random interger
   getRandInt: function(min, max) {
      return Math.floor(Math.random() * ((max - min) + 1)) + min;
   }
};

