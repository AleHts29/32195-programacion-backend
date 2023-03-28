// import { strict as assert } from 'assert';

// para valores no strictos
import assert  from 'assert';


describe("Caso de uso 1", ()=>{
    it('Test 1:', ()=>{
        assert.strictEqual(1, 1, 'Fallo test 1');
    })

    it('Test 2:', ()=>{
        assert.strictEqual(2, 2, 'Fallo test 2');
    })

    it('Test 3:', ()=>{
        assert.strictEqual(3, 3), 'Fallo test 3';
    })
})

describe("Caso de uso 2", ()=>{

    it('Test 1:', ()=>{
        assert.equal(1, '1');
    })

    it('Test 2:', ()=>{
        assert.strictEqual(3, '3');
    })
})