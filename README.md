# Serialization
#### project for serializing numbers[] to SCII string


### How to use 

```js

const serializationObj = serialization()
const serializedStr = serializationObj.serialize([1,2,1,1,1,1,1,1,3,4,1,2,4,4,2,43,2,2,4,54,300,34,32,23,43,121,234,324,232,234])
const deserializedArr = serializationObj.deserialize()
const compression = serializationObj.compression

console.log(serializedStr)
console.log(deserializedArr)
console.log(compression)

```

### Passed Test Cases

```js

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
```
