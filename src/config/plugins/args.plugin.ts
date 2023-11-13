// ** Forma anterior.
// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// ** Forma moderna.
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'file name'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'file destination'
})
.check((argv, options) => {

    if( argv.b < 1) throw 'Error: because must greater thah 0';
    return true;
})
.parseSync()