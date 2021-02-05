// const container = document.getElementById('container')
// const div = document.createElement('div')
// console.log(container.appendChild(div))

fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));


const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries')
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country';

        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        `
        countryDiv.innerHTML = countryInfo
        countriesContainer.appendChild(countryDiv);
    });



    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div')
    //     countryDiv.className = 'country';

    //     const countryInfo = `
    //     <h3 class="country-name">${country.name}</h3>
    //     <p>${country.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo
    //     countriesContainer.appendChild(countryDiv);

    //     // const name = document.createElement('h3')
    //     // const capital = document.createElement('p')

    //     // name.innerText = country.name;
    //     // capital.innerText = country.capital

    //     // countryDiv.appendChild(name)
    //     // countryDiv.appendChild(capital)

    // }
}