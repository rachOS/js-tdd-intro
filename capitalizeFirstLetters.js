/**
 * La fonction à écrire, capitalizeFirstLetters, est une variante de la précédente. 
 * Elle accepte comme entrée une chaîne, et renvoie une chaîne. 
 * Il s'agit cette fois de parcourir la chaîne, constituée de mots séparés par des espaces, 
 * et de convertir la première lettre de chaque mot en majuscule.
 
 * Ainsi, la chaîne i am learning TDD sera convertie en I Am Learning TDD.
 * Commence par créer les tests, avec au moins trois cas de test :
 *  une chaîne avec plusieurs mots
 *  une chaîne avec un seul mot (voire une seule lettre)
 *  une chaîne vide
 */

const assert = require("assert");
const capitalizeFirstLetters = input => input ? `${input[0].toUpperCase() + input.slice(1) }`: ""

assert.strictEqual(typeof capitalizeFirstLetters, 'function')
assert.strictEqual(capitalizeFirstLetters(""),"")
assert.strictEqual(typeof capitalizeFirstLetters(), 'string')
assert.strictEqual(capitalizeFirstLetters("h"),"H")
assert.strictEqual(capitalizeFirstLetters("he"),"He")
assert.strictEqual(capitalizeFirstLetters("hello"),"Hello")
assert.strictEqual(capitalizeFirstLetters("hello world"),"Hello World")
