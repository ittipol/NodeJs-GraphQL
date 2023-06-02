import TestSchema from './mongoose_schema_test.mjs'

export const testSave = () => {
    const data = new TestSchema({
        name: 'AAA',
        firstName: 'ZZZZ',
        lastname: 'BBBBBB',
        age: 33
    })
    
    data.save()

    console.log('Save....')
}