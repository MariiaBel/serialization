import serialization from './serialization.js'
import { describe, expect } from '@jest/globals';


const random = (size, symbols = [1, 300]) => {
    const arr = []
    while(size > 0) {
        arr.push(Math.floor(symbols[0] + Math.random() * symbols[1]))
        size--
    }
    return arr
}


const testCases = [
    { chars: [1]},
    { chars: [1,2,3,4,5]},
    { chars: [10,20,30,40,50]},
    { chars: [100,200,300,140,250]},
    { chars: [1,2,1,1,1,1,1,1,3,4,1,2,4,4,2,43,2,2,4,54,300,34,32,23,43,121,234,324,232,234]},
    { chars: [...random(900, [1,9])]},
    { chars: [...random(900, [10,99])]},
    { chars: [...random(900, [100,300])]},
    { chars: [...random(50)]},
    { chars: [...random(100)]},
    { chars: [...random(500)]},
    { chars: [...random(1000)]},
    { chars: [...random(300, [1,9]), ...random(300, [10,99]), ...random(300, [100,300])]},
]


describe.each(testCases)('Serialization numbers[] to string', (testItem) => {
    const serializationObj = serialization()
    let serializedStr = serializationObj.serialize(testItem.chars),
        deserializedArr = serializationObj.deserialize(),
        compression = serializationObj.compression;

    test(`numbers[] = [${testItem.chars.toString()}], \n serialized string = ${serializedStr}, \n deserialised numbers[] = [${deserializedArr.toString()}], \n compression = ${compression} %`, () => {
        expect(testItem.chars.length).toBe(deserializedArr.length)
        expect(testItem.chars).toEqual(deserializedArr)
    })
})
