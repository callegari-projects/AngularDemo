(function () {
    var app = angular.module('pokedex', []);
    app.controller('PokemonController', function () {
        this.pokemon = {
            id: 001,
            name: 'Bulbasaur',
            specides: 'Seed Pokemon',
            type: ['Grass', 'Poison'],
            height: "2'4",
            weight: '15.2 lbs',
            abilities: ['Overgrow', 'Chlorophyll']
        };
    });
})();