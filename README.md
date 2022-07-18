# Pokreadex

## Basic idea

A list of all pokémons with some per-pokémon details in [a Pokedex style](https://i.ibb.co/nQMC6D8/Sans-titre.png)

## More on the idea

### List

- An input to search through the list
- A simple list of all the Pokémons that can be fetched through the API
  - Pokédex order
  - List style: `N.<3_digit_number> <pokeball_icon> <name>`

### Detail

inspired from: https://pbs.twimg.com/media/EPYDuSJUEAMy3KD.png

- buttons : ? yellow, ? green, ? blue, clear red
- header:
  - left: `<type_icons>`
- body:
  - `<image>`
  - `N.<3_digit_number>`
  - `<name>`

## Design colors

- ![#D03939](https://via.placeholder.com/15/D03939/D03939.png) main red
- ![#202124](https://via.placeholder.com/15/202124/202124.png) main black
- ![#484047](https://via.placeholder.com/15/484047/484047.png) border black
- ![#6D7D97](https://via.placeholder.com/15/6D7D97/6D7D97.png) border gray

## API

https://pokeapi.co/

### Notes about the api

The REST API does not allow searches by name but a graphql interface allows this
